import React, { Component } from 'react';
import './ExperienceCard.css';
import { Fade } from "react-reveal";
import ProjectLanguages from '/home/bhubesh/portfolio-two/src/components/projectLanguages/ProjectLanguages.js';


class ExperienceCard extends Component {
    render() {
		const {
			experience,
			index,
			totalCards
		} = this.props;
        return (
					// <div
					// 	className="experience-card"
					// 	style={{ border: `1px solid ${experience["color"]}` }}
					// >
					// 	<div className="experience-card-logo-div">
					// 		<img
					// 			className="experience-card-logo"
					// 			src={require(`../../assests/images/${experience["logo_path"]}`)}
					// 			alt=""
					// 		/>
					// 	</div>
					// 	<div className="experience-card-body-div">
					// 		<div className="experience-card-header-div">
					// 			<div className="experience-card-heading-left">
					// 				<h3 className="experience-card-title" >{experience["title"]}</h3>
					// 				<p className="experience-card-company" >
                    //                     <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
					// 					    {experience["company"]}
                    //                     </a>
					// 				</p>
					// 			</div>
                    //             <div className="experience-card-heading-right">
                    //                 <p className="experience-card-duration" >{experience["duration"]}</p>
                    //                 <p className="experience-card-location" >{experience["location"]}</p>
                    //             </div>
					// 		</div>
                    //         <p className="experience-card-description" >{experience["description"]}</p>
					// 	</div>
					// </div>
					<div className="experience-list-item" style={{marginTop: (index===0 ? 30 : 50)}}>
						<Fade left duration={2000} distance="40px">
						<div className="experience-card-logo-div">
					 		{/* <img
					 			className="experience-card-logo"
					 			src={require(`../../assests/images/${experience["logo_path"]}`)}
					 			alt=""
					 		/> */}
					 	</div>
						</Fade>
						<div className="experience-card-stepper">
							<div style={{width: 20, height: 20,  borderRadius: 50, zIndex: 100}}/>
							{
								index!==(totalCards-1) &&
								<div style={{height: 200, width: 2,  position: 'absolute', marginTop: 20}}/>
							}
						</div>
						<Fade right duration={2000} distance="40px">
							<div style={{display: 'flex', flexDirection: 'row'}}>
								<div className="arrow-left" style={{borderRight: `10px solid `}}></div>
								<div className="experience-card" >
									<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
										<div>
											<h3 className="experience-card-title" >{experience["title"]}</h3>
											<p className="experience-card-company" >
												<a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
													{experience["company"]}
												</a>
											</p>
										</div>
										<div>
										<div className="experience-card-heading-right">
											<p className="experience-card-duration" >{experience["duration"]}</p>
											<p className="experience-card-location" >{experience["location"]}</p>
										</div>
										</div>
									</div>
									<div style={{display: 'flex', justifyContent: 'flex-start', marginTop: 20}}>
										<ProjectLanguages
											className="repo-languages"
											logos={experience["languages"]}
										/>
									</div>
								</div>
								
							</div>
						</Fade>
					</div>
					
				);
    }
}

export default ExperienceCard;





