import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/ProjectItem1.css';

const ProjectItem1 = ({ projTitle, projImg }) => {

    const [title, setTitle] = useState(projTitle);

    return (
        <div className="project-card-wrapper">
            <div className="project-card-container">
                <div className="project-card-header">
                    <h2>{title}</h2>
                </div>
                <div className="project-desc-container">
                    <div className="project-img">
                        <Fade left>
                            <img src={projImg}></img>
                        </Fade>
                    </div>
                    <div className="project-desc">
                        <Fade right>
                            <h4>Like most people, I primarily create webapps to make my daily life easier.<br/><br/> This project was built for timing the numerous activites and experiments I must keep track of during a day in my wet lab--Enter a note in the template provided, input a length of time, and organize many tasks at once.<br/><br/> As this was one of my first major projects using solely HTML5, CSS3, and JS, I learned much about event listeners, generating elements in the DOM, and general layout design!</h4>
                            <div className="project-skill-labels">
                                <div className="skill-logo-container">
                                    <div className="skill-logo-html">
                                        <i class="fab fa-html5 fa-3x"></i>
                                    </div>
                                </div>
                                <div className="skill-logo-container">
                                    <div className="skill-logo-css">
                                        <i class="fab fa-css3-alt fa-3x"></i>
                                    </div>
                                </div>
                                <div className="skill-logo-container">
                                    <div className="skill-logo-js">
                                        <i class="fab fa-js fa-3x"></i>
                                    </div>
                                </div>
                                {/* <div className="skill-logo-container">
                                    <div className="skill-logo-react">
                                        <i class="fab fa-react fa-3x"></i>
                                    </div>
                                </div> */}
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="project-buttons-container">
                                <div className="project-button">
                                    <button className="ui primary button">Live Demo</button>
                                </div>
                                <div className="project-button">
                                    <button className="ui button">View Source</button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>    
    )   
}

export default ProjectItem1;