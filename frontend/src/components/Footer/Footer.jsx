import { FiInstagram, FiYoutube, FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__top-fade" />
      <div className="container footer__container">
        {/* Main row */}
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">✦</span>
              <span className="footer__logo-text">Astro<span>fest</span> 2025</span>
            </div>
            <p className="footer__tagline">
              A week-long cosmic celebration by the Amateur Astronomy Club, NITK Surathkal.
            </p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/aac.nitk/" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="http://www.youtube.com/@amateurastronomyclubnitk3007" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="YouTube">
                <FiYoutube size={20} />
              </a>
              <a href="mailto:aac@nitk.edu.in" className="footer__social-btn" aria-label="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {[
                ['About', '#about'],
                ['Events', '#events'],
                ['Schedule', '#schedule'],
                ['Speakers', '#speakers'],
                ['Gallery', '#gallery'],
                ['Register', '#register'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer__link"
                    onClick={e => { e.preventDefault(); document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }); }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Events</h4>
            <ul className="footer__links">
              {[
                '🧠 Astroquiz',
                '🗺️ Treasure Hunt',
                '📸 Astrophotography',
                '🌠 Starry Nights',
                '💡 KSS Sessions',
              ].map(e => (
                <li key={e}><span className="footer__link footer__link--passive">{e}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li><span className="footer__link footer__link--passive">NITK Surathkal</span></li>
              <li><span className="footer__link footer__link--passive">Mangaluru, Karnataka</span></li>
              <li><span className="footer__link footer__link--passive">575025, India</span></li>
              <li>
                <a href="mailto:aac@nitk.edu.in" className="footer__link">aac@nitk.edu.in</a>
              </li>
              <li>
                <a href="https://aac.nitk.ac.in" target="_blank" rel="noopener noreferrer" className="footer__link">
                  aac.nitk.ac.in ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Amateur Astronomy Club, NITK Surathkal. Made with ✨ for stargazers everywhere.
          </p>
          <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
