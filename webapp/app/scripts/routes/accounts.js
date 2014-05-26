/*global define*/

define([
    'jquery',
    'backbone',
    'views/accounts'
], function ($, Backbone, AccountsView) {
    'use strict';

    var AccountsRouter = Backbone.Router.extend({
        routes: {
            'accounts': 'showAccounts',
            'accounts/add': 'showAccountAdd',
            'accounts/:id': 'showAccount'
        },

        initialize: function(options) {
            this.app = options.app;
            this.accountsView = new AccountsView();
        },

        showAccounts: function() {
            this.app.showView(this.accountsView);
            this.accountsView.showList();
        },

        showAccountAdd: function() {
            this.app.showView(this.accountsView);
            this.accountsView.showForm();
        },

        showAccount: function(id) {
            this.app.showView(this.accountsView);
            this.accountsView.showForm(id);
        }
    });

    return AccountsRouter;
});
