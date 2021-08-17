module.exports = {
  apps: [
    {
      name: 'material-dashboard-react-app',
      script: 'node_modules/serve/bin/serve.js',
      args: "-s build -l 5001",
      exec_mode: "fork_mode"
    },
  ],
};
