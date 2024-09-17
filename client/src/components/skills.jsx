import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title text-warning">My Skills</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <h3>Database Management</h3>
                        <p>MongoDB (Mongoose)</p>
                    </div>
                    <div className="skill-item">
                        <h3>Back-End Development</h3>
                        <p>NodeJS, ExpressJS</p>
                    </div>
                    <div className="skill-item">
                        <h3>Front-End Development</h3>
                        <p>HTML, CSS, ReactJS, Bootstrap</p>
                    </div>
                    <div className="skill-item">
                        <h3>Version Control</h3>
                        <p>Git, GitHub</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
