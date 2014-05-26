/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'modelBinder'
], function ($, _, Backbone, JST, ModelBinder) {
    'use strict';

    var FormView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts/form.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        initialize: function (options) {
            this.modelBinder = new Backbone.ModelBinder();
            if (options && options.id) {
                this.collection.fetch({success: function() {
                    this.model = this.collection.get(options.id);
                    this.bindModel();
                }.bind(this)});
            } else {
                this.model = new this.collection.model();
            }
        },

        onRender: function() {
            if (this.model) this.bindModel(this.model);
        },

        bindModel: function() {
            this.modelBinder.bind(this.model, this.el);
        },

        onClose: function() {
            this.modelBinder.unbind();
        }
    });

    return FormView;
});
