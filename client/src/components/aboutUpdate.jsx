import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/aboutUpdate.css'

const AboutUpdate = () => {
    const [aboutData, setAboutData] = useState({
        about: '' // Adjust to match the database structure
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isNew, setIsNew] = useState(true); // Determine if it's create or update

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const token = localStorage.getItem('jwt'); // Retrieve the token
                if (!token) {
                    setError('No token found');
                    return;
                }

                const response = await axios.get('http://localhost:3030/api/about', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add the token in the Authorization header
                    },
                });

                if (response.data && response.data.about) {
                    setAboutData({ about: response.data.about }); // Set the data if exists
                    setIsNew(false); // Set to false if data exists (Update scenario)
                } else {
                    setIsNew(true); // Set to true if no data (Create scenario)
                }
            } catch (err) {
                console.error('Error fetching about data:', err);
                setError('Error fetching about data');
            }
        };

        fetchAboutData();
    }, []);

    const handleInputChange = (e) => {
        setAboutData({ about: e.target.value }); // Update about data directly
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

            // PUT request for both creating and updating about data
            const response = await axios.put('http://localhost:3030/api/about', aboutData, config);

            if (response.status === 200 || response.status === 201) {
                alert('About section saved successfully');
                setAboutData(response.data); // Update local state with the saved data
                setIsNew(false); // Set to false as data now exists
            } else {
                setError('Unexpected response status: ' + response.status);
            }

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

    return (
        <div className="about-update-container">
            <h2>{isNew ? 'Create About Section' : 'Update About Section'}</h2>
            {error && <p className="error-message">{error}</p>}

            {/* Display existing about data as HTML */}
            {!isNew && (
                <div className="existing-description">
                    <h3>Existing Description:</h3>
                    <div
                        dangerouslySetInnerHTML={{ __html: aboutData.about }} // Render HTML content safely
                    ></div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="about">Description (HTML)</label>
                    <textarea
                        id="about"
                        name="about"
                        value={aboutData.about}
                        onChange={handleInputChange}
                        rows="10"
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : isNew ? 'Create' : 'Update'}
                </button>
            </form>
        </div>
    );
};

export default AboutUpdate;
