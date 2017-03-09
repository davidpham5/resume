'use strict';

angular.module('pham6App')
.controller('SymplicityCtrl', function SymplicityCtrl ($scope, ExpService) {
	var experiences = ExpService.experiences;
	var skills;
	var i;
	for (i = 0; i < experiences.length; i++) {
		var exp = experiences[i];
		if (exp.skills) {
			skills = exp.skills;
		}
		
	};
	$scope.skills = skills;
});		