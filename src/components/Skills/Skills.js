import {Fade} from 'react-reveal'
import React from 'react'
import { greeting, illustration, skillPage } from '/home/bhubesh/portfolio-two/src/portfolio.js'
// import DisplayLottie from '../Lottie/DisplayLottie'

import greetings from '/home/bhubesh/portfolio-two/src/virtue/lottie/greetings.json'

import './Skills.css'
import SoftwareSkills from '/home/bhubesh/portfolio-two/src/components/Skills/SoftwareSkills/SoftwareSkills.js' 
import DisplayLottie from '../displayLottie/DisplayLottie'



function Skills() {
    return (
        <div className = 'skills'>
            <div className="skill__maindiv" id = 'skills'>
                <Fade left duration={2000} >
                    <div className="skills__imageDiv">
                        {illustration.animated ?(
                            <DisplayLottie animationData = {greetings}></DisplayLottie>
                        ): (
                            <img 
                            alt = 'man is working'
                            src = 'https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
                            ></img>
                        )}
                    </div>
                </Fade>

                {/* text in right side */}

                <Fade right duration={2000}>
                    <div className="skills-text-div">
                        <h1 className = 'skills-heading'> 
                            {skillPage.title}{''}
                        </h1>
                        {/* subttitle */}
                        <p className = 'subTitle skills-text-subtitle'>
                            {skillPage.subTitle}
                        </p>
                        <br></br>
                        <SoftwareSkills></SoftwareSkills>

                        <div>
                                {skillPage.skills.map((skills, i) => {
                                  return (
                                    <p
                                      key={i}
                                      className = 'subTitle skills-text'
                                    >
                                      {skills}
                                    </p>
                                  );
                                })}
            </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills