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
  .service('ExpService', function ($http) {
    return {
	    header: 'Work Experiences',
	    experiences: [
		    {
			    company: 'Symplicity',
			    link: '/symplicity',
			    id: 'symplicity',
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
			    ],
			    products: [
			    	'OneStop 1.0 - 2.8',
					'CSM Dashboard Analytics',
					'Accommodate Manager UI 2.0',
					'Entreprise Dashboard'
			    ],
			    about: [
					'Symplicity is a market leader in enterprise technology and information systems management for higher education, government, and businesses. Symplicity is committed to providing its clients with innovative solutions and services that enable them to streamline business processes, improve performance, and cultivate positive relationships with their students, customers, and communities.',
					'Symplicity offers a comprehensive suite of products for admissions, career services, advising, student conduct, campus life, housing & residence life, and alumni engagement offices. Now reaching more than 30 million students worldwide, Symplicity is the leading provider of student affairs solutions in higher education.'
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
			    },
			    skills: [
			    	'Manage 108 employees time and attendance time files through web-based program, Web TA',
					'Organized new staff orientation for all new employees, interns, and volunteers',
					'Direct Congressional staffers to the appropriate specialist for inquiries and analysis',
					'Coordinate emergence preparedness procedures for 6 sections, 108 employees, and 6 Research Managers',
					'Schedule executive senior staff interviews and meetings',
					'Execute over 25 new employee orientations',
					'Author monthly bibliography of all Congressional Research Service confidential memos and reports'
			    ],
			    about: [
			    	'The Domestic Social Policy (DSP) Division\'s work includes analyses of domestic policy and social program issues. These include education, labor and worker safety; health-care insurance and financing; health services and research; aging policy studies; Social Security, pensions and disability insurance; immigration, homeland security, domestic intelligence and criminal justice; and welfare, nutrition and housing programs.'
			    ]
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
			    },
			    skills: [
			    	'Hand picked by the Associate Register to the U.S. Copyright to assist in the Google Book Settlement case',
					'Represented U.S. Copyright in Net Neutrality Conferences',
					'Researched legal analysis on U.S. Copyright and Orphan Works',
					'Reviewed Federal Registry comments on the Google Book Settlement Proposal',
					'Captured 352 media articles related to Google Book Settlement for the Copyright Register\'s Congressional \'Testimony in November 2009',
					'Prepared legal research and presentation on Spanish Piracy Issues for PIA Senior Counsel',
					'Scheduled executive interviews for senior management',
					'Represented the Office of Policy and International Affairs in teleconference meetings.'
			    ],
			    about: [
			    	'The Office of Policy and International Affairs (“PIA”) is headed by the Associate Register of Copyrights and Director of Policy and International Affairs, who is an expert copyright attorney and one of four legal advisors to the Register. This Office assists the Register with critical policy functions of the U.S. Copyright Office, including domestic and international policy analyses, legislative support, and trade negotiations. PIA represents the U.S. Copyright Office at meetings of government officials concerned with the international aspects of intellectual property protection, and provides regular support to Congress and its committees on statutory amendments and construction.'
			    ]
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
			    },
			    skills: [
			    	'Handpicked by the Librarian of Congress, Dr. James Billington to serve as a committee member to his pecial task force',
					'Analyzed internet cultural trends and technological advances in broadband infrastructure, cloucomputing, mobile device operating systems, and intellectual property protections',
					'Communicated Library of Congress digital challenges to Strategic Initiatives and Policy Committee'
			    ]
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
			    },
			    skills: [
			    	'Coordinated employee orientation for the Offices of Strategic Initiatives (OSI)',
					'Scheduled executive senior staff meetings and conferences',
					'Collaborated with Human Capital Management staff in conducting position description title quality control project for two divisions: OSI (90 employees) and Information Technology Services (ITS) (21 employees)',
					'Managed Hispanic Association of Colleges and Universities (HACU) internship for OSI'
			    ],
			    about: [
			    	'The Office of Strategic Initiatives supports the Library’s mission in several ways: by directing the national program for longterm preservation of digital cultural assets; leading a collaborative institutionwide effort to develop consolidated plans for our digital future; and integrating the delivery of information technology services.'
			    ]
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
		    'Career Development Program Graduate of the Library of Congress (2008-2009)',
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
