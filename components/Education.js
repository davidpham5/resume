import React from 'react'
import { WorkExperience } from "./Work-Experience/WorkExperience";

const Education = () => {
  const { education } = WorkExperience;
  return (
    <div className="mt-8 pl-10">
		 	<h1 className="header font-serif text-4xl border-b mb-2">
		 		{education.header}
			</h1>
       <div className="exp">
        <h3 className="text-xl font-serif">{education.college}</h3>
		 		<ul className="inline-flex mt-1 mb-1">
					<li className="font-bold pr-2">{education.major}</li>
					<li className="text-gray-700 pr-2">{education.degree}</li>
					<li className="text-gray-700 pr-2">{education.gradDate}</li>
				</ul>
				<p className="text-gray-700">{education.funny}</p>
       </div>
    </div>
  )
}

export default Education;