'use strict';

/**
 * @ngdoc overview
 * @name pham6App
 * @description
 * # pham6App
 *
 * Main module of the application.
 */
var appPath = 'app';
var publishToGH = true;

angular
  .module('pham6App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    if (publishToGH) {
      $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/work/:id', {
        templateUrl: 'app/views/experience-detail.html',
        controller: 'ExpDetailCtrl',
        controllerAs: 'expWorkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    }  else {
       $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/work/:id', {
        templateUrl: 'views/experience-detail.html',
        controller: 'ExpDetailCtrl',
        controllerAs: 'expWorkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    }


      $locationProvider.html5Mode(true);

  });
