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

      $routeProvider
      .when('/', {
        templateUrl: publishToGH ? appPath + '/views/main.html' : '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/work/:id', {
        templateUrl: publishToGH ? appPath + '/views/experience-detail.html' : '/views/experience-detail.html',
        controller: 'ExpDetailCtrl',
        controllerAs: 'expWorkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);

  });
