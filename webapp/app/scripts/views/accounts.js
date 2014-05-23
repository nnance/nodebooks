/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/accounts',
    'views/accounts/list',
    'views/accounts/form'
], function ($, _, Backbone, JST, Accounts, ListView, FormView) {
    'use strict';

    var AccountsView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts.ejs'],

        initialize: function () {
            this.accounts = new Accounts();
        },

        showList: function () {
            this.removeSubViews();
            this.addSubView({
                view: new ListView({collection: this.accounts}),
                selector: '#col-left'
            });
        },

        showAddForm: function() {
            this.removeSubViews();
            this.addSubView({
                view: new FormView(),
                selector: '#col-left'
            });
        },

        loadData: function() {
            this.accounts.fetch({reset: true});
        }
    });

    return AccountsView;
});
