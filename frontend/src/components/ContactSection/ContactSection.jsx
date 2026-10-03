import { FiMail, FiInstagram, FiYoutube, FiMapPin, FiPhone } from 'react-icons/fi';
import './ContactSection.css';

const socialLinks = [
  {
    icon: <FiInstagram size={22} />,
    label: 'Instagram',
    handle: '@aac.nitk',
    href: 'https://www.instagram.com/aac.nitk/',
    color: '#ec4899',
  },
  {
    icon: <FiYoutube size={22} />,
    label: 'YouTube',
    handle: 'AAC NITK',
    href: 'http://www.youtube.com/@amateurastronomyclubnitk3007',
    color: '#ef4444',
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    handle: 'aac@nitk.edu.in',
    href: 'mailto:aac@nitk.edu.in',
    color: '#06b6d4',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Contact & <span className="text-gradient">Social</span>
          </h2>
          <p className="section-subtitle">
            Have questions? Reach out to us. Follow us to stay updated on all things Astrofest.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info-col">
            <div className="contact__info-card glass-card">
              <h3 className="contact__col-title">Find Us</h3>

              <div className="contact__detail-item">
                <div className="contact__detail-icon"><FiMapPin /></div>
                <div>
                  <div className="contact__detail-label">Address</div>
                  <div className="contact__detail-value">
                    Amateur Astronomy Club<br />
                    NITK Surathkal, Mangaluru<br />
                    Karnataka 575025, India
                  </div>
                </div>
              </div>

              <div className="contact__detail-item">
                <div className="contact__detail-icon"><FiPhone /></div>
                <div>
                  <div className="contact__detail-label">Contact</div>
                  <div className="contact__detail-value">
                    Through Instagram DM or Email
                  </div>
                </div>
              </div>

              <div className="contact__detail-item">
                <div className="contact__detail-icon"><FiMail /></div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <a href="mailto:aac@nitk.edu.in" className="contact__detail-value contact__detail-link">
                    aac@nitk.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact__social-col">
            <h3 className="contact__col-title">Follow Us</h3>
            <div className="contact__social-cards">
              {socialLinks.map(({ icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card glass-card"
                  style={{ '--social-color': color }}
                >
                  <div className="social-card__icon" style={{ color }}>
                    {icon}
                  </div>
                  <div className="social-card__content">
                    <div className="social-card__label">{label}</div>
                    <div className="social-card__handle">{handle}</div>
                  </div>
                  <div className="social-card__arrow">↗</div>
                  <div className="social-card__glow" style={{ background: color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Map / Location Visual */}
          <div className="contact__map-col">
            <h3 className="contact__col-title">Location</h3>
            <div className="contact__map-card glass-card">
              <div className="contact__map-visual">
                <div className="contact__map-pin">
                  <div className="contact__map-pin-dot" />
                  <div className="contact__map-pin-ring" />
                  <div className="contact__map-pin-ring contact__map-pin-ring--2" />
                </div>
                <div className="contact__map-label">
                  <span>📍</span>
                  <div>
                    <strong>NITK Surathkal</strong><br />
                    <span>Mangaluru, Karnataka</span>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=NITK+Surathkal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary contact__map-btn"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
