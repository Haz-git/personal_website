import React from 'react';
import TextLoop from 'react-text-loop';
import '../css/Backdropwords.css';

const Backdropwords = () => {


    return (
        <div className="backdrop-container">
            <h1>
                Hey! I'm Harry. I'm a &nbsp;
                <TextLoop interval={3000}>
                    <span className="transition-words">FrontEnd Engineer.</span>
                    <span className="transition-words">Web Developer.</span>
                    <span className="transition-words">Masters Candidate.</span>
                    <span className="transition-words">Molecular Biologist.</span>
                    <span className="transition-words">Micro-Biologist.</span>
                </TextLoop>
            </h1>
        </div>
    )
}

export default Backdropwords;