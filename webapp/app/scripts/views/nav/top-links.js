/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavTopLinksView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav/top-links.ejs'],

        tagName: 'ul',

        className: 'nav navbar-top-links navbar-right',
    });

    return NavTopLinksView;
});
