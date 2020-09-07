import React from 'react';
import Navigationbar from './Navigationbar';
import Backdrop from './Backdrop';
import Backdropwords from './Backdropwords';
import Terminal from './Terminal';
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
                    <Backdropwords />
                </div>
                <div>
                    <Terminal />
                </div>
            </div>
        </div>
    )
}

export default App;