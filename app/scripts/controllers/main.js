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

   	$http.get('http://platform.linkedin.com/in.js', {
		   	api_key: '770m1wc92n1b0b',
		   	//onLoad: onLinkedinLoad(),
		   	authorize: false,
		   	lang: 'en_US'
		   	
   		})
   		.success(function(data) {
/*
	   	$scope.onLinkedinLoad =  function() {
   				IN.Event.on(IN, "auth", onLinkedInAuth);
   			};
*/

	   			   		//IN.User.logout(callbackFunction, callbackScope);
	   		//console.log(data);
   		})
   		.error(function(data){
	   		console.log('erorr: ', data);
   		});
   	});
