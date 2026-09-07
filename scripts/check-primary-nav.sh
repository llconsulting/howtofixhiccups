#!/usr/bin/env bash
# Deploy lock: primary header is exactly three links.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
fail=0
pages=(index.html why/index.html when/index.html privacy/index.html 404.html)
extract_nav() {
  awk -v marker="$2" '
    index($0, marker) { capture = 1 }
    capture { print }
    capture && /<\/nav>/ { exit }
  ' "$1"
}
for page in "${pages[@]}"; do
  nav="$(extract_nav "$page" 'aria-label="Primary"')"
  if printf '%s\n' "$nav" | grep -qi 'privacy'; then
    echo "FAIL: $page primary nav contains Privacy"
    fail=1
  fi
  links="$(printf '%s\n' "$nav" | grep -c '<a ' || true)"
  if [[ "$links" -ne 3 ]]; then
    echo "FAIL: $page primary nav has $links links; expected 3"
    fail=1
  fi
  footer="$(extract_nav "$page" 'aria-label="Footer"')"
  if ! printf '%s\n' "$footer" | grep -qi 'href="/privacy/"'; then
    echo "FAIL: $page footer missing Privacy"
    fail=1
  fi
done
if grep -R --include='*.html' -n 'Privacy stays in the header' . >/dev/null; then
  echo "FAIL: leftover restore comment"
  fail=1
fi
if [[ "$fail" -ne 0 ]]; then
  echo "Primary nav lock failed."
  exit 1
fi
echo "Primary nav lock OK: 3 header links, Privacy footer-only."
