'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('MainCtrl', function ($scope, ExpService, partialsService) {
	var partials = partialsService.getPartials();
	$scope.exp = ExpService; 
	$scope.avatarPath = partials.avatarPath;
   	$scope.heroPartial = partials.heroPartial;
   	$scope.experiencesPartial = partials.experiencesPartial;
   	$scope.visCommPartial = partials.visCommPartial;
  });
