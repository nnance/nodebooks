/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TransactionsCollection = Backbone.Collection.extend({
        url: 'scripts/data/transactions.json'
    });

    return TransactionsCollection;
});
