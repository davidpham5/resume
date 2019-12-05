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
  		getConfig: function(publishToGH, appPath) {
            var self = this;
            self.getConfig.publishToGH = publishToGH;
            self.getConfig.appPath = appPath;
            return self;
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
	    		avatarPath = appPath + '/images/david2.JPG';
	    		heroPartial = appPath + '/views/hero-partial.html';
	    		experiencesPartial = appPath + '/views/experiences.html';
	    		visCommPartial = appPath + '/views/vis-comm.html';
	    		expDetail = '/resume/work/';
		    } else {
		    	avatarPath = 'images/david2.JPG';
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
