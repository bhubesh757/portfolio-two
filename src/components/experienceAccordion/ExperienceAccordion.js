import React, { Component } from "react";
import ExperienceCard from '/home/bhubesh/portfolio-two/src/components/experienceCard/ExperienceCard.js';
import "./ExperienceAccordion.css";
import { Accordion, Panel , StyledPanelContainer  } from "baseui/accordion";
// import Collapsible from 'react-collapsible';
class ExperienceAccordion extends Component {
	render() {

	  return (
		<div className="experience-accord">
		  <Accordion onChange={({ expanded }) => console.log(expanded)}>
			{this.props.sections.map((section) => {
			  return (
				<Panel
				  className="accord-panel"
				  title={section["title"]}
				  key={section["title"]}
				>
				  {section["experiences"].map((experience) => {
					return (
					  <ExperienceCard experience={experience}  />
					);
				  })}
				</Panel>
			  );
			})}
			
		  </Accordion>
		</div>
	  );
	}
  }
  
  export default ExperienceAccordion;