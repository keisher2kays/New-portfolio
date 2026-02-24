

import React from 'react';

const Hero = () => {

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="hero">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home"   className="active"  onClick={(e) => handleScroll(e, '#home')}>Home</a>
          <a href="#about"              onClick={(e) => handleScroll(e, '#about')}>About</a>
          <a href="#portfolio"          onClick={(e) => handleScroll(e, '#portfolio')}>Portfolio</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
        </div>
        {/* <div className="nav-contact">KAYS</div> */}
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="name-wrapper">
          <h2 className="first-name">KEISHER</h2>
          <h1 className="last-name">KATERERE</h1>
          <p className="subtitle">Frontend Developer</p>

          <div className="btn-group">
            {/* View Work scrolls to portfolio */}
            <button
              className="btn-outline btn-primary"
              onClick={(e) => handleScroll(e, '#portfolio')}
            >
              View My Work
            </button>

            {/* Get In Touch scrolls to footer / opens email */}
            <a href="mailto:katererekeisher4@gmail.com" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Social Footer Icons */}
      <div className="hero-socials">
        <a href="https://porfoliokays.netlify.app/" target="_blank" rel="noreferrer">
          <i className="fas fa-globe"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;