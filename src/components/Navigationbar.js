import React from 'react';
import Navabout from './Navabout';
import Navhome from './Navhome';
import Navprojects from './Navprojects';
import '../css/Navigationbar.css';


const Navigationbar = () => {
    return (
        <div className='nav-container'>
            <Navhome />
            <Navprojects />
            <Navabout />
        </div>
    )
}

export default Navigationbar;