import React from 'react';
import Navabout from './Navabout';
import Navhome from './Navhome';
import Navprojects from './Navprojects';
import Navresume from './Navresume';
import '../css/Navigationbar.css';


const Navigationbar = () => {
    return (
        <div className='nav-container'>
            <Navhome />
            <Navprojects />
            <Navresume />
            <Navabout />
        </div>
    )
}

export default Navigationbar;