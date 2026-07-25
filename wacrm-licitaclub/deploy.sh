#!/bin/bash
# Deploy manual para crm.licitaclub.cl
# Uso: ./deploy.sh

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

DIR="/root/wacrm-licitaclub"

echo -e "${YELLOW}==> Pulling latest code from licitaclub/wacrm...${NC}"
cd "$DIR"
git pull origin main

echo -e "${YELLOW}==> Building Docker image...${NC}"
docker compose build --no-cache

echo -e "${YELLOW}==> Restarting container...${NC}"
docker compose up -d

echo -e "${GREEN}==> Deploy completo. crm.licitaclub.cl actualizado.${NC}"
docker compose ps
