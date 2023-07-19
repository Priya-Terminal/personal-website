import { GitHub } from "@material-ui/icons";
import UPIbookkeeper from "../assets/UPIbookkeeper.jpeg";
import blog from "../assets/blog.png";
import facedetection from "../assets/facedetection.jpeg";


export const ProjectsList = [
  {
    id: 0,
    name: "UPI Book Keeper",
    image: UPIbookkeeper,
    skills: ["JavaScript,Nodejs,Expressjs,Reactjs,MongoDB"],
    description: ["Developed a full-stack web application called “UPI Book keeper” for maintaining transaction statistics.Implemented features for tracking and analyzing UPI transactions on daily basis,Provided functionality for customers and vendors to easily monitor their transactions.Utilized the MERN stack (MongoDB, express.js, React.js, node.js) for development of the application."],
    githubLink: "https://github.com/Priya-Terminal"
  },
  {
    name: "Blog Application",
    image: blog,
    skills: ["Javascrpit,React,Node.js,Express.js,MongoDB"],
    description: ["Developed a full-stack single-page web application using MERN stack.Implemented user authentication, allowing users to register, login and post/edit blogs. Utilized react.js for the front-end, express.js and node.js for the backend and mongoDB for the Database."],
    githubLink: "https://github.com/Priya-Terminal"
  },
  {
    name: "Face Detection",
    image: facedetection,
    skills: ["Python"],
    description: ["Designed and implemented a face detection system using python.Utilized live webcam feed to detect human faces and extract facial features.Implemented different cascades for accurate face detection"],
    githubLink: "https://github.com/Priya-Terminal"
  },
];