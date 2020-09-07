import React from 'react';
import Navigationbar from './Navigationbar';
import Backdrop from './Backdrop';

const App = () => {
    return (
        <div>
            <div>
                <Navigationbar />
            </div>
            <div>
                <Backdrop />
            </div>
        </div>
    )
}

export default App;