'use strict';

angular.module('pham6App')
.controller('PortfolioCtrl', function PortfolioCtrl ($scope, GalleryService) {
	var gallery = GalleryService.getAllItems().then(function(result){
		$scope.gallary = result;
		console.log($scope)
	});		
});		