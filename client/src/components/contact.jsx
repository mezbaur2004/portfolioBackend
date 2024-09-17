import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title text-warning">Contact Me</h2>
                <div className="social-links">
                    <a href="https://facebook.com/mezbaur2004" className="text-light" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://linkedin.com/in/mezbaur2004" className="text-light" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mezbaur2004" className="text-light" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
