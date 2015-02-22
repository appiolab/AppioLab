/**
 * Created by ariful on 2/22/15.
 */
'use strict';

var apl = angular.module('apl', ['ui.router']);

    apl.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: "app/partials/index.html"
            })
            .state('about-us', {
                url: "/about-us",
                templateUrl: "app/partials/about.html"
            })
            .state('hire-us', {
                url: "/hire-us",
                templateUrl: "app/partials/hire.html"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "app/partials/contact.html"
            });



    }]);