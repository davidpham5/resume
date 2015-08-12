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
<<<<<<< HEAD
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
=======
    'ngTouch'
  ])
  .config(function ($locationProvider, $routeProvider) {
	
    $routeProvider
      .when('/', {
//	  	templateUrl: 'views/main.html',
  	    templateUrl: 'app/views/main.html',
>>>>>>> 2dbc764719764edcddd310b844e38c9ec654d6d3
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
<<<<<<< HEAD
        templateUrl: 'views/about.html',
=======
// 	    templateUrl: 'views/about.html',
        templateUrl: 'app/views/about.html',
>>>>>>> 2dbc764719764edcddd310b844e38c9ec654d6d3
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
