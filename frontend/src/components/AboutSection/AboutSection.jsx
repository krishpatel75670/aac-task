import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">
            About <span className="text-gradient">Astrofest</span>
          </h2>
          <p className="section-subtitle">
            The Amateur Astronomy Club of NITK Surathkal presents its flagship celebration — 
            a week-long journey through the cosmos.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about__grid">
          {/* Left: Main text */}
          <div className="about__text-col">
            <div className="about__feature-card glass-card">
              <div className="about__feature-icon">🔭</div>
              <div>
                <h3 className="about__feature-title">Our Flagship Event</h3>
                <p className="about__feature-desc">
                  Astro Fest is the Amateur Astronomy Club's flagship celebration, held during the even semester. 
                  It spans an entire week filled with exciting events and activities — designed to bring together 
                  students with diverse interests and offer them a unique blend of learning, exploration, and fun, 
                  all under the theme of astronomy and space sciences.
                </p>
              </div>
            </div>

            <div className="about__feature-card glass-card">
              <div className="about__feature-icon">🌌</div>
              <div>
                <h3 className="about__feature-title">A Week of Wonder</h3>
                <p className="about__feature-desc">
                  Throughout the week, participants experience a wide variety of events: Astroquiz, where knowledge 
                  meets curiosity; space-themed treasure hunts combining adventure with problem-solving; an 
                  Astrophotography workshop; Starry Nights on the Science Block terrace; and Knowledge Sharing 
                  Sessions on captivating topics.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual / Stats */}
          <div className="about__visual-col">
            <div className="about__planet-visual">
              <div className="about__planet-core" />
              <div className="about__planet-ring about__planet-ring--1" />
              <div className="about__planet-ring about__planet-ring--2" />
              <div className="about__planet-satellite" />
            </div>

            <div className="about__info-cards">
              {[
                { label: 'Organized By', value: 'Amateur Astronomy Club', icon: '🏛️' },
                { label: 'Institute', value: 'NITK Surathkal', icon: '🎓' },
                { label: 'Duration', value: '7 Days', icon: '📅' },
                { label: 'Theme', value: 'Astronomy & Space Science', icon: '🚀' },
              ].map(({ label, value, icon }) => (
                <div key={label} className="about__info-card glass-card">
                  <span className="about__info-icon">{icon}</span>
                  <div>
                    <div className="about__info-label">{label}</div>
                    <div className="about__info-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
