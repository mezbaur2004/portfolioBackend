// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Admin Menu</h3>
            <ul>
                <li><Link to="/admin/about">About</Link></li>
                <li><Link to="/admin/projects">Projects</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
