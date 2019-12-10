import React from 'react'
import { WorkExperience } from "./Work-Experience/WorkExperience";

const Organizations = () => {
  const { org } = WorkExperience;
  return (
    <div className="mt-8 pl-10">
       <h1 className="header font-serif text-4xl border-b mb-2">
         Organizations
      </h1>
       <div className="skills">
         <ul className="pl-4 mt-1 mb-1">
          {org && org.map(orgs =>(<li className="list-disc p-1">{ orgs }</li>))}
        </ul>
       </div>
    </div>
  )
}

export default Organizations;