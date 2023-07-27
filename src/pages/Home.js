import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Home.css";


function Home() {

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Priyamvadha Thatipamula.</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ color: "#ffffff" }} />
            </a>
            <a href="mailto:priyamvadha0112@gmail.com">
              <EmailIcon style={{ color: "#ffffff" }} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon style={{ color: "#ffffff" }} />
            </a>
            <a
              href="https://www.instagram.com/_____priyamvadha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{ color: "#ffffff" }} />
            </a>

            {/* <a
              href="https://twitter.com/@__priyamvadha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ color: "#ffffff" }} />
            </a> */}
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS,  NPM, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS
              SQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home; 
//"https://www.instagram.com/__priyamvadha__"
//"https://twitter.com/@__priyamvadha"