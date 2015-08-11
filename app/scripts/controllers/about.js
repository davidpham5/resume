'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('AboutCtrl', function ($scope, AboutService) {
    $scope.summaries = AboutService.summary; 
    $scope.projects = AboutService.project; 
  });
