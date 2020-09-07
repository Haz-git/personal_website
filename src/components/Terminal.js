import React from 'react';
import '../css/Terminal.css';

const Terminal = () => {
    return (
        <div className="terminal-wrapper">
            <div className='terminal-container'>
                <div className='header-bar'>
                    <div className='header-dots-container'>
                        <div className='header-dots-close'></div>
                        <div className='header-dots-min'></div>
                        <div className='header-dots-open'></div>
                    </div>
                </div>
                <div className='terminal-body'>
                    <div className='terminal-text'></div>
                </div>
            </div>
        </div>
    )
}

export default Terminal;