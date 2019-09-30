module.exports = {
  apps : [{
    name: 'webhook',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};