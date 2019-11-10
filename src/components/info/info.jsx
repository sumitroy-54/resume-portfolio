import React from 'react';
import './info.scss';

export default function Information() {
    return (
        <section className="information-container">
                <div className="information-container__card">
                    <h2 className="information-container__card-heading">
                        Details
                    </h2>
                    <div>
                            
                        <p className="content-heading"><strong>Software Engineer (ReactJs Developer)</strong></p>
                        <p className="content-info">Cerner HealthCare Solutions Pvt Ltd (2017-Present)</p>
                        <p className="content-heading"><strong>Project #1: Learning Journey (End User Side)</strong></p>
                        <p className="content-info">Learning Journey is a learning methodology within consulting learning
                            platform that provides staged and role-based learning to our clients. The learning structure is
                            sliced into stages and is sequential which helps to measure progress and confidence at each
                            stage for the client.
                        </p>

                        <p className="content-heading"><strong>Project #2: Cerner Learning (Administrator)</strong></p>
                        <p className="content-info">Cerner Learning is the Administrator side of the Learning Journey
                            application. By using the Cerner Learning application, the administrator is able to create
                            specific org for a client and add users to that org. Additionally, this tool also manages the
                            learnings which are undertaken by the clients in the form of courses
                            (Videos/Pdf’s/Documents/Links etc).
                        </p>

                    </div>
                </div>   
            </section>
    )
}

