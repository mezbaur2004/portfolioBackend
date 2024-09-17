import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import '../css/projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3030/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const projectsToShow = projects.slice(0, 2); // Always show 2 projects on the main page

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title text-warning">My Projects</h2>
                <div className="projects-list d-flex flex-column">
                    {projectsToShow.map((project, index) => (
                        <div key={index} className="project-item">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <h3>{project.title}</h3>
                            {project.gitHubLink && (
                                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light ml-2">
                                    GitHub Repository
                                </a>
                            )}
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-warning">
                                View Project
                            </a>
                        </div>
                    ))}

                    {/* Show 'Show All' button only if there are more than 2 projects */}
                    {projects.length > 2 && (
                        <div className="text-right mt-3">
                            <Link to="/all-projects" className="btn btn-primary">
                                Show All Projects
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
