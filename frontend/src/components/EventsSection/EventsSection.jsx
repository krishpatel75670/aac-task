import { useState } from 'react';
import './EventsSection.css';

const events = [
  {
    id: 'astroquiz',
    emoji: '🧠',
    title: 'Astroquiz',
    tag: 'Quiz',
    tagColor: '#7c3aed',
    description:
      'Test your knowledge of the cosmos in this thrilling quiz event. From black holes to exoplanets — knowledge meets curiosity in an exciting battle of wits.',
    details: ['Team of 2–3 members', 'Multiple rounds', 'Prizes for top teams', 'All branches welcome'],
  },
  {
    id: 'treasure-hunt',
    emoji: '🗺️',
    title: 'Space Treasure Hunt',
    tag: 'Adventure',
    tagColor: '#f59e0b',
    description:
      'A space-themed treasure hunt that combines adventure with problem-solving. Decode clues scattered across campus and race your way to the stars!',
    details: ['Teams of 4–5', 'Campus-wide hunt', 'Encrypted clues', 'Time-based scoring'],
  },
  {
    id: 'astrophotography',
    emoji: '📸',
    title: 'Astrophotography Workshop',
    tag: 'Workshop',
    tagColor: '#06b6d4',
    description:
      'An engaging workshop for those fascinated by capturing the night sky. Learn techniques, post-processing, and go hands-on with telescopes and cameras.',
    details: ['Beginner-friendly', 'Expert-led sessions', 'Hands-on practice', 'Certificate awarded'],
  },
  {
    id: 'starry-nights',
    emoji: '🌠',
    title: 'Starry Nights',
    tag: 'Observation',
    tagColor: '#ec4899',
    description:
      'Join fellow stargazers on the Science Block terrace to observe the cosmos together. Use telescopes to witness planets, star clusters, and nebulae.',
    details: ['Telescope observation', 'Science Block Terrace', 'Night event', 'Open to all'],
  },
  {
    id: 'kss',
    emoji: '💡',
    title: 'Knowledge Sharing Sessions',
    tag: 'KSS',
    tagColor: '#10b981',
    description:
      'Captivating talks on astronomy topics that spark curiosity and broaden horizons. Expert speakers share their insights on the latest discoveries.',
    details: ['Weekly sessions', 'Expert speakers', 'Interactive Q&A', 'Diverse topics'],
  },
];

const EventsSection = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section id="events" className="events section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What's On</span>
          <h2 className="section-title">
            Events & <span className="text-gradient">Activities</span>
          </h2>
          <p className="section-subtitle">
            Five incredible events spanning a week — something for every curious mind.
          </p>
        </div>

        <div className="events__grid">
          {events.map((event, i) => (
            <div
              key={event.id}
              className={`event-card glass-card ${activeEvent === event.id ? 'event-card--active' : ''}`}
              style={{ '--accent': event.tagColor, '--delay': `${i * 0.1}s` }}
              onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
            >
              {/* Number */}
              <span className="event-card__number">0{i + 1}</span>

              {/* Header */}
              <div className="event-card__header">
                <span className="event-card__emoji">{event.emoji}</span>
                <span className="event-card__tag" style={{ background: `${event.tagColor}20`, color: event.tagColor, borderColor: `${event.tagColor}40` }}>
                  {event.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="event-card__title">{event.title}</h3>

              {/* Description */}
              <p className="event-card__desc">{event.description}</p>

              {/* Details (expand) */}
              <div className={`event-card__details ${activeEvent === event.id ? 'event-card__details--open' : ''}`}>
                <ul className="event-card__list">
                  {event.details.map(d => (
                    <li key={d} className="event-card__list-item">
                      <span className="event-card__list-dot" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Toggle */}
              <button className="event-card__toggle">
                {activeEvent === event.id ? '▲ Less info' : '▼ More info'}
              </button>

              {/* Glow line */}
              <div className="event-card__glow-line" style={{ background: event.tagColor }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
