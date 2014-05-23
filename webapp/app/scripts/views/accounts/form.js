/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var FormView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts/form.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        initialize: function (options) {
            // this.listenTo(this.model, 'reset', this.render);
        },
    });

    return FormView;
});
