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

    function getPartials() {
    	var avatarPath = '';
    	var heroPartial = '';
    	var experiencesPartial = '';
    	var visCommPartial = '';
 		
 		if (publishToGH) { // publishToGH is defined in app.js
    		$scope.publishToGH = true;
    		avatarPath = appPath + '/images/david1.png';
    		heroPartial = appPath + '/views/hero-partial.html';
    		experiencesPartial = appPath + 'app/views/experiences.html';
    		visCommPartial = appPath + 'app/views/vis-comm.html';
	    } else {
	    	avatarPath = 'images/david1.png';
	    	heroPartial = 'views/hero-partial.html';
	    	experiencesPartial = 'views/experiences.html';
	    	visCommPartial = 'views/vis-comm.html';
	    }
	    $scope.avatarPath = avatarPath;
    	$scope.heroPartial = heroPartial;
    	$scope.experiencesPartial = experiencesPartial;
    	$scope.visCommPartial = visCommPartial;
	    
    };
   
    getPartials();
    
  });
