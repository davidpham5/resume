import React from 'react';
import WorkExp from '../components/Work-Experience/WorkExp'
import WorkFlow from '../components/WorkFlow'
import Hero from '../components/Hero'
import '../components/styles/_main.css'
const Resume = () => {
  return (
    <div>
      <Hero className="flex mb-5" />
      <div className="container p-12">
        <WorkExp />
        <WorkFlow />
      </div>
    </div>
  )
}

export default Resume;