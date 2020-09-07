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
                    <div className='terminal-text'></div>
                </div>
            </div>
        </div>
    )
}

export default Terminal;