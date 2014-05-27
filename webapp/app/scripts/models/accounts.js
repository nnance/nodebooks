/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var AccountsModel = Backbone.Model.extend({
        url: 'scripts/data/accounts.json',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
            var errors = new Backbone.Collection();
            if (!attrs.name || (attrs.name.length === 0)) {
                errors.add({attr: 'name', message: 'Name is required!'});
            }
            if (!attrs.description || (attrs.description.length === 0)) {
                errors.add({attr: 'description', message: 'Description is required!'});
            }

            if (errors.length > 0) return errors;
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return AccountsModel;
});
