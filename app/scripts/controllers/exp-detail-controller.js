'use strict';

angular.module('pham6App')
.controller('ExpDetailCtrl', function ExpDetailCtrl ($scope, $location,  $routeParams, ExpService) {

    var exp = ExpService.experiences;
    var expDetail = exp[$routeParams.id];
    $scope.skills = expDetail.skills;
    $scope.products = expDetail.products;
    $scope.about = expDetail.about;

    function getAvatarPath() {
        var avatarPath = '';
        var heroPartial = '';

        if (publishToGH) {
            avatarPath = appPath + '/images/david1.png';
            heroPartial = appPath + '/views/hero-partial.html';
        } else {
            avatarPath = 'images/david1.png';
            heroPartial = 'views/hero-partial.html';
        }

        $scope.avatarPath = avatarPath;
        $scope.heroPartial = heroPartial;
    }
    getAvatarPath();
});