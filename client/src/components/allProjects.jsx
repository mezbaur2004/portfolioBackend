import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/allProjects.css';
import Footer from "./footer.jsx";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <div>
            <div className="d-flex flex-row justify-content-between m-1">
                <h1>{`<Rafi/>`}</h1>
                    <div>
                        <Link to="/" className="btn btn-outline-primary">
                            Go to Homepage
                        </Link>
                    </div>

            </div>
            <section id="full-display-projects" className="projects-full-section">
                <h2 className="full-section-title text-warning">All Projects</h2>
                <div className="full-container">

                    {/* CSS Grid for the projects layout */}
                    <div className="full-projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="full-project-item">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="full-project-image"
                                />
                                <h3>{project.title}</h3>
                                {project.gitHubLink && (
                                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer"
                                       className="btn btn-outline-light ml-2">
                                        GitHub Repository
                                    </a>
                                )}
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                   className="btn btn-warning">
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>


                </div>

                {/* "Go to Homepage" Button */}
                <div className="text-center mt-4 p-2">
                    <Link to="/" className="btn btn-outline-primary p-3">
                        Go to Homepage
                    </Link>
                </div>

            </section>

            <Footer/>
        </div>
    );
};

export default AllProjects;
