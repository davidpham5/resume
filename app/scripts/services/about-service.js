'use strict';

/**
 * @ngdoc service
 * @name pham6App.aboutService
 * @description
 * # aboutService
 * Service in the pham6App.
 */
angular.module('pham6App')
  .service('AboutService', function () {
    var summary = [
	    {
		    text: "I read a lot books, news, articles, and humor on the human experience. It helps me build beautiful and useful things for people. I feel it's important to see this endeavor as a mode of thinking and not a talent."
	    },
	    {
		    text: "Creativity, despite seen as mystical or magical, is nothing more than a skill to nuture and cultivate over time. Through meditation, patience, grit, and resilience in the face of failure, creativity emerges with ever-growing occurrence."
	    },
	    {
		    text: "I aim to be a craftsman in this respect."
	    }
    ];
    var projects = [
	    {
		    title:'Title of project',
		    date: 'jan 2012',
		    bullet: [
			    {
				    point: 'asdf'
			    }
		    ]
	    }
    ];
    return {
	    summary,
	    projects
    };
  });
