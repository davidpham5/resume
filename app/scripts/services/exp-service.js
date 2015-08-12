'use strict';

/**
 * @ngdoc service
 * @name pham6App.workExp
 * @description
 * # workExp
 * Service in the pham6App.
 */
angular.module('pham6App')
  .service('ExpService', function () {
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
			{
				title: 'Research Legal Assistant',
				company: 'U.S. Copyright',
				department: 'Office of Policy and International Affairs',
				start: 'September 2009',
				end: 'December 2009',
				 location: {
				    city: 'Washington DC',
				    state: 'DC'
			    }
			},
			{
				title: 'Committee Member',
				department: 'Library of Congress',
				company: 'Strategic Initiatives and Policy Committee',
				start: 'September 2009',
				end: 'December 2009',
				 location: {
				    city: 'Washington DC',
				    state: 'DC'
			    }
			},
			{
				title: 'Office Assistant',
				department: 'Library of Congress',
				company: 'Office of Strategic Initiatives',
				start: 'June 2006',
				end: 'October 2007',
				 location: {
				    city: 'Washington DC',
				    state: 'DC'
			    }
			}
	    ],
	    education: {
		    header: 'Education',
		    college: 'University of Missouri - Columbia',
		    degree: 'BA',
		    major: 'History',
		    gradDate: 'May 2006',
		    funny: 'In all my years schooling, I learned how to learn. I taught myself HTML, CSS, and Javascript. My passion for learning new things is what drives my education.'
	    },
	    org: [
		    'Career Development Program Graduate of the Library of Congress (2008)',
			'Emergency Office Coordinator for Domestic Social Policy (2008 - 2012)',
			'Little Lights Urban Ministries After School Tutoring Program (2007 - 2010)',
			'Membership Outreach Officer Capitol Hill Toastmasters Club #1460  (2008 - 2012)'
	    ],
	    skills: [
		    'AngularJS',
		    'Command Line',
		    'Agile',
		    'Javascript',
		    'HTML',
		    'CSS',
		    'LESS',
		    'SASS',
		    'Bower',
		    'Grunt',
		    'Yoeman',
		    'Github'
		    
	    ]
    };
  });
