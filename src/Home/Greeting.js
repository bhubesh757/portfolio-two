import React from 'react'
// fade 
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';

// css
import './Greeting.css';
import { illustration , greeting } from '../portfolio';
import Button from '/home/bhubesh/portfolio-two/src/components/Button/Button.js'

import SocialMediaOne from '../components/SocialMedia/SocialMediaOne';
import DisplayLottie from '../components/displayLottie/DisplayLottie';
// import codingMan from '/home/bhubesh/portfolio-two/src/virtue/lottie/codingMan.json'
import skillsOne from '/home/bhubesh/portfolio-two/src/virtue/lottie/skillsOne.json'

// import StyleContext from '../contexts/StyleContext';

function Greeting() {

    // Making the page dark
    
    return (
        <div>
          
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
        <Fade left duration = {1000}>
            
          <div className="greeting-text-div">
            <div>
              <h1
                className= 'greeting-text'
              >
                {' '}
                {greeting.title}{' '}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              
              <p
                className= 'greeting-text-p subTitle'
              >
                {greeting.subTitle}
              </p>
              {/* <SocialMedia /> */}
              <div>
              <SocialMediaOne></SocialMediaOne>
              </div>
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* <ButtonOne></ButtonOne> */}
                <Button
                  text="My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
            </Fade>
            <Fade right duration = {1000}>

          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={skillsOne} />
            // <h1>hey</h1>
            ) : (
              <img
                alt="man sitting on table"
                src= 'https://image.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg'
              ></img>
            )}
          </div>
            </Fade>
        </div>
      </div>
        </div>
    )
}

export default Greeting
