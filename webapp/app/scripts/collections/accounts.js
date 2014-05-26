/*global define*/

define([
    'underscore',
    'backbone',
    'models/accounts'
], function (_, Backbone, AccountsModel) {
    'use strict';

    var AccountsCollection = Backbone.Collection.extend({
        model: AccountsModel,
        url: 'scripts/data/accounts.json'
    });

    return AccountsCollection;
});
