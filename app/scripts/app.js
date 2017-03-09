'use strict';

/**
 * @ngdoc overview
 * @name pham6App
 * @description
 * # pham6App
 *
 * Main module of the application.
 */
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
	  	  templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
 	      templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/symplicity', {
        templateUrl: 'views/symplicity-detail.html',
        controller: 'SymplicityCtrl',
        controllerAs: 'symp'
      })
      .otherwise({
        redirectTo: '/'
      });
  
      $locationProvider.html5Mode(true);
  });
