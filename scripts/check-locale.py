#!/usr/bin/env python3

import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITEMAP_NS = "http://www.sitemaps.org/schemas/sitemap/0.9"
XHTML_NS = "http://www.w3.org/1999/xhtml"
TWITTER_IMAGE = "https://howtofixhiccups.com/og.png"
NOTE = "Esta página se tradujo de forma automática."
PAIRS = [
    ("index.html", "es/index.html", "/", "/es/"),
    ("why/index.html", "es/why/index.html", "/why/", "/es/why/"),
    ("when/index.html", "es/when/index.html", "/when/", "/es/when/"),
    ("privacy/index.html", "es/privacy/index.html", "/privacy/", "/es/privacy/"),
]
EM_DASH = "\u2014"
HOUR_FOR_CARE = re.compile(
    r"\b(?:hours?|horas?)\b|\b(?:two days|dos días)\b|\d+\s*-\s*hours?\b|\d+\s*h\b|sources vary|fuentes varían",
    re.I,
)


def host_from_file():
    for line in (ROOT / "host.txt").read_text().splitlines():
        line = line.strip()
        if line.startswith("https://"):
            return line
    sys.exit("host.txt has no https origin")


def strip_comments(text, suffix):
    if suffix == ".js":
        text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
        text = re.sub(r"(?m)(?<!:)//.*?$", "", text)
        return text
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    if suffix == ".txt":
        text = re.sub(r"(?m)^\s*#.*$", "", text)
    return text


def attr_map(tag):
    return dict(re.findall(r'([\w:-]+)="([^"]*)"', tag))


def hreflang_map(html):
    found = {}
    for tag in re.findall(r"<link\b[^>]*>", html):
        attrs = attr_map(tag)
        if attrs.get("rel") == "alternate" and "hreflang" in attrs:
            found.setdefault(attrs["hreflang"], []).append(attrs.get("href", ""))
    return found


def fail(errors, message):
    errors.append(message)


def check_page(errors, host, path, lang, self_path, en_path, es_path):
    html = (ROOT / path).read_text()
    if f'<html lang="{lang}">' not in html:
        fail(errors, f"{path} html lang is not {lang}")
    if EM_DASH in html:
        fail(errors, f"{path} contains an em dash")
    alternates = hreflang_map(html)
    expected = {
        "en": f"{host}{en_path}",
        "es": f"{host}{es_path}",
        "x-default": f"{host}{en_path}",
    }
    for code, href in expected.items():
        got = alternates.get(code, [])
        if got != [href]:
            fail(errors, f"{path} hreflang {code} is {got}, expected [{href}]")
    canonical = re.findall(r'<link rel="canonical" href="([^"]*)"', html)
    self_url = f"{host}{self_path}"
    if canonical != [self_url]:
        fail(errors, f"{path} canonical is {canonical}, expected [{self_url}]")
    og_url = re.findall(r'<meta property="og:url" content="([^"]*)"', html)
    if og_url != [self_url]:
        fail(errors, f"{path} og:url is {og_url}, expected [{self_url}]")
    if lang == "es" and NOTE not in html:
        fail(errors, f"{path} is missing the automatic-translation note")
    if lang == "en" and NOTE in html:
        fail(errors, f"{path} has the Spanish translation note")
    switch = re.search(r'<nav class="lang"[^>]*>.*?</nav>', html, re.S)
    if not switch:
        fail(errors, f"{path} is missing the language switcher")
    else:
        block = switch.group(0)
        if f'href="{en_path}"' not in block or f'href="{es_path}"' not in block:
            fail(errors, f"{path} language switcher does not point at the pair")
        current = re.findall(r'<a\b[^>]*aria-current="page"[^>]*>', block)
        if len(current) != 1 or f'href="{self_path}"' not in current[0]:
            fail(errors, f"{path} language switcher current link is {current}")
    if "when" in path and HOUR_FOR_CARE.search(strip_comments(html, ".html")):
        fail(errors, f"{path} names a number of hours")


def local_assets(html):
    paths = []
    for value in re.findall(r'(?:src|href|data-src|poster)="([^"]+)"', html):
        if value.startswith("/") and not value.startswith("//"):
            paths.append(value.split("#", 1)[0].split("?", 1)[0])
        elif value.startswith("https://howtofixhiccups."):
            parsed = value.split("?", 1)[0]
            path = "/" + parsed.split("/", 3)[-1] if parsed.count("/") >= 3 else ""
            if path.startswith("/") and "." in Path(path).name:
                paths.append(path)
    return paths


def check_assets(errors):
    seen = set()
    for pair in PAIRS:
        for rel in pair[:2]:
            for asset in local_assets((ROOT / rel).read_text()):
                if asset in seen or asset.endswith("/"):
                    continue
                if "." not in Path(asset).name:
                    continue
                seen.add(asset)
                if not (ROOT / asset.lstrip("/")).is_file():
                    fail(errors, f"missing asset {asset} referenced by {rel}")


def check_host_tokens(errors, host):
    files = [ROOT / "robots.txt", ROOT / "sitemap.xml", ROOT / "js" / "method.js", ROOT / "host.txt"]
    for pair in PAIRS:
        files.extend(ROOT / rel for rel in pair[:2])
    for path in files:
        text = strip_comments(path.read_text(), path.suffix)
        hostname = host.removeprefix("https://")
        for line in text.splitlines():
            if 'name="twitter:image"' in line:
                continue
            for url in re.findall(r"https://[^\s\"'<>]+", line):
                if "howtofixhiccups.netlify.app" in url or "howtofixhiccups.com" in url:
                    if not url.startswith(host):
                        fail(errors, f"{path.relative_to(ROOT)} uses {url}, host.txt is {host}")
            for label in re.findall(r'aria-label="([^"]*)"', line):
                if "howtofixhiccups." in label and hostname not in label:
                    fail(errors, f"{path.relative_to(ROOT)} share label host is not {hostname}")
        if path.suffix == ".html":
            images = re.findall(r'<meta name="twitter:image" content="([^"]*)"', path.read_text())
            rel = str(path.relative_to(ROOT))
            if rel in {"index.html", "es/index.html"}:
                if images != [TWITTER_IMAGE]:
                    fail(errors, f"{rel} twitter:image is {images}")
            elif images:
                fail(errors, f"{rel} should not add twitter:image")


def check_sitemap(errors, host):
    xml = (ROOT / "sitemap.xml").read_text()
    if EM_DASH in xml:
        fail(errors, "sitemap.xml contains an em dash")
    try:
        root = ET.fromstring(xml)
    except ET.ParseError as exc:
        fail(errors, f"sitemap.xml is not valid XML: {exc}")
        return
    if root.tag != f"{{{SITEMAP_NS}}}urlset":
        fail(errors, f"sitemap root is {root.tag}")
    urls = {}
    for url in root.findall(f"{{{SITEMAP_NS}}}url"):
        loc = url.findtext(f"{{{SITEMAP_NS}}}loc", default="")
        links = {}
        for link in url.findall(f"{{{XHTML_NS}}}link"):
            links.setdefault(link.attrib.get("hreflang"), []).append(link.attrib.get("href"))
        urls[loc] = links
    for _en_file, _es_file, en_path, es_path in PAIRS:
        expected = {
            "en": f"{host}{en_path}",
            "es": f"{host}{es_path}",
            "x-default": f"{host}{en_path}",
        }
        for loc in (f"{host}{en_path}", f"{host}{es_path}"):
            got = urls.get(loc)
            if got is None:
                fail(errors, f"sitemap is missing {loc}")
                continue
            for code, href in expected.items():
                if got.get(code) != [href]:
                    fail(errors, f"sitemap {loc} hreflang {code} is {got.get(code)}")
    if len(urls) != 8:
        fail(errors, f"sitemap has {len(urls)} urls, expected 8")


def main():
    host = host_from_file()
    errors = []
    for en_file, es_file, en_path, es_path in PAIRS:
        check_page(errors, host, en_file, "en", en_path, en_path, es_path)
        check_page(errors, host, es_file, "es", es_path, en_path, es_path)
    check_assets(errors)
    check_host_tokens(errors, host)
    check_sitemap(errors, host)
    if EM_DASH in (ROOT / "js" / "method.js").read_text():
        fail(errors, "js/method.js contains an em dash")
    if errors:
        print("\n".join(f"FAIL: {item}" for item in errors))
        sys.exit(1)
    print(f"Locale lock OK: 8 pages, host {host}, reciprocal hreflang.")


if __name__ == "__main__":
    main()
