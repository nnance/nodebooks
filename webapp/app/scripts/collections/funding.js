/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var FundingCollection = Backbone.Collection.extend({
        url: 'scripts/data/funding.json'
    });

    return FundingCollection;
});
