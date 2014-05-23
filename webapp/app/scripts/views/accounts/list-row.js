/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ListRowView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts/list-row.ejs'],

        tagName: 'tr',

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        }

    });

    return ListRowView;
});
