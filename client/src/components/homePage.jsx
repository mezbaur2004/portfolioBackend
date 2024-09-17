import React from 'react';
import Header from './header.jsx';
import About from './about.jsx';
import Projects from './projects.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';

const homePage = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer/>
        </div>
    );
};

export default homePage;