// Resume data following the JSON Resume standard: https://jsonresume.org/schema/
// Edit this file to update your resume content.

const RESUME = {
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: "David M. Pham",
    label: "Senior Privacy Engineer / Technical Lead",
    email: "davidpham5@gmail.com",
    summary:
      "Senior software engineer with 12+ years of experience and 3+ years focused on privacy engineering at The Washington Post, a top-50 global website. Led the end-to-end integration of the IAB Global Privacy Platform (GPP) into production without any significant impact to time-to-first-ad performance—demonstrating the ability to ship privacy-critical features at scale while meeting stringent performance standards. Architected a centralized Privacy API serving 30+ jurisdictions. Experienced writing design documents, conducting privacy reviews, building proofs of concept, and addressing technical debt in privacy-sensitive codebases. Contributing member of W3C Privacy Working Group. Comfortable working across JavaScript, TypeScript, PHP, and Node.js in large-scale web applications. Passionate about mission-driven organizations and building performant systems that protect users at scale.",
    location: {
      city: "Silver Spring",
      region: "MD",
      countryCode: "US",
    },
    profiles: [
      {
        network: "GitHub",
        username: "davidpham5",
        url: "https://github.com/davidpham5",
      },
      {
        network: "LinkedIn",
        username: "davidmpham",
        url: "https://linkedin.com/in/davidmpham",
      },
      {
        network: "Personal",
        username: "davidchicopham.com",
        url: "https://davidchicopham.com",
      },
    ],
  },
  work: [
    {
      name: "The Washington Post",
      position: "Senior Privacy Engineer / Technical Lead",
      location: "Washington, DC (in-office)",
      startDate: "2022-01",
      endDate: "",
      highlights: [
        "Led end-to-end integration of the IAB Global Privacy Platform (GPP) into production consent infrastructure across a top-50 global website—scaled traffic from 5% to 100% over two months with continuous DataDog monitoring, resulting in only a 264ms increase from baseline with no significant impact to time-to-first-ad.",
        "Architected a centralized Privacy API from scratch, consolidating ~12 repositories of local implementations into a single 835-byte stub serving 30+ jurisdictions (23 US states, EU/GDPR, UK, Switzerland, Canada)—reducing multi-team, multi-sprint deployments to a single configuration change in one repo.",
        "Built a privacy footer as a web component (Vite, Rollup) deployed as a drop-in script module across all Washington Post pages outside the core rendering engine, ensuring consistent privacy controls site-wide.",
        "Led the JENTIS server-side privacy-enhanced tracking project end-to-end, migrating 98% of client-side trackers in Google Tag Manager to server-side equivalents (Meta, Google Ads, Rokt, Podscribe, Commission Junction, CAPI Reddit)—directly mitigating VPPA legal exposure and enabling the Paid Media Marketing Team to net gain 45k subscribers from October 2024 to March 2025.",
        "Led OneTrust CMP Quebec deployment and wrote the engineering requirements document (ERD) for the US launch with GPP, documenting complex cookie-to-identity-preference mappings that became a cross-team reference.",
        "Wrote design documents, technical specifications, and architecture decision records for privacy-critical systems. Conducted privacy reviews of new features and third-party integrations.",
        "Built proofs of concept to validate architectural approaches before committing to full implementation. Addressed technical debt in privacy and consent systems inherited from prior implementations.",
        "Led a 3-person engineering team through sprint planning, retrospectives, blameless incident reports, and code reviews—fostering a culture of transparency, documentation, and collaborative problem-solving.",
        "Mentored engineers across multiple levels on privacy best practices, secure design patterns, and system architecture.",
        "Managed vendor relationships with consent management platforms, server-side tag tracking providers, and privacy tooling partners.",
        "Represented The Washington Post at the News Media Alliance, contributing to industry discussions on privacy standards and policy affecting publishers nationwide.",
        "Contributing member of the W3C Privacy Working Group and Privacy Advertising Technology Working Group, representing organizational interests in emerging web privacy standards.",
      ],
    },
    {
      name: "The Washington Post",
      position: "Senior Software Engineer",
      location: "Washington, DC",
      startDate: "2018-01",
      endDate: "2022-01",
      highlights: [
        "Built the Licensing & Syndication site redesign using Next.js (SSG), React 17, and TypeScript—delivering a modern publishing platform end-to-end for a large-scale content operation.",
        "Developed data-intensive analytical dashboards in React (Context API, Hooks, Chart.js, MongoDB) for editorial staff. Improved app performance by 20% through JS/CSS minification (545 KB → 80 KB gzipped).",
        "Prototyped 4 POCs across 2 distributed teams, writing REST APIs in Express.js, GraphQL, Apollo, and MongoDB. Created 55 Cypress e2e tests and 29 Jest unit tests.",
        "Contributed to overall architecture ensuring scalable, maintainable, and extensible codebases across the engineering organization.",
      ],
    },
    {
      name: "Symplicity",
      position: "Front-End Developer",
      location: "Arlington, VA",
      startDate: "2012-11",
      endDate: "2018-01",
      highlights: [
        "Built user-centric web applications in AngularJS, vanilla JavaScript (ES6), PHP, and modular component architecture for enterprise clients.",
        "Collaborated with UI/UX teams to ship production interfaces. Led the LESS-to-SASS migration across two products, improving maintainability across the codebase.",
        "Developed and improved several front-end codebases, and created apps for with user-centric design in mind.",
        "Conducted user tests for individuals with disabilities to ensure the accessibility of interfaces (colorblindness, keyboard accessibility, screen readers).",
        "Worked closely with design team (UI/UX and Visual) and launched products to clients.",
        "Cultivated and contributed to shared values around design and engineering in a culture of teamwork.",
        "Built modular front-end components and architected microservices within legacy apps.",
        "Achieved Expert-level proficiency coding HTML, CSS, JS including ARIA support.",
        "Intimate knowledge of cross-browser challenges, e.g. Internet Explorer 11, Firefox, Chrome, Mobile Safari, and Safari.",
        "Extensive coding in standards-compliant markup and CSS-driven layouts that separate content from presentation.",
        "Champion user-centered design, web standards, usability, and accessibility in SCRUM meetings and strategic level meetings.",
        "Worked in AngularJS, React, VanillaJS, Bootstrap 3, Git, NPM, Bower, Grunt, LESS/SCSS stack daily.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Missouri-Columbia",
      area: "History (Major), Sociology (Minor)",
      studyType: "B.A.",
      endDate: "2006",
    },
  ],
  skills: [
    {
      name: "Languages",
      keywords: [
        "JavaScript",
        "TypeScript (ES6+)",
        "PHP",
        "Node.js",
        "HTML/CSS",
      ],
    },
    {
      name: "Privacy",
      keywords: [
        "IAB GPP",
        "TCF 2.x",
        "USP API",
        "Consent Management",
        "Privacy by Design",
        "VPPA",
        "GDPR",
        "W3C Privacy WG",
      ],
    },
    {
      name: "Frameworks",
      keywords: [
        "React",
        "Next.js",
        "AngularJS",
        "Express.js",
        "GraphQL/Apollo",
        "Web Components",
        "Tailwind",
      ],
    },
    {
      name: "Testing",
      keywords: ["Cypress", "Jest", "Puppeteer", "Jasmine"],
    },
    {
      name: "DevOps & Tools",
      keywords: [
        "AWS",
        "S3",
        "CDN",
        "Jenkins",
        "CI/CD",
        "Vite",
        "Rollup",
        "Webpack",
        "GitHub",
        "DataDog",
      ],
    },
    {
      name: "APIs & Data",
      keywords: ["REST", "GraphQL", "MongoDB", "MySQL", "PostgreSQL"],
    },
  ],
  projects: [
    {
      name: "Privacy API — The Washington Post",
      description:
        "Centralized privacy policy engine serving 30+ jurisdictions. Consolidated ~12 repos of local geolocation checks into a single 835-byte stub deployed via S3 + CDN. Adding a new state went from a multi-team effort to one config change.",
    },
    {
      name: "IAB GPP Integration — The Washington Post",
      description:
        "End-to-end integration of the IAB Global Privacy Platform into production consent infrastructure across a top-50 global website. Scaled 5%→100% traffic over 2 months with only a 264ms increase from baseline.",
    },
    {
      name: "JENTIS Server-Side Tracking — The Washington Post",
      description:
        "Migrated 98% of client-side GTM trackers to server-side equivalents, mitigating VPPA legal exposure. Enabled paid media attribution that netted 45k new subscribers (Oct 2024–Mar 2025).",
    },
  ],
  hobbies: [
    {
      name: "iPod Restoration",
      keywords: [
        "Restoring vintage iPods to working condition. Expertise in diagnosing hardware issues, replacing hard drives with flash storage, and refurbishing battery packs. Passionate about preserving the golden era tech such as iPod 4th, 5th, and 6th generations. Sell them to friends, colleagues, and family.",
      ],
    },
    {
      name: "Gameboy Modding",
      keywords: [
        "Modding classic Gameboys (Advance, Pocket, Color) with backlit IPS screens, rechargeable batteries, and custom shells. Skilled in soldering, screen installation, and troubleshooting hardware issues. Enjoy combining retro aesthetics with modern functionality to create unique handheld gaming devices.",
      ],
    },
    {
      name: "Photography",
      keywords: [
        "Passionate about photography, specializing in portrait and street photography. Skilled in using Fujifilm and Olympus mirrorless cameras, as well as photo editing software like Photomator, and Pixelmator Pro. Enjoy capturing candid moments when people are being themselves, often drawing inspiration from 90's and early 2000's magazine photography.",
      ],
    },
    {
      name: "Sourdough Baking",
      keywords: [
        "Avid sourdough baker with a focus on rustic, artisanal loaves. Skilled in maintaining a healthy starter culture, mastering hydration levels, and perfecting fermentation techniques. Enjoy experimenting with different flours and hydration ratios to create unique textures and flavors in homemade bread.",
      ],
    },
    {
      name: "ebike",
      keywords: [
        "Enthusiast of electric bikes, Passionate about sustainable transportation and enjoy riding restored e-bikes for commuting and leisure.",
      ],
    },
    {
      name: "Community Organizing",
      keywords: [
        "Active in local community organizing efforts, including volunteering at food banks, participating in neighborhood mutual aid events, and advocating for workplace policy changes and solidarity. Committed to fostering a sense of community and making a positive impact through grassroots initiatives.",
      ],
    },
  ],
};
