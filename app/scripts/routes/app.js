/*global define*/

define([
    'jquery',
    'backbone',
    'views/dashboard',
    'views/login'
], function ($, Backbone, DashboardView, LoginView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showDashboard',
            'dashboard': 'showDashboard',
            'signout': 'signout'
        },

        initialize: function(options) {
            this.app = options.app;
            this.dashBoardView = new DashboardView();
        },

        showDashboard: function() {
            this.app.showView(this.dashBoardView).loadData();
        },

        signout: function() {
            this.app.signOut();
        }

    });

    return AppRouter;
});
