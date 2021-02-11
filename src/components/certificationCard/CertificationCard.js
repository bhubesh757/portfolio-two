import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
   
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className="logo_img"
                  src= {certificate.link}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" >
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" >
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
