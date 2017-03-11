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

        if (publishToGH) {
            avatarPath = appPath + 'images/david1.png';
        } else {
            avatarPath = 'images/david1.png';
        }

        $scope.avatarPath = avatarPath;
    }
    getAvatarPath();
});