var express = require('express'),
    path = require('path'),
    cors = require('cors');

module.exports = function(app, config) {

  app.configure(function () {
    app.use(express.compress());

    if (app.get('env') === 'development') {
      app.use(require('connect-livereload')({port: 35729}));
      app.use(express.static(path.join(config.root, '.tmp')));
      app.use(express.static(path.join(config.root, 'app')));
    } else {
      app.use(express.static(config.root));
    }

    app.set('port', config.port);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(cors());
    app.use(app.router);
  });
  console.log('express app started.  static: ' + config.root + ' port: ' + config.port);
};
