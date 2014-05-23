/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/accounts',
    'views/accounts/panel'
], function ($, _, Backbone, JST, Accounts, PanelView) {
    'use strict';

    var AccountsView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts.ejs'],

        initialize: function () {
            this.accounts = new Accounts();
        },

        onRender: function () {
            this.addSubView({
                view: new PanelView({collection: this.accounts}),
                selector: '#col-left'
            });
        },

        loadData: function() {
            this.accounts.fetch({reset: true});
        }
    });

    return AccountsView;
});
