import React, { Component } from "react";

import GithubRepoCard from "/home/bhubesh/portfolio-two/src/components/githubRepoCard/GithubRepoCard.js";
import Button from "/home/bhubesh/portfolio-two/src/components/Button/Button.js";

import { Fade } from "react-reveal";
import { illustration, projectsHeader } from "/home/bhubesh/portfolio-two/src/portfolio.js";
import ProjectsData from "/home/bhubesh/portfolio-two/src/components/projects/projects.json";
import "./Projects.css";
import projects from '/home/bhubesh/portfolio-two/src/virtue/lottie/projects.json'
import DisplayLottie from "../displayLottie/DisplayLottie";

class Projects extends Component {
  render() {
    
    return (
      <div className="projects-main" id = 'projects'>
        {/* <Header  /> */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
              {illustration.animated ? (
              <DisplayLottie  animationData={projects} />
            // <h1>hey</h1>
            ) : (
              <img
                alt="education"
                src= 'https://image.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg'
              ></img>
            )}
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                 
                >
                  {projectsHeader.title}
                </h1>
                <br></br>
                <p
                  className="projects-header-detail-text subTitle"
                  
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo}  />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/Udai004?tab=repositories"
          newTab={true}
          
        />
        {/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} /> */}
        {/* <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Projects;
