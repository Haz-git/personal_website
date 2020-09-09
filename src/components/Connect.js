import React from 'react';
import '../css/Connect.css';

const Connect = () => {
    return (
        <div className='connect-container'>
            <div className='connect-label'>
                <h2>Connect With Me!</h2>
            </div>
            <div className='options-container'>
                <div className='option-item'>
                    <button class="ui google plus button">
                        <i class="google plus icon"></i>
                            haz.dev.git@gmail.com
                    </button>
                </div>
                <div className='option-item'>
                    <button class="ui linkedin button">
                        <i class="linkedin icon"></i>
                            LinkedIn
                    </button>
                </div>
                <div className='option-item'>
                    <button class="ui facebook button">
                        <i class="facebook icon"></i>
                            Facebook
                    </button>
                </div>
                <div className='option-item'>
                    <button class="ui twitter button">
                        <i class="twitter icon"></i>
                            Twitter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Connect;