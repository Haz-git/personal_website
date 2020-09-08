import React from 'react';
import Fade from 'react-reveal/Fade';
import Navigationbar from './Navigationbar';
import Backdrop from './Backdrop';
import Backdropwords from './Backdropwords';
import Terminal from './Terminal';
import ProjectItem1 from './ProjectItem1';
import virtual_lab_asst from '../imgs/virtual_lab_asst.png';
import '../css/body.css';

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
                <div>
                    <Fade>
                        <Terminal />
                    </Fade>
                </div>
                <div className='project-list'>
                    <div className='project-container'>
                        <Fade bottom>
                            <ProjectItem1 
                                projTitle="Virtual Lab Assistant"
                                projImg={virtual_lab_asst} 
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
