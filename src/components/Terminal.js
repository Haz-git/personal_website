import React from 'react';
import '../css/Terminal.css';

const Terminal = () => {
    return (
        <div className="terminal-wrapper">
            <div className='terminal-container'>
                <div className='header-bar'>
                    <div className='header-dots-container'>
                        <span className='header-dots-close'></span>
                        <span className='header-dots-min'></span>
                        <span className='header-dots-open'></span>
                    </div>
                </div>
                <div className='terminal-body'>
                    <div className='terminal-text'>
                        <div>
                            <h4 className='comment'>//const Harry = new Developer();</h4>
                        </div>
                        <br/>
                        <div className='terminal-text-block'>
                            <h4>
                                > Harry.currentLocation;
                                <br />
                                "San Diego, CA"
                            </h4>
                        </div>
                        <br />
                        <div className='terminal-text-block'>
                            <h4>
                                > Harry.personalInterests;
                                <br />
                                ["Art", "PowerLifting", "Traveling", "Cooking"]
                            </h4>
                        </div>
                        <br />
                        <div className='terminal-text-block'>
                            <h4>
                                > Harry.education;
                                <br />
                                ["B.S Human Biology - University Of California, San Diego", "(In Progress) M.S Biological Sciences (Molecular/Micro) - University of California, San Diego"]
                            </h4>
                        </div>
                        <br />
                        <div className='terminal-text-block'>
                            <h4>
                                > Harry.resumeInfo;
                                <br />
                                Undefined
                            </h4>
                        </div>
                        <br />
                        <div className='terminal-text-block'>
                            <h4>
                                > Harry.contactInfo;
                                <br />
                                Undefined
                            </h4>
                        </div>
                        <br />
                        <div className='terminal-text-block'>
                            <h4>
                                > Harry.skillList;
                                <br />
                                ["HTML5", "CSS3", "Javascript", "Python", "Java", "React", "Redux"]
                            </h4>
                        </div>
                        <br />
                        <div className="terminal-text-block inline">
                            <h4>
                                > Harry.scheduleInterview();
                                <div className="blinker-square"></div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terminal;