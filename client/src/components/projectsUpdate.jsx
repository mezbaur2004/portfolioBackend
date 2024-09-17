import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/projectsUpdate.css';

const ProjectsUpdate = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
        gitHubLink: '',
        image: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentProjectId, setCurrentProjectId] = useState(null); // To track which project is being edited

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3030/api/projects');
                setProjects(response.data);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Error fetching projects');
            }
        };

        fetchProjects();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = localStorage.getItem('jwt'); // Retrieve the token from localStorage

        if (!token) {
            setError('No token found');
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            };

            if (currentProjectId) {
                // PUT request for updating an existing project
                await axios.put(`http://localhost:3030/api/projects/${currentProjectId}`, formData, config);
                alert('Project updated successfully');
            } else {
                // POST request for creating a new project
                await axios.post('http://localhost:3030/api/projects', formData, config);
                alert('Project created successfully');
            }

            // Clear form and fetch updated projects list
            setFormData({
                title: '',
                description: '',
                link: '',
                gitHubLink: '',
                image: '',
            });
            setCurrentProjectId(null);
            const response = await axios.get('http://localhost:3030/api/projects');
            setProjects(response.data);
        } catch (err) {
            if (err.response) {
                setError(`Error: ${err.response.data.message || 'Unknown error'}`);
                console.error('Error response data:', err.response.data);
            } else if (err.request) {
                setError('No response received from server');
                console.error('Error request data:', err.request);
            } else {
                setError('Error setting up request: ' + err.message);
                console.error('Error message:', err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (project) => {
        setFormData({
            title: project.title,
            description: project.description,
            link: project.link,
            gitHubLink: project.gitHubLink,
            image: project.image,
        });
        setCurrentProjectId(project._id); // Set the project ID to be edited
    };

    const handleDelete = async (projectId) => {
        const token = localStorage.getItem('jwt'); // Retrieve the token from localStorage

        if (!token) {
            setError('No token found');
            return;
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            };

            await axios.delete(`http://localhost:3030/api/projects/${projectId}`, config);
            alert('Project deleted successfully');

            // Fetch updated projects list
            const response = await axios.get('http://localhost:3030/api/projects');
            setProjects(response.data);
        } catch (err) {
            if (err.response) {
                setError(`Error: ${err.response.data.message || 'Unknown error'}`);
                console.error('Error response data:', err.response.data);
            } else if (err.request) {
                setError('No response received from server');
                console.error('Error request data:', err.request);
            } else {
                setError('Error setting up request: ' + err.message);
                console.error('Error message:', err.message);
            }
        }
    };

    return (
        <div className="projects-update-wrapper">
            <h2 className="projects-update-heading">{currentProjectId ? 'Update Project' : 'Create New Project'}</h2>
            {error && <p className="projects-update-error-text">{error}</p>}

            <form onSubmit={handleSubmit} className="projects-update-form">
                <div className="projects-update-form-field">
                    <label htmlFor="title" className="projects-update-form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="projects-update-form-input"
                        required
                    />
                </div>
                <div className="projects-update-form-field">
                    <label htmlFor="description" className="projects-update-form-label">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="5"
                        className="projects-update-form-textarea"
                        required
                    ></textarea>
                </div>
                <div className="projects-update-form-field">
                    <label htmlFor="link" className="projects-update-form-label">Project Link</label>
                    <input
                        type="url"
                        id="link"
                        name="link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className="projects-update-form-input"
                        required
                    />
                </div>
                <div className="projects-update-form-field">
                    <label htmlFor="gitHubLink" className="projects-update-form-label">GitHub Link</label>
                    <input
                        type="url"
                        id="gitHubLink"
                        name="gitHubLink"
                        value={formData.gitHubLink}
                        onChange={handleInputChange}
                        className="projects-update-form-input"
                        required
                    />
                </div>
                <div className="projects-update-form-field">
                    <label htmlFor="image" className="projects-update-form-label">Image URL</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="projects-update-form-input"
                        required
                    />
                </div>
                <button type="submit" className="projects-update-submit-button" disabled={loading}>
                    {loading ? 'Saving...' : currentProjectId ? 'Update' : 'Create'}
                </button>
            </form>

            {/* Display existing projects */}
            <div className="projects-update-list">
                <h3 className="projects-update-list-heading">Existing Projects:</h3>
                {projects.length === 0 ? (
                    <p className="projects-update-no-projects">No projects available.</p>
                ) : (
                    projects.map((project) => (
                        <div key={project._id} className="projects-update-card">
                            <h4 className="projects-update-card-title">{project.title}</h4>
                            <p className="projects-update-card-description">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects-update-card-link">Project Link</a>
                            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="projects-update-card-link">GitHub Link</a>
                            <img src={project.image} alt={project.title} className="projects-update-card-image" />
                            <div className="projects-update-card-actions">
                                <button onClick={() => handleEdit(project)} className="projects-update-card-edit-button">Edit</button>
                                <button onClick={() => handleDelete(project._id)} className="projects-update-card-delete-button">Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProjectsUpdate;
