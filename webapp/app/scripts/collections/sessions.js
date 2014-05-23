/*global define*/

define([
    'underscore',
    'backbone',
    'localStorage',
    'models/sessions'
], function (_, Backbone, BBLocalStorage, SessionsModel) {
    'use strict';

    var SessionsCollection = Backbone.Collection.extend({
        model: SessionsModel,
        localStorage: new BBLocalStorage('admin')
    });

    return SessionsCollection;
});
