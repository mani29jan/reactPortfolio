import React from 'react';
import Project from '../Project';
import weatherDashboard from '../../assets/img/Weather-dashboard.png';
import budgetTracker from '../../assets/img/budgetTracker.jpg';
import techBlog from '../../assets/img/techBlog.jpg';
import bookSearch from '../../assets/img/bookSearch.jpg';
//import runPhoto from '../../assets/img/run.jpg';
//import pizzaPhoto from '../../assets/img/pizza.jpg';

const Portfolio = () => {
    const projects = [
        {
            name: 'Weather dashboard',
            img: weatherDashboard
        },
        {
            name: 'Budget Tracker',
            img: budgetTracker
        },
        {
            name: 'Tech Blog',
            img: techBlog
        },
        {
            name: 'Search books',
            img: bookSearch
        },

    ];

    return (
        <section className="portfolio container">
            <div class="row">
                <h1 className="text-center display-3 title">Projects</h1>
            </div>
            <div class="flex-row">
                {projects.map((project, i) => (
                    <div key={project.name}>
                        < Project project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
