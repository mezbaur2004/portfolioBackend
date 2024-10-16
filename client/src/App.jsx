import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/homePage.jsx";
import ContactPage from './components/contactPage';
import AllProjects from "./components/allProjects.jsx";
import LoginPage from "./components/loginPage.jsx";
import AdminPage from "./components/adminPage.jsx";
import AboutUpdate from "./components/aboutUpdate.jsx";
import ProjectsUpdate from "./components/projectsUpdate.jsx";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/all-projects" element={<AllProjects />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/about" element={<AboutUpdate />} />
                    <Route path="/admin/projects" element={<ProjectsUpdate />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
