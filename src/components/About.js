import React, { useEffect, useRef } from 'react';
import profilePic from '../assets/me.jpg';
const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll('.fade-up');
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'React', 'JavaScript', 'HTML', 'CSS/SASS','Figma',
    'Node.js', 'Bootstrap', 'MongoDB', 'UI/UX Design', 'Canva',
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-inner">

        {/* ── LEFT: photo + contact ── */}
        <div className="about-left">
          <span className="section-tag fade-up">About Me</span>

          <div className="photo-card fade-up">
            <div className="photo-frame">
              
              
                <img src={profilePic} alt="Keisher Katerere" />
             
              <div className="photo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span>Your photo here</span>
              </div>
            </div>
          </div>

          <div className="contact-block fade-up">
            <div className="contact-row">
              <span className="dot" />
              <a href="mailto:katererekeisher4@gmail.com">katererekeisher4@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="dot" />
              <span>Harare, Zimbabwe</span>
            </div>
           
            <div className="contact-row">
              <span className="dot" />
              <span>+263 78 991 7878</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: bio + stats + skills ── */}
        <div className="about-right">

          <h2 className="bio-headline fade-up">
            Turning ideas into <em>intuitive</em>, pixel-perfect web experiences.
          </h2>

          <p className="bio-body fade-up">
            I'm a frontend developer with a keen eye for design and a commitment to delivering
            exceptional user experiences. Graduate of Uncommon's Frontend Developer &amp; Software
            Engineering program, I specialise in building responsive, user-centric applications
            using modern web technologies. Currently serving as UI/UX Developer at COBA Community
            Business Association — creating digital interfaces and brand materials that connect
            people with purpose.
          </p>

          <div className="stats-row fade-up">
            <div className="stat">
              <div className="stat-num">2<span>+</span></div>
              <div className="stat-label">Years experience</div>
            </div>
            <div className="stat">
              <div className="stat-num">9<span>+</span></div>
              <div className="stat-label">Tech skills</div>
            </div>
            <div className="stat">
              <div className="stat-num">2</div>
              <div className="stat-label">Organisations</div>
            </div>
          </div>

          <div className="fade-up">
            <p className="skills-label">Skills &amp; Tools</p>
            <div className="chips-wrap">
              {skills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          <a href="/keisher cv updated (1).pdf" className="about-cta fade-up" download>
            Download Resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;