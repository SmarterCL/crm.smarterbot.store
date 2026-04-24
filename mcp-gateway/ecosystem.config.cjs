module.exports = {
  apps: [
    {
      name: "mcp-gateway",
      script: "index.mjs",
      instances: "max",
      exec_mode: "cluster",
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 8090
      }
    }
  ]
};
