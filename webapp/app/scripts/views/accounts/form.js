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
            if (options && options.id) {
                this.listenTo(this.collection, 'sync', _.partial(this.loadModel,options));
                this.collection.fetch();
            }
        },

        loadModel: function(id) {
            this.model = this.collection.get(id);
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
                this.render();
            }
        }
    });

    return FormView;
});
