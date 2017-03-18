'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:LabCtrl
 * @description
 * # LabCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('LabCtrl', function ($scope, partialsService) {
    var partials = partialsService.getPartials();

    $scope.heroPartial = partials.heroPartial;
    $scope.avatarPath = partials.avatarPath;
  });
