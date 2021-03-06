/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        metisMenu: {
            deps: ['jquery']
        },
        morris: {
            deps: ['jquery','raphael'],
            exports: 'raphael'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        metisMenu: '../bower_components/metisMenu/jquery.metisMenu',
        raphael: '../bower_components/raphael/raphael',
        morris: '../bower_components/morris/morris',
        viewManager: '../bower_components/backbone-viewmanager/backbone.viewmanager',
        localStorage: '../bower_components/backbone.localstorage/backbone.localstorage',
        modelBinder: '../bower_components/backbone.modelbinder/backbone.modelbinder'
    }
});

require([
    'jquery',
    'bootstrap',
    'backbone',
    'viewManager',
    'views/app',
    'routes/app',
    'routes/accounts'
], function ($, bootstrap, Backbone, ViewManager, AppView, AppRouter, AccountsRouter) {

    var appView = new AppView();
    var appRouter = new AppRouter({app: appView});
    var accountsRouter = new AccountsRouter({app: appView});
    appView.start();
});
