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
            'accounts/add': 'showAccountAdd',
            'signout': 'signout'
        },

        initialize: function(options) {
            this.app = options.app;
            this.dashBoardView = new DashboardView();
            this.accountsView = new AccountsView();
        },

        showDashboard: function() {
            this.app.showView(this.dashBoardView).loadData();
        },

        showAccounts: function() {
            this.app.showView(this.accountsView);
            this.accountsView.showList();
            this.accountsView.loadData();
        },

        showAccountAdd: function() {
            this.app.showView(this.accountsView);
            this.accountsView.showAddForm();
        },

        signout: function() {
            this.app.signOut();
        }

    });

    return AppRouter;
});
