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
	    	var workFlowPartial = '';
	 		var expDetail = '';

	 		if (publishToGH) { // publishToGH is defined in app.js
	    		avatarPath = appPath + '/images/david2.JPG';
	    		heroPartial = appPath + '/views/hero-partial.html';
	    		experiencesPartial = appPath + '/views/experiences.html';
	    		workFlowPartial = appPath + '/views/work-flow.html';
	    		expDetail = '/resume/work/';
		    } else {
		    	avatarPath = 'images/david2.JPG';
		    	heroPartial = 'views/hero-partial.html';
		    	experiencesPartial = 'views/experiences.html';
		    	workFlowPartial = 'views/work-flow.html';
		    	expDetail = '/work/';
		    }
		    return {
		    	avatarPath: avatarPath,
		    	heroPartial: heroPartial,
		    	experiencesPartial: experiencesPartial,
		    	workFlow: workFlowPartial,
		    	expDetail: expDetail
		    };
  		}
  	};

    return models;
  });
