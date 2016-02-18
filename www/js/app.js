// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','ngResource', 'starter.controllers', 'starter.Facebook', 'starter.CineChileAPI', 'starter.services', 'ngOpenFB', 'ionic.utils'])

.run(function($ionicPlatform, ngFB, DatabaseService, FacebookService) {
    ngFB.init({
        appId: '1020805421317006'
    });
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            controller: 'DashCtrl',
            templateUrl: 'templates/tabs.html'
        })
        .state('film', {
            url: '/film',
            controller: 'FilmsCtrl',
            params:{'userProfile':null},
            templateUrl: 'templates/tab-film.html'
        })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab');
});