import './SpeakersSection.css';

const speakers = [
  {
    name: 'Dr. Ananya Krishnamurthy',
    role: 'Astrophysicist',
    org: 'Indian Institute of Astrophysics, Bengaluru',
    topic: 'Dark Matter & the Invisible Universe',
    emoji: '🔭',
    gradient: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
  },
  {
    name: 'Prof. Rajesh Menon',
    role: 'Planetary Scientist',
    org: 'ISRO Space Applications Centre',
    topic: 'Mars Missions & Indian Space Program',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #06b6d4, #0e7490)',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Cosmologist',
    org: 'Tata Institute of Fundamental Research',
    topic: 'The Big Bang: Origins of Everything',
    emoji: '🌌',
    gradient: 'linear-gradient(135deg, #ec4899, #9d174d)',
  },
  {
    name: 'Vikram Acharya',
    role: 'Astrophotographer',
    org: 'National Geographic Contributor',
    topic: 'Capturing the Night Sky',
    emoji: '📸',
    gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="speakers section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Luminaries</span>
          <h2 className="section-title">
            Speakers & <span className="text-gradient">Guests</span>
          </h2>
          <p className="section-subtitle">
            Learn from leading astronomers, scientists and explorers who illuminate the cosmos.
          </p>
        </div>

        <div className="speakers__grid">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="speaker-card glass-card">
              {/* Avatar */}
              <div className="speaker-card__avatar" style={{ background: speaker.gradient }}>
                <span className="speaker-card__emoji">{speaker.emoji}</span>
              </div>

              {/* Info */}
              <div className="speaker-card__info">
                <h3 className="speaker-card__name">{speaker.name}</h3>
                <p className="speaker-card__role">{speaker.role}</p>
                <p className="speaker-card__org">{speaker.org}</p>
              </div>

              {/* Topic */}
              <div className="speaker-card__topic">
                <span className="speaker-card__topic-label">Talking about</span>
                <span className="speaker-card__topic-text">"{speaker.topic}"</span>
              </div>

              {/* Decorative line */}
              <div className="speaker-card__line" style={{ background: speaker.gradient }} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="speakers__note">
          * Speaker lineup is tentative and subject to change. More speakers to be announced.
        </p>
      </div>
    </section>
  );
};

export default SpeakersSection;
