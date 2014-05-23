/*global define*/

define([
    'jquery',
    'backbone',
    'views/dashboard',
    'views/accounts',
    'views/login'
], function ($, Backbone, DashboardView, AccountsView, LoginView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showDashboard',
            'dashboard': 'showDashboard',
            'accounts': 'showAccounts',
            'signout': 'signout'
        },

        initialize: function(options) {
            this.app = options.app;
        },

        showDashboard: function() {
            this.app.showView(new DashboardView()).loadData();
        },

        showAccounts: function() {
            this.app.showView(new AccountsView()).loadData();
        },

        signout: function() {
            this.app.signOut();
        }

    });

    return AppRouter;
});
