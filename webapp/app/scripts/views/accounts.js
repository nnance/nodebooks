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

      loadData: function(view) {
        return $.when(
          this.accounts.fetch()
        );
      },

      showView: function(view) {
        this.removeSubViews();
        this.addSubView({
          view: view,
          selector: '#col-left'
        });
      },

      showList: function () {
        this.loadData().done(function(){
          this.showView(new ListView({collection: this.accounts}));
        }.bind(this));
      },

      showForm: function(id) {
        this.loadData().done(function(){
          this.showView(new FormView({collection: this.accounts, id: id}));
        }.bind(this));
      }
    });

    return AccountsView;
});
