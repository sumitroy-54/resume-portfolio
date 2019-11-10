import React from 'react';
import './skills.scss';
import Card from '../card/card';
const video_one = require('../../img/video.mp4');
const video_two = require('../../img/video.webm');

export default function Skills() {
    return (
        <section className="skills-container">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay="autoplay" muted loop>
                    <source src={video_one} type="video/mp4" />
                    <source src={video_two} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
            <div className="u-margin-bottom-big">
                <h2 className="skills-container__heading">
                    My Top Skills
                </h2>
            </div>


            {/* Displaying Cards */}
            <Card />
            
        </section>
    )
}
