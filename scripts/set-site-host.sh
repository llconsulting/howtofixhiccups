#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: scripts/set-site-host.sh https://example.com" >&2
  exit 2
fi

new="$1"
if [[ ! "$new" =~ ^https://[^/]+$ ]]; then
  echo "host must be an https origin with no path" >&2
  exit 2
fi

root="$(cd "$(dirname "$0")/.." && pwd)"
old="$(grep -E '^https://' "$root/host.txt" | head -1 | tr -d '[:space:]')"
if [[ -z "$old" ]]; then
  echo "host.txt has no https origin" >&2
  exit 1
fi
if [[ "$old" == "$new" ]]; then
  echo "host.txt already uses $new"
  exit 0
fi

python3 - "$root" "$old" "$new" << 'PY'
import pathlib, re, sys
root, old, new = sys.argv[1:]
old_host = old.removeprefix("https://")
new_host = new.removeprefix("https://")

def protect(text, suffix):
    saved = []

    def park(match):
        saved.append(match.group(0))
        return f"__C{len(saved) - 1}__"

    if suffix == ".js":
        text = re.sub(r"/\*.*?\*/", park, text, flags=re.S)
        text = re.sub(r"(?m)//.*?$", park, text)
    elif suffix in {".html", ".xml"}:
        text = re.sub(r"<!--.*?-->", park, text, flags=re.S)
    elif suffix == ".txt":
        text = re.sub(r"(?m)^\s*#.*?$", park, text)
    return text, saved

def restore(text, saved):
    for i, block in enumerate(saved):
        text = text.replace(f"__C{i}__", block)
    return text

changed = 0
for path in pathlib.Path(root).rglob("*"):
    if not path.is_file():
        continue
    if any(part in {".git", "node_modules"} for part in path.parts):
        continue
    if path.suffix.lower() not in {".html", ".xml", ".txt", ".js"}:
        continue
    original = path.read_text()
    if old_host not in original:
        continue
    body, saved = protect(original, path.suffix.lower())
    lines = []
    hits = 0
    label = re.compile(r'(aria-label="[^"]*)' + re.escape(old_host) + r'([^"]*")')
    origin = "https://" + old_host
    new_origin = "https://" + new_host
    for line in body.splitlines(keepends=True):
        if 'name="twitter:image"' in line:
            lines.append(line)
            continue
        if origin in line:
            hits += line.count(origin)
            line = line.replace(origin, new_origin)
        if old_host in line:
            new_line, count = label.subn(r"\1" + new_host + r"\2", line)
            hits += count
            line = new_line
        lines.append(line)
    updated = restore("".join(lines), saved)
    if updated != original:
        path.write_text(updated)
        changed += 1
        print(f"{path.relative_to(root)}: {hits}")
print(f"updated {changed} files")
PY
