// import React from 'react';
// import Welcome from '../components/Welcome';

// function Home() {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   )
// }

// export default Home
import React from 'react';

import Education from '../components/Education'
import Hero from '../components/Hero'
import Organizations from '../components/Organizations'
import Skills from '../components/Skills'
import WorkExp from '../components/Work-Experience/WorkExp'
import WorkFlow from '../components/WorkFlow'

const Resume = () => {
  return (
    <div>
      <Hero className="flex mb-5" />
      <div className="flex mb-4 container md:p-12 justify-center m-auto">
        <div className="w-2/3 ">
          <WorkExp />
          <WorkFlow />
        </div>
        <div className="w-1/3">
          <Education />
          <Skills />
          <Organizations />
        </div>
      </div>
    </div>
  )
}

export default Resume;