'use strict';

/**
 * @ngdoc service
 * @name pham6App.partialsService
 * @description
 * # partialsService
 * Service in the pham6App.
 */
angular.module('pham6App')
  .service('partialsService', function () {
  	var models = {
  		getPartials: function() {
  			var avatarPath = '';
	    	var heroPartial = '';
	    	var experiencesPartial = '';
	    	var visCommPartial = '';
	 		
	 		if (publishToGH) { // publishToGH is defined in app.js
	    		avatarPath = appPath + '/images/david1.png';
	    		heroPartial = appPath + '/views/hero-partial.html';
	    		experiencesPartial = appPath + '/views/experiences.html';
	    		visCommPartial = appPath + '/views/vis-comm.html';
		    } else {
		    	avatarPath = 'images/david1.png';
		    	heroPartial = 'views/hero-partial.html';
		    	experiencesPartial = 'views/experiences.html';
		    	visCommPartial = 'views/vis-comm.html';
		    }
		    return {
		    	avatarPath: avatarPath,
		    	heroPartial: heroPartial,
		    	experiencesPartial: experiencesPartial,
		    	visCommPartial: visCommPartial
		    }
  		}
  	};
    
    return models;
  });
