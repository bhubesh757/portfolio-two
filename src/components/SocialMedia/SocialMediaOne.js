import React from 'react'

import { SocialMediaLinks } from "/home/bhubesh/portfolio-two/src/portfolio.js";
import './SocialMediaOne.css'
function SocialMediaOne() {
  if (!SocialMediaLinks.display) {
    return null;
  }
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="wrapper">
        {SocialMediaLinks.facebook ?
      <a href={SocialMediaLinks.facebook}  target="_blank" rel="noopener noreferrer">
        <i className="fa fa-5x fa-facebook-square" />
        <span></span>
      </a>
      :
      null}
          
          

          {SocialMediaLinks.twitter ?
      <a href={SocialMediaLinks.twitter}  target="_blank" rel="noopener noreferrer">
        <div>
        </div>
        <i className="fa fa-5x fa-twitter-square" />
        <span></span>
      </a>
      :
      null}

          {SocialMediaLinks.github ? 
      (<a href={SocialMediaLinks.github}  target="_blank" rel="noopener noreferrer">
        
        <i className="fa fa-5x fa-github-square" />
        <span></span>
      </a>)
      :
      null}
          
          <i className="fa fa-5x fa-snapchat-square" />
         
        
            

          {SocialMediaLinks.instagram ?
      <a href={SocialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
         <i className="fa fa-5x fa fa-instagram" />
        <span></span>
      </a>
      :
      null}
         
        </div>
      </div>
    )
}

export default SocialMediaOne
