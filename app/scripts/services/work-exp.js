'use strict';

/**
 * @ngdoc service
 * @name pham6App.workExp
 * @description
 * # workExp
 * Service in the pham6App.
 */
angular.module('pham6App')
  .service('workExp', function () {
    return {
	    header: 'Work Experience',
	    experiences: [
		    {
			    company: 'Symplicity',
			    start: 'November 2012',
			    end: 'Present',
			    title: 'Front-End Developer',
			    location: {
				    city: 'Washington DC',
				    state: 'DC'
			    }
			},
			{
			    company: 'Congressional Research Service',
			    department: 'Social Domestic Policy',
			    start: 'October 2007',
			    end: 'Ocotber 2012',
			    title: 'Administrative Assistant',
			    location: {
				    city: 'Washington DC',
				    state: 'DC'
			    }
			},
	    ]
    }
  });
