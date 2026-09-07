#!/usr/bin/env bash
# Fail the build if Privacy (or any fourth link) lands in primary header nav.
# Footer Privacy must remain. This is the deploy-preview lock Mike keeps asking for.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

fail=0
pages=(index.html why/index.html when/index.html privacy/index.html 404.html)

extract_nav() {
  local file="$1"
  local marker="$2"
  awk -v marker="$marker" '
    index($0, marker) { capture = 1 }
    capture { print }
    capture && /<\/nav>/ { exit }
  ' "$file"
}

for page in "${pages[@]}"; do
  if [[ ! -f "$page" ]]; then
    echo "FAIL: missing $page"
    fail=1
    continue
  fi

  nav="$(extract_nav "$page" 'aria-label="Primary"')"
  if [[ -z "$nav" ]]; then
    echo "FAIL: $page has no aria-label=\"Primary\" nav"
    fail=1
    continue
  fi

  if printf '%s\n' "$nav" | grep -qi 'privacy'; then
    echo "FAIL: $page primary nav contains Privacy"
    printf '%s\n' "$nav"
    fail=1
  fi

  if printf '%s\n' "$nav" | grep -q 'Privacy stays in the header'; then
    echo "FAIL: $page still has the old header-Privacy lock comment"
    fail=1
  fi

  links="$(printf '%s\n' "$nav" | grep -c '<a ' || true)"
  if [[ "$links" -ne 3 ]]; then
    echo "FAIL: $page primary nav has $links links; expected exactly 3"
    fail=1
  fi

  printf '%s\n' "$nav" | grep -q 'href="/"' || { echo "FAIL: $page primary nav missing /"; fail=1; }
  printf '%s\n' "$nav" | grep -q 'href="/why/"' || { echo "FAIL: $page primary nav missing /why/"; fail=1; }
  printf '%s\n' "$nav" | grep -q 'href="/when/"' || { echo "FAIL: $page primary nav missing /when/"; fail=1; }

  footer="$(extract_nav "$page" 'aria-label="Footer"')"
  if ! printf '%s\n' "$footer" | grep -qi 'href="/privacy/"'; then
    echo "FAIL: $page footer is missing Privacy"
    fail=1
  fi
done

if grep -R --include='*.html' --include='*.js' -n 'Privacy stays in the header' . >/dev/null; then
  echo "FAIL: leftover 'Privacy stays in the header' comment"
  grep -R --include='*.html' --include='*.js' -n 'Privacy stays in the header' .
  fail=1
fi

if [[ "$fail" -ne 0 ]]; then
  echo "Primary nav lock failed."
  exit 1
fi

echo "Primary nav lock OK: 3 header links on every page, Privacy footer-only."
