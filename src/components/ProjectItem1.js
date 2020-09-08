import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/ProjectItem1.css';

const ProjectItem1 = ({ projTitle }) => {

    const [title, setTitle] = useState(projTitle);

    return (
        <div className="project-card-container">
            <div className="project-card-header">
                <h2>{title}</h2>
            </div>
            <hr />
            <div className="project-desc-container">
                <div className="project-img">
                    <Fade left>
                        <img src="#"></img>
                    </Fade>
                </div>
                <div className="project-desc">
                    <Fade right>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Fade>
                </div>
            </div>
            <div className="project-skill-labels">
                <div className="skill-logo-html">
                    <i class="fab fa-html5 fa-3x"></i>
                </div>
                <div className="skill-logo-css">
                    <i class="fab fa-css3-alt fa-3x"></i>
                </div>
                <div className="skill-logo-js">
                    <i class="fab fa-js fa-3x"></i>
                </div>
                <div className="skill-logo-react">
                    <i class="fab fa-react fa-3x"></i>
                </div>
            </div>
            <div className="project-buttons-container">
                <div>
                    <button className="project-button">Live Demo</button>
                </div>
                <div>
                    <button className="project-button">View Source</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem1;