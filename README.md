# SmarterBOT CRM — CRM para WhatsApp

> CRM self-hosted para WhatsApp Business API — bandeja de entrada compartida,
> contactos, embudos de ventas, difusiones y automatizaciones sin código.
> Fork de [wacrm](https://github.com/ArnasDon/wacrm), adaptado para SmarterBOT.

[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](./LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres%20%2B%20Auth-3ecf8e?logo=supabase)](https://supabase.com)

**Producción:** [crm.smarterbot.store](https://crm.smarterbot.store)
**Email:** hola@smarterbot.store (configurado en mail.smarterbot.store con BillionMail)
**Moneda:** CLP (Peso Chileno) · **Idioma:** Español

---

## Qué incluye

- **Bandeja de entrada compartida** en WhatsApp Business API — múltiples
  agentes trabajando un mismo número, asignación por conversación, estado y notas.
- **Contactos + etiquetas + campos personalizados**, importación CSV, deduplicación.
- **Embudos de ventas** (Kanban) con ofertas vinculadas a conversaciones.
- **Difusiones** con plantillas aprobadas por Meta, seguimiento de entrega + lectura,
  sustitución de variables por destinatario.
- **Automatizaciones sin código** — disparadores por mensajes entrantes, nuevos
  contactos, palabras clave o programación; ramas condicionales, esperas,
  etiquetas, webhooks. Constructor visual.
- **Asistente de IA** — responde con tu propia key de OpenAI o Anthropic
  (almacenada cifrada; sin costo por agente, tus datos quedan tuyos).
  Borradores de IA en un clic en la bandeja, bot de auto-respuesta opcional.
  **Base de conocimiento** (FAQs, políticas, docs de producto) con búsqueda híbrida.
- **Dashboard en tiempo real** — tiempos de respuesta, volumen diario, valor
  del embudo, feed de actividad.
- **Cuentas de equipo** — invita compañeros por enlace, acceso por roles
  (propietario / admin / agente / espectador).
- **API REST pública** (`/api/v1`) con keys revocables — construye tus propias
  automatizaciones sobre el CRM. Ver [docs/public-api.md](./docs/public-api.md).
- **Servidor MCP** — controla el CRM desde Claude, Cursor y otros asistentes IA
  via Model Context Protocol. Ver [docs/mcp.md](./docs/mcp.md).

---

## Por qué usar este fork

- **Propiedad total** — tu código, tu proyecto Supabase, tu dominio,
  tus datos. Sin lock-in SaaS, sin pricing por asiento.
- **Personalización completa** — agrega los campos que tu equipo necesita,
  remueve los módulos que no uses, rediseña lo que quieras.
- **Seguridad real** — cifrado de tokens (AES-256-GCM), RLS en cada tabla,
  webhooks verificados con HMAC, CSP, rate limiting.
- **En español, moneda CLP** — localizado para el mercado chileno.

---

## Requisitos

- Node.js 18+ (recomendado 20+)
- pnpm (gestor de paquetes)
- Una cuenta de Supabase (Postgres + Auth)
- Una app de Meta WhatsApp Business API

---

## Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/SmarterCL/crm.smarterbot.store.git
cd crm.smarterbot.store
pnpm install
```

### 2. Variables de entorno

Copia `.env.local.example` a `.env.local` y completa:

```bash
# ── REQUERIDO ──────────────────────────────────────────────

# Supabase (Project Settings → API)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key

# Cifrado de tokens WhatsApp (64 hex chars = 32 bytes, AES-256-GCM)
# Generar con: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
ENCRYPTION_KEY=tu-key-de-64-chars-hex

# Meta App Secret (Meta for Developers → App Settings → Basic)
META_APP_SECRET=tu-meta-app-secret

# ── RECOMENDADO ────────────────────────────────────────────

# URL pública del deployment
NEXT_PUBLIC_SITE_URL=https://crm.smarterbot.store

# Idioma (es = español)
NEXT_PUBLIC_APP_LOCALE=es

# Meta App ID (necesario para plantillas con imagen)
META_APP_ID=tu-meta-app-id

# ── OPCIONAL ───────────────────────────────────────────────

# Secreto para cron de automatizaciones
# AUTOMATION_CRON_SECRET=genera-un-string-aleatorio-largo
```

### 3. Base de datos

Ejecuta las migraciones de Supabase en orden. Están en `supabase/migrations/`.

```bash
# Usando Supabase CLI
supabase db push
```

### 4. Configurar WhatsApp Business API

1. Ve a [Meta for Developers](https://developers.facebook.com/)
2. Crea una app de WhatsApp Business
3. Obtén el **Phone Number ID** y el **Access Token**
4. Configura el webhook: `https://crm.smarterbot.store/api/v1/webhooks/whatsapp`
5. En el CRM, ve a **Configuración → WhatsApp** y ingresa el número y token

**Número autorizado:** +56 9 7954 0471 (Smarter Bot)

### 5. Ejecutar

```bash
# Desarrollo
pnpm dev

# Producción
pnpm build
pnpm start
```

---

## Deploy con Docker

```bash
# Construir
docker build -t smarterbot-crm .

# Ejecutar
docker run -d \
  --name crm-smarterbot \
  -p 4000:3000 \
  --env-file .env.local \
  smarterbot-crm
```

El VPS usa Caddy como reverse proxy: `crm.smarterbot.store → localhost:4000`.

---

## Configuración de Email

El email `hola@smarterbot.store` está configurado en **mail.smarterbot.store**
con BillionMail. Para usarlo en el CRM:

```env
SMTP_HOST=mail.smarterbot.store
SMTP_PORT=587
SMTP_USER=hola@smarterbot.store
SMTP_PASS=tu-password
SMTP_FROM=hola@smarterbot.store
SMTP_FROM_NAME=SmarterBOT CRM
```

---

## Escaneo de Secrets

El repositorio incluye un scanner de secrets expuestos:

```bash
bash scripts/secret-scan.sh          # modo reporte
bash scripts/secret-scan.sh --strict # modo estricto (exit 1 en findings)
```

Se ejecuta automáticamente cada lunes a las 9am vía cron.

---

## Estructura del Proyecto

```
├── src/
│   ├── app/              # Rutas Next.js (App Router)
│   ├── components/       # Componentes React
│   ├── hooks/            # Hooks personalizados
│   ├── lib/              # Lógica de negocio
│   └── i18n/             # Configuración next-intl
├── messages/             # Traducciones (es.json, en.json, pt.json, ko.json)
├── supabase/
│   └── migrations/       # Migraciones SQL
├── mcp-server/           # Servidor MCP
├── docs/                 # Documentación
└── scripts/              # Scripts (secret-scan.sh)
```

---

## Soporte

- **Email:** hola@smarterbot.store
- **Repositorio:** [SmarterCL/crm.smarterbot.store](https://github.com/SmarterCL/crm.smarterbot.store)
- **Producción:** [crm.smarterbot.store](https://crm.smarterbot.store)

---

## Licencia

MIT — ver [LICENSE](./LICENSE).

---

## Créditos

Basado en [wacrm](https://github.com/ArnasDon/wacrm) por ArnasDon.
Adaptado para SmarterBOT con localización en español y moneda CLP.
