#!/usr/bin/env bash
# Fail the build if primary header nav is not the HUMAN four-link lock:
# The method · Why they start · When to stop · Privacy
# Footer Privacy must remain. A later "three-link" rewrite is not the lock.
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

  if ! printf '%s\n' "$nav" | grep -q 'href="/privacy/"'; then
    echo "FAIL: $page primary nav is missing Privacy"
    printf '%s\n' "$nav"
    fail=1
  fi

  if printf '%s\n' "$nav" | grep -q 'exactly three primary links'; then
    echo "FAIL: $page still has the three-link footer-only lock comment"
    fail=1
  fi

  links="$(printf '%s\n' "$nav" | grep -c '<a ' || true)"
  if [[ "$links" -ne 4 ]]; then
    echo "FAIL: $page primary nav has $links links; expected exactly 4"
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

if grep -R --include='*.html' -n 'exactly three primary links' . >/dev/null; then
  echo "FAIL: leftover three-link lock comment"
  grep -R --include='*.html' -n 'exactly three primary links' .
  fail=1
fi

if [[ "$fail" -ne 0 ]]; then
  echo "Primary nav lock failed."
  exit 1
fi

echo "Primary nav lock OK: 4 header links on every page, including Privacy."
