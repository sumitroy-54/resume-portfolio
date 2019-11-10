import React from 'react';
import '../skills/skills.scss';

export default function Card() {
    return (
        <div className="skill-card-list">
                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/1?set=set2`} className="card-container-images"/>
                        <h2>ReactJs</h2>
                        <h3>Javascript</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/2?set=set2`} className="card-container-images"/>
                        <h2>Redux</h2>
                        <h3>Javascript</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/3?set=set2`} className="card-container-images"/>
                        <h2>EcmaScript 6</h2>
                        <h3>Javascript</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/4?set=set2`} className="card-container-images"/>
                        <h2>NPM</h2>
                        <h3>Node Package Manager</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/5?set=set2`} className="card-container-images"/>
                        <h2>CSS3</h2>
                        <h3>SCSS/SASS</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/6?set=set2`} className="card-container-images"/>
                        <h2>RESTful API</h2>
                        <h3>Handling Http Requests</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/7?set=set2`} className="card-container-images"/>
                        <h2>HTML5</h2>
                        <h3>Markup Language</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/8?set=set2`} className="card-container-images"/>
                        <h2>Webpack 2.0 (Basic)</h2>
                        <h3>Bundler</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/9?set=set2`} className="card-container-images"/>
                        <h2>Babel</h2>
                        <h3>Javascript Compiler</h3>
                    </div>

                    <div className="card-container">
                        <img alt='monster' src={`https://robohash.org/10?set=set2`} className="card-container-images"/>
                        <h2>GIT</h2>
                        <h3>Version Control System</h3>
                    </div>
            </div>
    )
}