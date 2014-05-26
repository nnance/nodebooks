/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/accounts/list-row'
], function ($, _, Backbone, JST, ListRowView) {
    'use strict';

    var ListView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts/list.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        initialize: function (options) {
            this.listenTo(this.collection, 'sync', this.updateTable);
            this.collection.fetch();
        },

        updateTable: function() {
            this.removeSubViews();
            this.collection.forEach(function(account){
                this.addSubView({
                    view: new ListRowView({model: account}),
                    selector: 'tbody'
                });
            }, this);
        }
    });

    return ListView;
});
