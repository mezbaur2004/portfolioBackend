import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sideBar.jsx';

const AdminPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="admin-page">
            {isLoggedIn && (
                <div className="admin-container">
                    <Sidebar />
                    <div className="admin-content">
                        <h2>Admin Dashboard</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
