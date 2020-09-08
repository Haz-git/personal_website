import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/ProjectItem1.css';

const ProjectItem1 = ({ projTitle, projImg, projDesc, projReact }) => {

    const [title, setTitle] = useState(projTitle);
    const [desc, setDesc] = useState(projDesc);
    const [reactTrue, setReactTrue] = useState(projReact);

    const isTrueReact = () => {
        if (reactTrue === "true") {
            return (
                <div className="skill-logo-container">
                    <div className="skill-logo-react">
                        <i class="fab fa-react fa-3x"></i>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className="master-wrapper">
            <div className="project-card-header">
                <h2>{title}</h2>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card-container">
                    <div className="project-desc-container">
                        <div className="project-img">
                            <Fade left>
                                <img src={projImg}></img>
                            </Fade>
                        </div>
                        <div className="project-desc">
                            <Fade right>
                                <h4>{desc}</h4>
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
                                    {isTrueReact()}
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
        </div>    
    )   
}

export default ProjectItem1;