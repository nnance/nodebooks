/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'modelBinder',
    'views/alerts'
], function ($, _, Backbone, JST, ModelBinder, AlertsView) {
    'use strict';

    var FormView = Backbone.View.extend({
        template: JST['app/scripts/templates/accounts/form.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        events: {
            'click #btn-cancel': 'leavePage',
            'click #btn-save': 'saveModel'
        },

        initialize: function (options) {
            this.modelBinder = new Backbone.ModelBinder();
            if (options && options.id) {
              this.model = this.collection.get(options.id);
            } else {
              this.model = new this.collection.model();
            }
        },

        onRender: function() {
            this.addSubView({
                view: new AlertsView({model: this.model}),
                selector: '.panel-body',
                location: 'append'
            });
            this.modelBinder.bind(this.model, this.el);
        },

        leavePage: function() {
            Backbone.history.navigate('accounts',true);
        },

        saveModel: function() {
            if (this.model.isNew()) {
                this.model.save({},{
                  success: function(model){
                      this.collection.add(this.model);
                      this.leavePage();
                  }.bind(this)
                });
            } else {
                this.model.save({},{success: this.leavePage});
            }
        },

        onClose: function() {
            this.modelBinder.unbind();
        }
    });

    return FormView;
});
