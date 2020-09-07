import React from 'react';
import Navigationbar from './Navigationbar';
import Backdrop from './Backdrop';
import Backdropwords from './Backdropwords';

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
            </div>
        </div>
    )
}

export default App;