'use strict';

/**
 * @ngdoc service
 * @name pham6App.partialsService
 * @description
 * # partialsService
 * Service in the pham6App.
 */
angular.module('pham6App')
  .service('partialsService', function ($q) {

  	var models = {
  		getConfig: function() {
  			var config = {
  				publishToGH: publishToGH,
  				appPath: appPath
  			};
  			return config;
  		},
  		getPartials: function() {
  			var self = this;
  			var publishToGH = self.getConfig.publishToGH;
  			var appPath = self.getConfig.appPath;
  			var avatarPath = '';
	    	var heroPartial = '';
	    	var experiencesPartial = '';
	    	var visCommPartial = '';
	 		var expDetail = '';

	 		if (publishToGH) { // publishToGH is defined in app.js
	    		avatarPath = appPath + '/images/david1.png';
	    		heroPartial = appPath + '/views/hero-partial.html';
	    		experiencesPartial = appPath + '/views/experiences.html';
	    		visCommPartial = appPath + '/views/vis-comm.html';
	    		expDetail = '/resume/work/';
		    } else {
		    	avatarPath = 'images/david1.png';
		    	heroPartial = 'views/hero-partial.html';
		    	experiencesPartial = 'views/experiences.html';
		    	visCommPartial = 'views/vis-comm.html';
		    	expDetail = '/work/';
		    }
		    return {
		    	avatarPath: avatarPath,
		    	heroPartial: heroPartial,
		    	experiencesPartial: experiencesPartial,
		    	visCommPartial: visCommPartial,
		    	expDetail: expDetail
		    };
  		}
  	};
    
    return models;
  });
