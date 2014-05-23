/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/nav/side-menu',
    'views/nav/top-links',
], function ($, _, Backbone, SideMenuView, TopLinksView) {
    'use strict';

    var NavView = Backbone.View.extend({
        el: 'nav',

        initialize: function(options) {
            this.app = options.app;
            this.listenTo(this.app, 'login', this.showMenu);
            this.listenTo(this.app, 'logout', this.hideMenu);
        },

        showMenu: function() {
            this.addSubView({view: new TopLinksView()});
            this.addSubView({view: new SideMenuView({app: this.app})});
            return this;
        },

        hideMenu: function() {
            this.removeSubViews();
        }
    });

    return NavView;
});
