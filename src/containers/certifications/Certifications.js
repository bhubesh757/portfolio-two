import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "/home/bhubesh/portfolio-two/src/portfolio.js";
import CertificationCard from "/home/bhubesh/portfolio-two/src/components/certificationCard/CertificationCard.js";

class Certifications extends Component {
  render() {

    return (
      <div className="main" id="certifications">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" >
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert}  />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
