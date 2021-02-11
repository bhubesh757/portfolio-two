import React from 'react';
import Headroom from 'react-headroom';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import './HeaderLogo.css'
import HeaderTypingEffect from './HeaderTypingEffect';


import { certifications,settings, contactPageData, greeting, projectsHeader, skillPage, experience, degrees } from '/home/bhubesh/portfolio-two/src/portfolio.js';

function Header() {;
  // const viewExperience = experience.display;
  
  const viewSkills = skillPage.display;
  const viewAchievement = certifications.display;
  const viewProjects = projectsHeader.display;
  const viewContact = contactPageData.display;
  const viewEducation = degrees.display;


  const link = settings.isSplash ? "/splash" : "home";
  // const link = '/'
  return (
    <Headroom>
      <header className='header'>
        <a href="" id = 'splash' className="logo">
          {/* <span className="grey-color"> &lt;</span> */}
          {/* <div to={link} tag={Link} className="typing-demo">
      Udai Tumma!
    </div> */}
    <HeaderTypingEffect></HeaderTypingEffect>
          {/* <span className="grey-color">/&gt;</span> */}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className='navicon'></span>
        </label>
        <ul className='menu'>
          {/* {viewExperience && (
            <li>
              <a href="#experience"> Experiences</a>
            </li>
          )} */}
              {viewSkills && (
              <li>
               <a href="#skills">Skills</a>
              </li>
              )}
              {viewEducation && (
              <li>
               <a href="#education">Education</a>
              </li>
              )}

          {viewAchievement && (
            <li>
              <a href="#certifications">certifications</a>
            </li>
          )}

          {viewProjects && (
            <li>
              <a href = '#projects'>Projects</a>
            </li>
          )}
          {
            viewContact && (

          <li>
            <a href="#contact">Contact Me</a>
          </li>
            )
          }
          
         
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;