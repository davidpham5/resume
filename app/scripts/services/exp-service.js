'use strict';

/**
 * @ngdoc service
 * @name pham6App.workExp
 * @description
 * # workExp
 * Service in the pham6App.
 * gh-pages
 */
angular.module('pham6App')
  .service('ExpService', function () {
    return {
	    header: 'Work Experiences',
	    experiences: [
		    {
			    company: 'Symplicity',
			    link: '/symplicity',
			    start: 'November 2012',
			    end: 'Present',
			    title: 'Front-End Developer',
			    location: {
				    city: 'Washington DC',
				    state: 'DC'
			    },
			    skills: [
			    	'Develop web apps from the ground-up using AngularJS (and AngularJS 2)',
					'Expert-level proficiency coding HTML, and CSS, including ARIA support',
					'Intimate knowledge of cross-browser challenges, e.g. Internet Explorer 11, Firefox, Chrome, Mobile Safari, and Safari',
					'Extensive coding in standards-compliant markup and CSS-driven layouts that separate content from presentation',
					'Code beautiful, readable, efficient, event-driven JavaScript, in AngularJS, vanilla JS, or jQuery',
					'Partner program with back-end developer to integrate server-side code into front-end interfaces',
					'Champion user-centered design, web standards, usability, and accessibility in SCRUM meetings and strategic level meetings',
					'Develop in AngularJS, Bootstrap 3, Git, NPM, Bower, Grunt, LESS/ SCSS stack daily'
			    ]
			},
			{
			    company: 'Congressional Research Service',
			    department: 'Social Domestic Policy',
			    start: 'October 2007',
			    end: 'November 2012',
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
		    'Yeoman',
		    'Github'		    
	    ]
    };
  });
