/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/accounts',
    'views/accounts/list',
    'views/accounts/form'
], function ($, _, Backbone, JST, Accounts, ListView, FormView) {
    'use strict';

    var AccountsView = Backbone.View.extend({
      template: JST['app/scripts/templates/accounts.ejs'],

      initialize: function () {
        this.accounts = new Accounts();
      },

      loadView: function(view) {
        $.when(
          this.accounts.fetch()
        ).done(function(){
          this.removeSubViews();
          this.addSubView({
            view: view,
            selector: '#col-left'
          });
        }.bind(this));
      },

      showList: function () {
        this.loadView(new ListView({collection: this.accounts}));
      },

      showForm: function(id) {
        this.loadView(new FormView({collection: this.accounts, id: id}));
      }
    });

    return AccountsView;
});
