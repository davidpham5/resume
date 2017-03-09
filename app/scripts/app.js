'use strict';

/**
 * @ngdoc overview
 * @name pham6App
 * @description
 * # pham6App
 *
 * Main module of the application.
 */
angular.module('pham6App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
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
      .when('/portfolio', {
	      templateUrl: 'views/portfolio.html',
	      controller: 'PortfolioCtrl',
	      controllerAs: 'portfolio'
      })
      .when('/symplicty', {
        templateUrl: 'views/symplicity-detail.html',
        controller: 'SymplicityCtrl',
        controllerAs: 'symp'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('pham6App')
	.controller('AppCtrl', function($scope) {
		$scope.theme = function() {
			$scope.light = !$scope.light;
		};
			
	});