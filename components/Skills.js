import React from 'react'
import { WorkExperience } from "./Work-Experience/WorkExperience";

const Skills = () => {
  const { skills } = WorkExperience;
  return (
    <div className="mt-8 pl-10">
       <h1 className="header font-serif text-4xl border-b mb-2">
         Skills
      </h1>
       <div className="skills">
         <ul className="pl-4 mt-1 mb-1">
          {skills && skills.map((skill, index) =>(<li key={index} className="list-disc p-1">{ skill }</li>))}
        </ul>
       </div>
    </div>
  )
}

export default Skills;