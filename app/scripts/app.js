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
<<<<<<< HEAD
  .config(function ($routeProvider) {
	
=======
  .config(function ($locationProvider, $routeProvider) {
<<<<<<< HEAD
	$locationProvider.html5Mode(true);
>>>>>>> add html5 locationprovider to app.js and base element in head
=======
	
>>>>>>> experimenting with bower path
    $routeProvider
      .when('/', {
//	  	templateUrl: 'views/main.html',
  	    templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
// 	    templateUrl: 'views/about.html',
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
