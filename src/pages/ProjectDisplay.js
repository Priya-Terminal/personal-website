import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectsList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectsList[id];
  const navigate = useNavigate();


  const skillsList = Array.isArray(project.skills) ? project.skills : [];

  const openGitHubLink = () => {
    window.open(project.github, "_blank");
  };

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b>{" "}
        {skillsList.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </p>
      <p>
        <b>Description:</b> {project.description}
      </p>
      <div className="icon-group">
      <a
          href="https://github.com/Priya-Terminal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="icon" />
        </a>
        <button onClick={goBack} className="back-button">
          <ArrowBackIcon className="icon" />
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;

