/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],

        events: {
            'click button': 'signIn'
        },

        initialize: function(options) {
            this.app = options.app;
        },

        signIn: function(event) {
            event.preventDefault();
            this.model.set(this.serializeForm('form'));
            if (this.model.get('remember'))
                this.model.save();
            this.app.signIn();
        }
    });

    return LoginView;
});
