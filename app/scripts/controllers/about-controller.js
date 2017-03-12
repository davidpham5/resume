'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('AboutCtrl', function ($scope, partialsService) {
    var partials = partialsService.getPartials();

    $scope.heroPartial = partials.heroPartial;
    $scope.avatarPath = partials.avatarPath;
  });
