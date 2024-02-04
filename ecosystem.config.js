module.exports = {
  apps: [
    {
      name: 'simple-express-server',
      script: 'build/bin/server.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        LANG: 'js'
      },
    },
  ],
};
