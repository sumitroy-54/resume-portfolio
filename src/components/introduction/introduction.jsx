import React from 'react';
import './introduction.scss';
import Skills from '../skills/skills';
import Information from '../info/info';
import Particles from 'react-particles-js';
const imgone = require('../../img/img1.jpg');

export default function Introduction() {
    return (
        <div>
                <header>
                    <div className="introduction">

                        <div className="introduction__share-buttons">
                            <a href="https://www.linkedin.com/in/sumit-roy-88a538121/" target="_blank" rel="noopener noreferrer" className="links__btn-linked-in">LinkedIn</a>
                            <a href="mailto:sumitroy623@gmail.com" className="links__btn-mailer" rel="noopener noreferrer">Contact Me</a>
                        </div>

                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 70
                                    },
                                    "move":{
                                        "speed": 6
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }} 
                            className="particle-js"/>

                            
                        <div className="introduction__text-box">
                        
                            <img src={imgone} alt="Display_Picture" className="introduction__photo"/>
                            <h1 className="introduction-primary">
                                <span className="introduction-primary--main"><p>Hello, I'm Sumit!</p></span>
                                <span className="introduction-primary--sub">
                                    <p>
                                        I am a ReactJs developer from Bangalore, India. I enjoying building websites using ReactJs and latest technologies.
                                        If you are a business seeking for a web presence or an employer looking to hire, you can get in touch with me here.
                                    </p>
                                </span>
                            </h1>

                            {/* <a href="#section-tours" className="btn">View Portfolio</a> */}

                            
                        </div>
                    </div>
                </header>
                <main>
                    <Skills />
                    <Information />
                </main>
            </div>
    )
}