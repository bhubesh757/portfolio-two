import React from "react";
import "./SocialMedia.css";
import { SocialMediaLinks } from "/home/bhubesh/portfolio-two/src/portfolio.js";

export default function socialMedia() {
  if (!SocialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      
      {SocialMediaLinks.github ? 
      (<a href={SocialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {SocialMediaLinks.linkedin ?
      <a href={SocialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      :
      null}

      {SocialMediaLinks.gmail ?
      <a href={`mailto:${SocialMediaLinks.gmail}`} className="icon-button google" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}

      {SocialMediaLinks.gitlab ?
      <a href={SocialMediaLinks.gitlab} className="icon-button gitlab" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

      {SocialMediaLinks.facebook ?
      <a href={SocialMediaLinks.facebook} className="icon-button facebook" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      :
      null}

       {SocialMediaLinks.instagram ?
      <a href={SocialMediaLinks.instagram} className="icon-button instagram" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
      :
      null}

      {SocialMediaLinks.twitter ?
      <a href={SocialMediaLinks.twitter} className="icon-button twitter" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      :
      null}

      {SocialMediaLinks.medium ? 
      (<a href={SocialMediaLinks.medium} className="icon-button medium" target="_blank">
        <i className="fab fa-medium"></i>
        <span></span>
      </a>)
      :
      null}

      {SocialMediaLinks.stackoverflow ? 
      (<a href={SocialMediaLinks.stackoverflow} className="icon-button stack-overflow" target="_blank">
        <i className="fab fa-stack-overflow"></i>
        <span></span>
      </a>)
      :
      null}

    </div>
  );
}