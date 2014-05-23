/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/mobile-sales',
    'collections/funding',
    'collections/transactions',
    'views/dashboard/area-chart',
    'views/dashboard/bar-chart',
], function ($, _, Backbone, JST, MobileSales, Funding, Transactions, AreaChartView, BarChartView) {
    'use strict';

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard.ejs'],

        initialize: function () {
            this.mobileSales = new MobileSales();
            this.funding = new Funding();
            this.transactions = new Transactions();
        },

        onRender: function () {
            this.addSubView({
                view: new AreaChartView({collection: this.mobileSales}),
                selector: '#col-left'
            });
            this.addSubView({
                view: new BarChartView({
                    collection: this.funding,
                    transactions: this.transactions
                }),
                selector: '#col-left'
            });
        },

        loadData: function() {
            this.mobileSales.fetch({reset: true});
            this.funding.fetch({reset: true});
            this.transactions.fetch({reset: true});
        }
    });

    return DashboardView;
});
