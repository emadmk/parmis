// PM2 process configuration for the Parmis website.
//
//   pm2 start ecosystem.config.cjs
//
// The app listens only on 127.0.0.1 (localhost); nginx/ArvanCloud sit in
// front of it. Change the port below if 3000 is already in use on your server.
module.exports = {
  apps: [
    {
      name: "teparmis",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
