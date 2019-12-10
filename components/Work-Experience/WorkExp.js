import React from "react";
import { WorkExperience } from "./WorkExperience";

const WorkExp = (...props) => {
  const work = WorkExperience;
  return (
    <div>
      <h1 className="header">{work.header}</h1>
      {work.experiences &&
        work.experiences.map((exp, index) => (
          <div className="exp" key={index}>
            <ul className="list-inline">
              <li>
                <h3>{exp.company}</h3>
              </li>
              {exp.department && (<li className="text-muted">{exp.department}</li>)}
            </ul>
            <ul className="list-inline">
              <li>
                <p className="strong">{exp.title}</p>
              </li>
              <li>
                <span className="text-muted">
                  {exp.start} - {exp.end}
                </span>
              </li>
              <li>
                <span className="text-muted">{exp.location.city}</span>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};
export default WorkExp;
