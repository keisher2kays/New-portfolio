
import React from 'react';
// Components (We will create these next to match your image)
import Hero from './components/Hero'; 
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// Global Styles
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">

      {/* 1. Main Banner*/}
      <section id="home">
        <Hero />
      </section>

      {/* 2. About Section*/}
      <section id="about">
        <About />
      </section>

     

      {/* 3. Portfolio Gallery */}
      <section id="portfolio">
        <Portfolio />
      </section>

    {/* 4. Contact section */}
      <section id="contact">
  <Contact />
</section>

       {/* 5. Resume & Skills */}
       <section id="resume">
        <Footer />
      </section>

      {/* Footer with your CV Contact Info */}
     
    </div>
  );
}

export default App;