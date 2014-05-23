/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MobileSalesCollection = Backbone.Collection.extend({
        url: 'scripts/data/mobile-sales.json'
    });

    return MobileSalesCollection;
});
