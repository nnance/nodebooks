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

        showView: function(view) {
            this.removeSubViews();
            this.addSubView(view);
        },

        showList: function () {
            this.showView({
                view: new ListView({collection: this.accounts}),
                selector: '#col-left'
            });
        },

        showForm: function(id) {
            this.showView({
                view: new FormView({collection: this.accounts, id: id}),
                selector: '#col-left'
            });
        }
    });

    return AccountsView;
});
