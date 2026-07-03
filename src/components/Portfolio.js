import React, { useEffect, useRef } from 'react';
import comm from '../assets/comm.png'
import ATL from '../assets/ATL.png'
import anan from '../assets/anan.png'
const projects = [
  {
    id: 1,
    number: '01',
    title: 'Harare community',
    description:
      'Harare Community Board is a local events platform for Harare, Zimbabwe. It connects residents with community events, workshops, markets, and initiatives happening across the city.',
    tags: ['React', 'CSS/SASS', 'Node.js'],
    link: 'https://harare-comm.vercel.app/',
    image: comm , 
  },
  {
    id: 2,
    number: '02',
    title: 'ATL stationery',
    description:
      'ATL Kays is your one-stop online destination for premium stationery and office essentials, bringing everything you need to build a productive workspace right to your door.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://atl-kays.vercel.app/',
    image: ATL, 
  },
  {
    id: 3,
    number: '03',
    title: 'Anan Consultance',
    description:
      'ATL Kays is your one-stop online destination for premium stationery and office essentials, bringing everything you need to build a productive workspace right to your door.',
    tags: ['JavaScript', 'HTML', 'CSS ' , 'REACT'],
    link: 'https://anan-consultance-2d48-j692fzi7x-keishers-projects.vercel.app/',
    image: anan, 
  },
];

const Portfolio = () => {
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
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      {/* Section header */}
      <div className="portfolio-header fade-up">
        <span className="section-tag">Portfolio</span>
        <h2 className="portfolio-title">
          Selected <em>Work</em>
        </h2>
        <p className="portfolio-subtitle">
          A collection of projects I've built — more on the way.
        </p>
      </div>

      {/* Cards grid */}
      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card fade-up"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Image / placeholder */}
            <div className="card-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="card-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span>Screenshot coming soon</span>
                </div>
              )}

              {/* Glow overlay on hover */}
              <div className="card-glow" />

              {/* Project number badge */}
              <span className="card-number">{project.number}</span>
            </div>

            {/* Info below the image */}
            <div className="card-info">
              <div className="card-info-top">
                <h3 className="card-title">{project.title}</h3>
                <span className="card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
              <p className="card-desc">{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom note */}
      <p className="portfolio-note fade-up">
        More projects coming soon —{' '}
        <a href="mailto:katererekeisher4@gmail.com">get in touch</a> if you'd like to collaborate.
      </p>
    </section>
  );
};

export default Portfolio;