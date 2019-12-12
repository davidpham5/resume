import React from 'react';
import WorkExp from '../components/Work-Experience/WorkExp'
import WorkFlow from '../components/WorkFlow'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Organizations from '../components/Organizations'

const Resume = () => {
  return (
    <div>
      <Hero className="flex mb-5" />
      <div className="flex mb-4 container md:p-12">
        <div className="w-2/3">
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