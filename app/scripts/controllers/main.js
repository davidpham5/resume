'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('MainCtrl', function ($scope, ExpService) {
    $scope.exp = ExpService;
});
