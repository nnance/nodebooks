/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BlankView = Backbone.View.extend({
        template: JST['app/scripts/templates/blank.ejs'],
    });

    return BlankView;
});
