# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable pnpm

# Build args for environment variables needed at build time
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG SUPABASE_SERVICE_ROLE_KEY
ARG WHATSAPP_API_URL
ARG META_API_VERSION
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_APP_LOCALE
ARG ENCRYPTION_KEY
ARG WHATSAPP_ACCESS_TOKEN
ARG WHATSAPP_PHONE_NUMBER_ID
ARG WHATSAPP_WEBHOOK_VERIFY_TOKEN
ARG META_APP_ID
ARG META_APP_SECRET
ARG META_ACCESS_TOKEN
ARG SMTP_HOST
ARG SMTP_PORT
ARG SMTP_USER
ARG SMTP_PASS
ARG AUTOMATION_CRON_SECRET
ARG WHATSAPP_WABA_ID

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies - use --ignore-scripts to skip build scripts
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy source code
COPY . .

# Create .env.local for build-time env vars (client bundle needs these)
RUN echo "NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL" > .env.local && \
    echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY" >> .env.local && \
    echo "NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL" >> .env.local && \
    echo "NEXT_PUBLIC_APP_LOCALE=$NEXT_PUBLIC_APP_LOCALE" >> .env.local

# Build the application (Next.js standalone output)
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE_ROLE_KEY
ENV WHATSAPP_API_URL=$WHATSAPP_API_URL
ENV META_API_VERSION=$META_API_VERSION
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_APP_LOCALE=$NEXT_PUBLIC_APP_LOCALE
ENV ENCRYPTION_KEY=$ENCRYPTION_KEY
ENV WHATSAPP_ACCESS_TOKEN=$WHATSAPP_ACCESS_TOKEN
ENV WHATSAPP_PHONE_NUMBER_ID=$WHATSAPP_PHONE_NUMBER_ID
ENV WHATSAPP_WEBHOOK_VERIFY_TOKEN=$WHATSAPP_WEBHOOK_VERIFY_TOKEN
ENV META_APP_ID=$META_APP_ID
ENV META_APP_SECRET=$META_APP_SECRET
ENV META_ACCESS_TOKEN=$META_ACCESS_TOKEN
ENV SMTP_HOST=$SMTP_HOST
ENV SMTP_PORT=$SMTP_PORT
ENV SMTP_USER=$SMTP_USER
ENV SMTP_PASS=$SMTP_PASS
ENV AUTOMATION_CRON_SECRET=$AUTOMATION_CRON_SECRET
ENV WHATSAPP_WABA_ID=$WHATSAPP_WABA_ID

# Debug: verify env var is set
RUN echo "NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL"

# Verify NEXT_PUBLIC vars are in env before build
RUN echo "=== NEXT_PUBLIC env vars ===" && env | grep NEXT_PUBLIC

# Run build with explicit env vars for Turbopack client-side inlining
RUN NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL \
    NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY \
    NEXT_PUBLIC_APP_LOCALE=$NEXT_PUBLIC_APP_LOCALE \
    pnpm run build

# Production stage - minimal image with Node.js runtime
FROM node:24-alpine AS runner

WORKDIR /app

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Copy built files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1

# Start Next.js server
CMD ["node", "server.js"]
