/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AlertsView = Backbone.View.extend({
        template: JST['app/scripts/templates/alerts.ejs'],

        tagName: 'div',

        className: '',

        events: {},

        initialize: function (options) {
            this.collection = new Backbone.Collection();
            this.listenTo(this.collection, 'reset', this.render);

            if (options && options.model) {
              this.setModel(options.model);
            }
        },

        render: function() {
            if (this.collection && (this.collection.length > 0)) {
                this.$el.html(this.template(this));
            }
        },

        setModel: function(model) {
            this.listenTo(model,'invalid',this.handleErrors.bind(this));
        },

        setErrors: function(errors) {
            this.collection.reset(errors.models);
        },

        handleErrors: function(model,errors) {
            this.collection.reset(errors.models);
        }
    });

    return AlertsView;
});
