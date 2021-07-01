import React from 'react';
import resume from '../../assets/ManpreetSingh.pdf'

const Resume = () => {
    return (
        <section className="container resume">
            <div className="row">
                <h1 className="display-3 col title text-center">Please download my resume below</h1>
            </div>
            <div className="row">
                <div className = 'col justify-content-center'>
                    <h2>Resume</h2>
                    <a href={resume} download><p>Download my resume</p></a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
