import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Tenant Isolation Middleware
const tenantsPath = path.resolve(process.cwd(), 'tenants.json');
let tenants = {};
try {
  tenants = JSON.parse(fs.readFileSync(tenantsPath, 'utf-8'));
} catch (e) {
  console.error('⚠️ Failed to load tenants.json. Ensure it exists in the gateway root.', e);
}

app.use((req, res, next) => {
  // Allow healthcheck without auth
  if (req.path === '/health') return next();

  const key = req.headers['x-api-key'];
  const tenant = tenants[key];

  if (!tenant) {
    console.warn(`[AUTH FAILED] Invalid or missing API Key: ${key}`);
    return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }

  req.tenant = tenant;
  next();
});

// 2. Metrics & Logging (per tenant)
app.use(morgan((tokens, req, res) => {
  return JSON.stringify({
    tenant: req.tenant || 'system',
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    responseTime: tokens['response-time'](req, res) + ' ms',
    ts: Date.now()
  });
}));

// 3. Provider Configurations (Aislamiento por provider)
// En vez de enviar la misma API key a todos, configuramos cada server
const providers = {
  github: {
    url: 'https://api.githubcopilot.com/mcp',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN || 'missing_token'}`,
      'Content-Type': 'application/json'
    }
  },
  google: {
    url: 'https://generativelanguage.googleapis.com/mcp',
    headers: {
      'X-Goog-Api-Key': process.env.GOOGLE_KEY || 'missing_key',
      'Content-Type': 'application/json'
    }
  },
  n8n: {
    url: 'https://n8n.smarterbot.store/mcp-server/http',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MWU5YzExMi1mZmJhLTRjZDctYmE3OS1hMDdmYzQ3NWUyZjgiLCJpc3MiOiJuOG4iLCJhdWQiOiJtY3Atc2VydmVyLWFwaSIsImp0aSI6IjAwMzk3OTI4LTQ0NDUtNDVlNy05ZThkLWY4OGMwMGRkZmQ0ZiIsImlhdCI6MTc3NjkzMjMwNH0.FDkgDxZQh0RyGvoCCj1stZz-E9iTwN3K7_aVDIcHx4A',
      'Content-Type': 'application/json'
    }
  },
  n8n_api: {
    url: 'https://n8n.smarterbot.store/api/v1',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MWU5YzExMi1mZmJhLTRjZDctYmE3OS1hMDdmYzQ3NWUyZjgiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiNTQ5ZDJiMmEtYTk2NC00YTE4LWI3OTQtOWJkMTEzYTMzNzc4IiwiaWF0IjoxNzc2OTMyNjgwfQ.yRCcV31jowt7zB-x2k6nS9_OpvW0L2iDJADSGhv7gP8',
      'Content-Type': 'application/json'
    }
  }
};

// 4. Smart MCP Proxy Route
// Example: POST /mcp/:provider
app.post('/mcp/:provider', async (req, res) => {
  const providerName = req.params.provider;
  const providerConfig = providers[providerName];

  if (!providerConfig) {
    return res.status(404).json({ error: `Provider '${providerName}' not supported` });
  }

  try {
    const response = await fetch(providerConfig.url, {
      method: 'POST',
      headers: providerConfig.headers,
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    
    // Set headers from provider response where safe
    res.status(response.status).send(data);

  } catch (error) {
    console.error(`[MCP Proxy Error] ${providerName}:`, error.message);
    res.status(500).json({ error: 'Failed to proxy request to MCP provider' });
  }
});

// Endpoint for OAuth Discovery (Simulated fix for handshake)
app.get('/.well-known/oauth-authorization-server', (req, res) => {
  // If the client explicitly requests our discovery endpoint, we can route it
  // Or provide our own aggregated capability list.
  res.json({
    "issuer": `https://${req.headers.host}`,
    "authorization_endpoint": `https://${req.headers.host}/oauth/authorize`,
    "token_endpoint": `https://${req.headers.host}/oauth/token`,
    "response_types_supported": ["code"]
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), ts: Date.now() });
});

// n8n Workflows lookup (Isolated by tenant)
app.get('/workflows', (req, res) => {
  const workflowsPath = path.resolve(process.cwd(), '..', 'tenants', req.tenant, 'workflows');
  if (fs.existsSync(workflowsPath)) {
    const files = fs.readdirSync(workflowsPath);
    res.json({ tenant: req.tenant, workflows: files });
  } else {
    res.json({ tenant: req.tenant, workflows: [] });
  }
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`🚀 MCP Gateway (Multi-tenant) running on port ${PORT}`);
  console.log(`🔒 Loaded ${Object.keys(tenants).length} tenants`);
});
