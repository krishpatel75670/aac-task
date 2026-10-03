import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={e => handleNavClick(e, '#hero')}>
            <span className="navbar__logo-icon">✦</span>
            <span className="navbar__logo-text">Astro<span>fest</span></span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`navbar__link ${activeSection === href.replace('#', '') ? 'navbar__link--active' : ''}`}
                  onClick={e => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#register" className="navbar__cta btn-primary" onClick={e => handleNavClick(e, '#register')}>
            Register Now
          </a>

          {/* Hamburger */}
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`mobile-menu__link ${activeSection === href.replace('#', '') ? 'mobile-menu__link--active' : ''}`}
                onClick={e => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#register" className="btn-primary mobile-menu__cta" onClick={e => handleNavClick(e, '#register')}>
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
