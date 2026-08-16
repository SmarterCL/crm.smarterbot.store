#!/bin/bash
# =============================================================================
# Secret Scanner — crm.smarterbot.store
# =============================================================================
# Purpose: Scan repo for exposed secrets/keys/tokens
# Usage:   ./scripts/secret-scan.sh [--strict]
#   --strict: exit 1 on any finding (for CI/cron)
# =============================================================================
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STRICT=false
[[ "${1:-}" == "--strict" ]] && STRICT=true

RED='\033[0;31m'; GREEN='\033[0;32m'; NC='\033[0m'

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  Secret Scanner — crm.smarterbot.store                   ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo "  Date: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo ""

# Run grep recursively with all patterns at once
RAW=$(grep -rnE \
  'eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}|SUPABASE_SERVICE_ROLE_KEY[[:space:]]*=[[:space:]]*eyJ|sb_publishable_[A-Za-z0-9_-]{20,}|EAA[A-Za-z0-9]{20,}|ENCRYPTION_KEY[[:space:]]*=[[:space:]]*[a-f0-9]{64}|-----BEGIN.*PRIVATE.*KEY-----|GOCSPX-[A-Za-z0-9_-]{20,}|sk_(live|test)_[A-Za-z0-9]{20,}|xox[baprs]-[A-Za-z0-9-]{10,}' \
  --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
  --include="*.mjs" --include="*.json" --include="*.yml" --include="*.yaml" \
  --include="*.sh" --include="*.py" --include="*.env*" --include="*.toml" \
  --include="*.sql" --include="*.conf" \
  --exclude-dir="node_modules" --exclude-dir=".next" --exclude-dir=".git" \
  --exclude-dir="dist" --exclude-dir="build" --exclude-dir="coverage" \
  --exclude="pnpm-lock.yaml" --exclude="package-lock.json" \
  --exclude="*.min.js" --exclude="*.min.css" \
  "$REPO_ROOT" 2>/dev/null || true)

# Filter out whitelisted files and placeholder values
FINDINGS=$(echo "$RAW" | grep -vE '\.env\.local\.example|\.env\.example|secret-scan\.sh|SECURITY\.md|README\.md|CHANGELOG\.md|CONTRIBUTING\.md' || true)
FINDINGS=$(echo "$FINDINGS" | grep -vE 'your-|placeholder|example|REPLACE|CHANGE_ME|dummy|<.*>|test-key|verify-token-here' || true)
FINDINGS=$(echo "$FINDINGS" | grep -vE '^[^:]*:[0-9]*:[[:space:]]*$' || true)

# Count non-empty lines
COUNT=0
if [[ -n "$FINDINGS" ]]; then
  COUNT=$(echo "$FINDINGS" | grep -c . 2>/dev/null || echo 0)
fi

if [[ "$COUNT" -eq 0 ]]; then
  echo -e "${GREEN}✓ No exposed secrets found.${NC}"
  echo "  All clear — repo is safe for push/deploy."
  exit 0
else
  echo -e "${RED}✗ ${COUNT} potential exposed secret(s) found!${NC}"
  echo ""
  echo "$FINDINGS" | while IFS= read -r line; do
    file=$(echo "$line" | cut -d: -f1)
    linenum=$(echo "$line" | cut -d: -f2)
    content=$(echo "$line" | cut -d: -f3-)
    rel="${file#$REPO_ROOT/}"
    echo -e "  ${RED}⚠${NC} $rel:$linenum"
    echo "    $(echo "$content" | head -c 120)"
    echo ""
  done
  echo "  Move secrets to: .env.local / Supabase Vault / VPS /root/vault-secrets/"
  if $STRICT; then
    exit 1
  fi
fi
