import React, { Component } from "react";


import { Fade } from "react-reveal";
import "./ContactPage.css";
import media from '/home/bhubesh/portfolio-two/src/virtue/lottie/media.json'
import contact from '/home/bhubesh/portfolio-two/src/virtue/lottie/contact.json'
import SocialMediaOne from '/home/bhubesh/portfolio-two/src/components/SocialMedia/SocialMediaOne.js';
import { greeting, contactPageData, illustration } from "/home/bhubesh/portfolio-two/src/portfolio.js";
import Button from '/home/bhubesh/portfolio-two/src/components/Button/Button.js'
import Header from "../../Navbar/Header";
import DisplayLottie from "../displayLottie/DisplayLottie";
import Footer from "../Footer/Footer";
const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {

    return (
      <div className="contact-main" >
        <Header  />
        <div className="basic-contact" >
            <div className="contact-heading-div" id = 'contact'>
              {/* <Fade bottom duration = {2000}> */}

              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  
                >
                  {ContactData["description"]}
                </p>
                <SocialMediaOne  />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    
                  />
                </div>
              </div>
              {/* </Fade> */}
              <Fade right duration = {2000}>

              <div className="contact-heading-img-div">
              {illustration.animated ? (
              <DisplayLottie animationData={media} />
            // <h1>hey</h1>
            ) : (
              <img
                
                src= 'https://image.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg'
              ></img>
            )}
              </div>
              </Fade>
            </div>

          
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
            <Fade right duration = {2000}>

<div className="address-heading-img-div">
{illustration.animated ? (
<DisplayLottie animationData={contact} />
// <h1>hey</h1>
) : (
<img
  
  src= 'https://image.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg'
></img>
)}
</div>
</Fade>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    
                  />
                </div>
              </div>
            </div>
          </Fade>
        
        </div>
        {/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} /> */}
        {/* <TopButton theme={this.props.theme} /> */}
        
      </div>
    );
  }
}

export default Contact;