/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/sessions',
    'views/login',
    'views/nav'
], function ($, _, Backbone, Sessions, LoginView, NavView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#wrapper',

        initialize: function () {
            this.sessions = new Sessions();
            this.navigation = new NavView({app: this});
            this.container = new Backbone.View({id: 'page-wrapper'});
        },

        start: function() {
            $.when(
              this.sessions.fetch()
            )
            .done(function() {
                if ((this.sessions.length === 0) || (this.sessions.at(0).get('remember') !== 'true'))
                    this.showLogin();
                else
                    this.signIn();
            }.bind(this));
        },

        showView: function(view) {
            return this.container.setView(view);
        },

        showLogin: function() {
            this.navigation.hideMenu();
            if (this.sessions.length === 0)
                this.sessions.create();
            var model = this.sessions.at(0);
            this.setView(new LoginView({model: model, app: this}));
        },

        signIn: function() {
            this.trigger('login');
            this.setView(this.container);
            if (!Backbone.History.started)
                Backbone.history.start();
            else
                Backbone.history.navigate('dashboard', true);
        },

        signOut: function() {
            this.trigger('logout');
            this.sessions.at(0).save('remember','false');
            this.showLogin();
        }
    });

    return AppView;
});
