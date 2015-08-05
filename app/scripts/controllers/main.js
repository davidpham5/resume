'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('MainCtrl', function ($scope, workExp) {
    $scope.experiences = workExp;
    console.log(workExp);	
  });
