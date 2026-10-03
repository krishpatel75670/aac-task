import { useEffect, useRef } from 'react';
import { FiArrowDown, FiCalendar, FiMapPin } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
  const orbitRef = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;
    const animate = () => {
      angle += 0.003;
      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${angle}rad)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Nebula blobs */}
      <div className="hero__nebula hero__nebula--1" />
      <div className="hero__nebula hero__nebula--2" />
      <div className="hero__nebula hero__nebula--3" />

      {/* Orbit Orrery */}
      <div className="hero__orrery" aria-hidden="true">
        <div className="orrery__sun" />
        <div className="orrery__ring orrery__ring--1">
          <div className="orrery__planet orrery__planet--1" />
        </div>
        <div className="orrery__ring orrery__ring--2">
          <div className="orrery__planet orrery__planet--2" />
        </div>
        <div className="orrery__ring orrery__ring--3" ref={orbitRef}>
          <div className="orrery__planet orrery__planet--3" />
        </div>
      </div>

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>AAC · NITK Surathkal</span>
        </div>

        {/* Title */}
        <h1 className="hero__title">
          <span className="hero__title-line">ASTRO</span>
          <span className="hero__title-line hero__title-accent">FEST</span>
          <span className="hero__title-year">2025</span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline">
          A week-long cosmic celebration of astronomy, science & exploration.<br />
          Explore the universe. Question the cosmos.
        </p>

        {/* Event Meta */}
        <div className="hero__meta">
          <div className="hero__meta-item">
            <FiCalendar className="hero__meta-icon" />
            <span>February 2025 · Even Semester</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <FiMapPin className="hero__meta-icon" />
            <span>NITK Surathkal, Karnataka</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="#register" className="btn-primary hero__cta-primary" onClick={e => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Register for Free
          </a>
          <a href="#events" className="btn-secondary" onClick={e => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore Events
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { value: '7', label: 'Days of Cosmic Fun' },
            { value: '5+', label: 'Exciting Events' },
            { value: '500+', label: 'Participants' },
            { value: '∞', label: 'Wonder' },
          ].map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero__scroll-cta" onClick={scrollToAbout} aria-label="Scroll down">
        <FiArrowDown />
        <span>Scroll to explore</span>
      </button>

      {/* Bottom gradient */}
      <div className="hero__bottom-fade" />
    </section>
  );
};

export default HeroSection;
