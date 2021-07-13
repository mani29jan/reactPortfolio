import React from 'react';
import Project from '../Project';
import weatherDashboard from '../../assets/img/Weather-dashboard.png';
import budgetTracker from '../../assets/img/budgetTracker.jpg';
import techBlog from '../../assets/img/techBlog.jpg';
import bookSearch from '../../assets/img/bookSearch.jpg';
import socialNetwork from '../../assets/img/socialNetwork.jpg';
import notes from '../../assets/img/notes.jpg';
import calendar from '../../assets/img/calendar-app.jpg';

const Portfolio = () => {
    const projects = [
        {
            name: 'Weather dashboard',
            repoUrl: 'https://github.com/mani29jan/weather-dashboard',
            img: weatherDashboard
        },
        {
            name: 'Budget Tracker',
            repoUrl: 'https://github.com/mani29jan/budgetTracker',
            img: budgetTracker
        },
        {
            name: 'Tech Blog',
            repoUrl: 'https://github.com/mani29jan/tech-blog',
            img: techBlog
        },
        {
            name: 'Search books',
            repoUrl: 'https://github.com/mani29jan/book-search',
            img: bookSearch
        },
        {
            name: 'Social Network API',
            repoUrl: 'https://github.com/mani29jan/socialNetworkApi',
            img: socialNetwork
        },
        {
            name: 'Notes taker',
            repoUrl: 'https://github.com/mani29jan/noteTaker',
            img: notes
        },
        {
            name: 'Calendar',
            repoUrl: 'https://github.com/mani29jan/calendar-app',
            img: calendar
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
