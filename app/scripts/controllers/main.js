'use strict';

/**
 * @ngdoc function
 * @name pham6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pham6App
 */
angular.module('pham6App')
  .controller('MainCtrl', function ($scope, ExpService, $http) {
    $scope.exp = ExpService;
   	
    $scope.profile = function() {
	    $http({
		    method: 'GET',
		    url: 'http://platform.linkedin.com/in.js/',
		    params: {
			    api_key: '770m1wc92n1b0b',
			    credentialsCookie: true,
			    dataType: 'json'
		    }
	    }).success(function(data){
		    console.log(data);
	    }).error(function(error){
		    return 'error big time';
	    })
    }();
	});
