import React from 'react';
import photo from '../../assets/img/about-me.jpg';

const About = () => {
    return (
        <section className="about-me container">
            <div className='row'><h1 className="text-center display-2">Hello, My name is Manpreet Singh!</h1></div>
            <div className="row">
                <img src={photo} alt="random photoshoot" className="col-sm-4" />
                <div className="col align-self-center">
                    <p >To obtain a challenging and rewarding software engineer position where a degree in computer engineering and 3 years of experience as a programmer will be fully utilized.</p>
                    <p >If im not coding, im lifting!!!</p>
                </div>
            </div>
        </section>
    );
};

export default About;
