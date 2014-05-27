/*global define*/

define([
    'underscore',
    'backbone',
    'models/accounts'
], function (_, Backbone, AccountsModel) {
    'use strict';

    var AccountsCollection = Backbone.Collection.extend({
        model: AccountsModel,
        url: 'http://localhost:3000/api/accounts'
    });

    return AccountsCollection;
});
