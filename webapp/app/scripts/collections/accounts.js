/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var AccountsCollection = Backbone.Collection.extend({
        url: 'scripts/data/accounts.json'
    });

    return AccountsCollection;
});
