import React from "react";
import { WorkExperience } from "./WorkExperience";

const WorkExp = (...props) => {
  const work = WorkExperience;
  return (
    <div className="mt-8">
      <h1 className="header font-serif text-4xl border-b mb-5">{work.header}</h1>
      {work.experiences &&
        work.experiences.map((exp, index) => (
          <div className="exp max-w-2xl block bg-white mb-10" key={index}>
            <ul className="list-inline">
              <li >
                <h3 className="font-serif text-2xl">{exp.company}</h3>
              </li>
              {exp.department && (<li className="text-muted">{exp.department}</li>)}
            </ul>
            <ul className="list-inline flex">
              <li className="mr-3">
                <p className="font-bold">{exp.title}</p>
              </li>
              <li className="mr-3">
                <span className="text-sm text-gray-700">
                  {exp.start} - {exp.end}
                </span>
              </li>
              <li>
                <span className="text-gray-700">{exp.location.city}</span>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};
export default WorkExp;
