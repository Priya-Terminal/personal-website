// import React from "react";
// import ProjectItem from "../components/ProjectItem";
// import { ProjectsList } from "../helpers/ProjectList";

// import "../styles/Projects.css";

// function Projects() {
//     return (
//       <div className="projects">
//         <h1>My Personal Projects</h1>
//         <div className="projectList">
//           {ProjectsList.map((project, idx) => {
//             return ( // Add the return statement here
//               <ProjectItem
//                 key={idx} // Add a unique key prop for each project item
//                 id={idx}
//                 name={project.name}
//                 image={project.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }

// export default Projects;

import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectsList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectsList.map((project, idx) => (
          <ProjectItem
            key={idx}
            id={idx}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

