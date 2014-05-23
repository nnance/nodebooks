/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'morris',
    'views/accounts/list-row'
], function ($, _, Backbone, JST, morris, ListRowView) {
    'use strict';

    var PanelView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts/panel.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        initialize: function (options) {
            this.listenTo(this.collection, 'reset', this.updateTable);
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

    return PanelView;
});
