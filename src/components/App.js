import React from 'react';
import Fade from 'react-reveal/Fade';
import Navigationbar from './Navigationbar';
import Backdrop from './Backdrop';
import Backdropwords from './Backdropwords';
import Terminal from './Terminal';
import ProjectItem1 from './ProjectItem1';
import virtual_lab_asst from '../imgs/virtual_lab_asst.png';
import foodFinder from '../imgs/foodFinder.png';
import oldPortfolioWebsite from '../imgs/oldPortfolioWebsite.png';
import Connect from './Connect';
import '../css/body.css';

const projectItemDesc1 = <h4>Like most people, I primarily create webapps to make my daily life easier.<br/><br/> This project was built for timing the numerous activites and experiments I must keep track of during a day in my wet lab--Enter a note in the template provided, input a length of time, and organize many tasks at once.<br/><br/> As this was one of my first major projects using solely HTML5, CSS3, and JS, I learned much about event listeners, generating elements in the DOM, and general layout design!</h4>

const projectItemDesc2 = <h4>I am a huge foodie. However, I am also (currently) a financially challenged student. What is the perfect solution for this situation? Cooking.<br/><br/>This webapp was created for me to easily look up some recipes and discover interesting food dishes from other cultures. Upon clicking the picture, a modal opens up showing the ingredients and instructions required to cook the dish. <br/><br/> This project was imperative to my growth as a developer. I learned alot about using the fetch API to request and display content from TheMealDB's database. Additionally, I learned even more about user event handling. This was truly a very fun project.</h4>

const projectItemDesc3 = <h4>This website is the first major project I built using React. Of course, improvements will be made per iteration of this website, so the exact one you're seeing right now may not the very first version I've made!<br/><br/> If you want to see how I improved this website, check out the source history on my github!<br/><br/>Through this project, I practiced and solidified the fundamentals of what I learned about React--hooks, state, components, props, JSX, and much more. <br/><br/> I now understand the power of React and what makes this library very popular.</h4>

const App = () => {
    return (
        <div>
            <div>
                <Navigationbar />
            </div>
            <div>
                <Backdrop />
                <div>
                    <Fade top>
                        <Backdropwords />
                    </Fade>
                </div>
                <div className="header-label">
                    <Fade top>
                        <h2>I have a passion for creating simple, yet beautiful websites and web applications.</h2>
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <Terminal />
                    </Fade>
                </div>
                <Fade bottom>
                    <div className='project-headline'>
                        <h2>My Projects</h2>
                        <div className='project-headline-line'><hr/></div>
                    </div>
                </Fade>
                <div className='project-list'>
                    <div className='project-container'>
                        <Fade bottom>
                            <ProjectItem1 
                                projTitle="This Portfolio Website!"
                                projImg={oldPortfolioWebsite}
                                projDesc={projectItemDesc3}
                                projReact='true'
                            />
                        </Fade>
                    </div>
                    <div className='project-container'>
                        <Fade bottom>
                            <ProjectItem1 
                                projTitle="Virtual Lab Assistant"
                                projImg={virtual_lab_asst}
                                projDesc={projectItemDesc1}
                                projReact='false'
                            />
                        </Fade>
                    </div>
                    <div className='project-container'>
                        <Fade bottom>
                            <ProjectItem1 
                                projTitle="Food Finder"
                                projImg={foodFinder} 
                                projDesc={projectItemDesc2}
                                projReact='false'
                            />
                        </Fade>
                    </div>
                </div>
                <Connect />
            </div>
        </div>
    )
}

export default App;
