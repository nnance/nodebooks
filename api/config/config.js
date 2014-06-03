var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodebooks-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodebooks-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodebooks-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodebooks-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodebooks-api'
    },
    port: process.env.PORT || 80,
    db: 'mongodb://172.31.46.252/nodebooks'
  }
};

module.exports = config[env];
