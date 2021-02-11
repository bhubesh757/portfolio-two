import React, { Component } from "react";

import Educations from "/home/bhubesh/portfolio-two/src/containers/education/Educations.js";
import Certifications from "/home/bhubesh/portfolio-two/src/containers/certifications/Certifications.js";
import CompetitiveSites from "/home/bhubesh/portfolio-two/src/components/competitiveSites/CompetitiveSites.js";
import { competitiveSites, illustration } from "/home/bhubesh/portfolio-two/src/portfolio.js";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import DisplayLottie from "../displayLottie/DisplayLottie";
import education from '/home/bhubesh/portfolio-two/src/virtue/lottie/education.json'
class Education extends Component {
  render() {
    
    return (
      <div className="education-main" id = 'education'>
       
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              
              <div className="heading-text-div">
                <h1 className="heading-text" >
                  Education
                </h1>
                <br></br>
                <h3 className="heading-sub-text" >
                  Basic Qualification and Certifcations
                </h3>
                <br></br>
                {/* <h3 className = 'ed-quotes'>
                “Education without values, as useful as it is, seems rather to make man a more clever devil.” ― C.S. Lewis
                </h3> */}
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>

              <div className="heading-img-div">
              {illustration.animated ? (
              <DisplayLottie  animationData={education} />
            // <h1>hey</h1>
            ) : (
              <img
                alt="education"
                src= 'https://image.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg'
              ></img>
            )}
              </div>
            </div>
          </Fade>
          <Educations  />
          <Certifications  />
        </div>
        
      </div>
    );
  }
}

export default Education;
