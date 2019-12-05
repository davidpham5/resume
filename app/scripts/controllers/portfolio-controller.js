'use strict';

angular.module('pham6App')
.controller('PortfolioCtrl', function PortfolioCtrl ($scope, GalleryService) {
	GalleryService.getAllItems().then(function(result){
		$scope.gallary = result;
	});
});
