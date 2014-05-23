var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodebooks-api'
    },
    port: 3000,
    db: 'mongodb://localhost/nodebooks-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodebooks-api'
    },
    port: 3000,
    db: 'mongodb://localhost/nodebooks-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodebooks-api'
    },
    port: 80,
    db: 'mongodb://localhost/nodebooks'
  }
};

module.exports = config[env];
