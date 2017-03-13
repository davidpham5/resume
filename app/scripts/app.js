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
      function isPublish() {
        var models = {
          publishToGH: true,
          appPath: 'app'
        };
        return models;
      }
      var publishToGH = isPublish().publishToGH;
      var appPath = isPublish().appPath;

      $routeProvider
      .when('/', {
        templateUrl: publishToGH ? appPath + '/views/main.html' : '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          partials: function(partialsService) {
              // push up to parital service some parameters to define appPath and publishToGH
              // toggle publishToGH above in config's isPublish();
              partialsService.getConfig(appPath, publishToGH);
          }
        }
      })
      .when('/work/:id', {
        templateUrl: publishToGH ? appPath + '/views/experience-detail.html' : '/views/experience-detail.html',
        controller: 'ExpDetailCtrl',
        controllerAs: 'expWorkCtrl'
      })
      .when('/about', {
        templateUrl: publishToGH ? appPath + '/views/about.html' : '/views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);

  });

angular.module('pham6App')
	.controller('AppCtrl', function($scope) {

	});