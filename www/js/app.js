// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.filters', 'ngAnimate', 'ngCordova'])

.run(function ($ionicPlatform, $cordovaStatusbar) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            //            StatusBar.styleDefault();
            $cordovaStatusbar.style(1);
        }
        //        $cordovaStatusbar.style(1);
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/sidemenus.html',
                controller: 'sideMenuController'
            })
            .state('app.mainScreen', {
                url: '/mainScreen',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mainScreen.html',
                        controller: 'mainScreenController'
                    }
                }
            })

        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/mainScreen');
    })
    .factory("global", function () {
        var globalService = {};
        globalService.tax_percent = 0;
        globalService.total_prices = [];
        globalService.original_prices = [];
        globalService.all_prices = [];
        globalService.myTotal = 0;
        globalService.theme = 'dark';



        globalService.setTax_Percent = function (tax) {
            this.tax_percent = tax;
        };
        globalService.setTotal_Prices = function (total) {
            this.total_prices.push(total);
        };
        globalService.setOriginal_Prices = function (original) {
            this.original_prices.push(original);
        };
        globalService.setAll_Prices = function (all) {
            this.all_prices.push(all);
        };
        globalService.setMyTotal = function (myTotal) {
            this.myTotal = myTotal;
        };
        globalService.setTheme = function (theme) {
            this.theme = theme;
        };



        return globalService;
    });