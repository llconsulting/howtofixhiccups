#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

fail=0
pages=(
  index.html
  why/index.html
  when/index.html
  privacy/index.html
  404.html
  es/index.html
  es/why/index.html
  es/when/index.html
  es/privacy/index.html
)

extract_nav() {
  awk -v marker="$2" '
    index($0, marker) { capture = 1 }
    capture { print }
    capture && /<\/nav>/ { exit }
  ' "$1"
}

for page in "${pages[@]}"; do
  if [[ "$page" == es/* ]]; then
    nav="$(extract_nav "$page" 'aria-label="Principal"')"
    privacy_href='href="/es/privacy/"'
    footer_label='aria-label="Pie"'
  else
    nav="$(extract_nav "$page" 'aria-label="Primary"')"
    privacy_href='href="/privacy/"'
    footer_label='aria-label="Footer"'
  fi
  if printf '%s\n' "$nav" | grep -qiE 'privacy|privacidad'; then
    echo "FAIL: $page primary nav contains Privacy"
    fail=1
  fi
  links="$(printf '%s\n' "$nav" | grep -c '<a ' || true)"
  if [[ "$links" -ne 3 ]]; then
    echo "FAIL: $page primary nav has $links links (expected exactly 3)"
    fail=1
  fi
  footer="$(extract_nav "$page" "$footer_label")"
  if ! printf '%s\n' "$footer" | grep -q "$privacy_href"; then
    echo "FAIL: $page footer is missing Privacy"
    fail=1
  fi
done

if grep -R --include='*.html' -n 'Privacy stays in the header' . >/dev/null; then
  echo "FAIL: leftover restore comment still claims Privacy belongs in the header"
  fail=1
fi

if [[ "$fail" -ne 0 ]]; then
  echo "Primary nav lock failed."
  exit 1
fi

echo "Primary nav lock OK: 3 header links, Privacy footer-only."
