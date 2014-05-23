/*global define*/

define([
    'jquery',
    'backbone',
    'views/dashboard',
    'views/blank',
    'views/login'
], function ($, Backbone, DashboardView, BlankView, LoginView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showDashboard',
            'dashboard': 'showDashboard',
            'blank': 'showBlank',
            'signout': 'signout'
        },

        initialize: function(options) {
            this.app = options.app;
        },

        showDashboard: function() {
            this.app.showView(new DashboardView()).loadData();
        },

        showBlank: function() {
            this.app.showView(new BlankView());
        },

        signout: function() {
            this.app.signOut();
        }

    });

    return AppRouter;
});
