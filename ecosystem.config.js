module.exports = {
  apps: [
    {
      out_file: '/home/ubuntu/log/pm2/react-server-out.log',
      error_file: '/home/ubuntu/log/pm2/react-server-error.log',
      name: 'lunch_server',
      script: './src/init.js',
      watch: false,
      log_date_format: 'YYYY-MM-DDTHH:mm:ss:SSSZ',
      wait_ready: true,
      listen_timeout: 30000,
      kill_timeout: 5000,
      env: {
        NODE_ENV: 'development',
        TZ: 'Asia/Seoul',
      },
      env_production: {
        NODE_ENV: 'production',
        TZ: 'Asia/Seoul',
      },
      env_stage: {
        NODE_ENV: 'stage',
        TZ: 'Asia/Seoul',
      },
    },
  ],
  deploy: {
    dev: {
      ref: 'origin/master',
      repo: 'http://github.com/alpaca623/lunch-server.git',
      // path: '',
      'post-deploy': 'npm install && npm run compile && pm2 reload ecosystem.config.js',
    },
    production: {
      ref: 'origin/master',
      repo: 'http://github.com/alpaca623/lunch-server.git',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.json --env production',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
