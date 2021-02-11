import React, { Component } from "react";

import ExperienceAccordion from '/home/bhubesh/portfolio-two/src/components/experienceAccordion/ExperienceAccordion.js';
import "./Experience.css";
import {experience} from '/home/bhubesh/portfolio-two/src/portfolio.js';
import { Fade } from "react-reveal";
// import ExperienceImg from './ExperienceImg';



class Experience extends Component {
	render() {
		const theme = this.props.theme;
		return (
			<div className="experience-main">
				{/* <Header  /> */}
				<div className="basic-experience">
					<Fade bottom duration={2000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								{/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
								{/* <ExperienceImg  /> */}
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text" >{experience.title}</h1>
								<h3 className="experience-heading-sub-text" >
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle" >
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<div className = 'experienceAccordian'>

				<ExperienceAccordion sections={experience["sections"]}  />
				</div>

				{/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} /> */}
			</div>
		);
	}
}

export default Experience;
