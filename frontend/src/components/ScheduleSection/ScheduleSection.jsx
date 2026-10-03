import { useState } from 'react';
import './ScheduleSection.css';

const days = [
  {
    day: 'Day 1',
    date: 'Mon · Feb 3',
    events: [
      { time: '09:00 AM', title: 'Inauguration Ceremony', venue: 'LHC Auditorium', type: 'ceremony' },
      { time: '11:00 AM', title: 'KSS – Origins of the Universe', venue: 'MRD Auditorium', type: 'kss' },
      { time: '03:00 PM', title: 'Astrophotography Workshop Day 1', venue: 'Workshop Hall', type: 'workshop' },
      { time: '08:00 PM', title: 'Starry Nights – Inauguration', venue: 'Science Block Terrace', type: 'observation' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Tue · Feb 4',
    events: [
      { time: '10:00 AM', title: 'Astroquiz – Prelims', venue: 'LHC 001', type: 'quiz' },
      { time: '02:00 PM', title: 'KSS – Black Holes & Beyond', venue: 'MRD Auditorium', type: 'kss' },
      { time: '04:00 PM', title: 'Astrophotography Workshop Day 2', venue: 'Workshop Hall', type: 'workshop' },
    ],
  },
  {
    day: 'Day 3',
    date: 'Wed · Feb 5',
    events: [
      { time: '10:00 AM', title: 'Space Treasure Hunt – Registration', venue: 'Sports Complex', type: 'hunt' },
      { time: '11:00 AM', title: 'Space Treasure Hunt Begins', venue: 'Campus Wide', type: 'hunt' },
      { time: '03:00 PM', title: 'KSS – Mars Colonization', venue: 'MRD Auditorium', type: 'kss' },
    ],
  },
  {
    day: 'Day 4',
    date: 'Thu · Feb 6',
    events: [
      { time: '10:00 AM', title: 'Astroquiz – Finals', venue: 'LHC Auditorium', type: 'quiz' },
      { time: '02:00 PM', title: 'Panel Discussion – Future of Space Exploration', venue: 'MRD Auditorium', type: 'talk' },
      { time: '08:00 PM', title: 'Starry Nights – Meteor Watch', venue: 'Science Block Terrace', type: 'observation' },
    ],
  },
  {
    day: 'Day 5',
    date: 'Fri · Feb 7',
    events: [
      { time: '10:00 AM', title: 'KSS – Exoplanets & Life', venue: 'MRD Auditorium', type: 'kss' },
      { time: '02:00 PM', title: 'Astrophotography Exhibition', venue: 'LHC Foyer', type: 'workshop' },
      { time: '04:00 PM', title: 'Prize Distribution & Closing Ceremony', venue: 'LHC Auditorium', type: 'ceremony' },
      { time: '08:00 PM', title: 'Starry Nights – Grand Finale', venue: 'Science Block Terrace', type: 'observation' },
    ],
  },
];

const typeColors = {
  ceremony: { bg: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: 'rgba(245,158,11,0.3)' },
  kss: { bg: 'rgba(16,185,129,0.1)', color: '#10b981', border: 'rgba(16,185,129,0.3)' },
  workshop: { bg: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: 'rgba(6,182,212,0.3)' },
  observation: { bg: 'rgba(236,72,153,0.1)', color: '#ec4899', border: 'rgba(236,72,153,0.3)' },
  quiz: { bg: 'rgba(124,58,237,0.1)', color: '#7c3aed', border: 'rgba(124,58,237,0.3)' },
  hunt: { bg: 'rgba(239,68,68,0.1)', color: '#ef4444', border: 'rgba(239,68,68,0.3)' },
  talk: { bg: 'rgba(99,102,241,0.1)', color: '#6366f1', border: 'rgba(99,102,241,0.3)' },
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="schedule section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Plan Your Week</span>
          <h2 className="section-title">
            Event <span className="text-gradient">Schedule</span>
          </h2>
          <p className="section-subtitle">
            Five days, packed with cosmic experiences. Pick your favourites!
          </p>
        </div>

        {/* Day Tabs */}
        <div className="schedule__tabs">
          {days.map((d, i) => (
            <button
              key={d.day}
              className={`schedule__tab ${activeDay === i ? 'schedule__tab--active' : ''}`}
              onClick={() => setActiveDay(i)}
            >
              <span className="schedule__tab-day">{d.day}</span>
              <span className="schedule__tab-date">{d.date}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="schedule__timeline">
          {days[activeDay].events.map((event, i) => {
            const color = typeColors[event.type];
            return (
              <div key={i} className="schedule__item" style={{ '--item-color': color.color }}>
                {/* Time */}
                <div className="schedule__time">{event.time}</div>

                {/* Connector */}
                <div className="schedule__connector">
                  <div className="schedule__dot" style={{ background: color.color, boxShadow: `0 0 10px ${color.color}` }} />
                  <div className="schedule__line" />
                </div>

                {/* Card */}
                <div
                  className="schedule__card glass-card"
                  style={{ background: color.bg, borderColor: color.border }}
                >
                  <div className="schedule__card-header">
                    <h3 className="schedule__card-title">{event.title}</h3>
                    <span
                      className="schedule__card-type"
                      style={{ color: color.color, background: `${color.color}15`, borderColor: color.border }}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="schedule__card-venue">
                    <span>📍</span> {event.venue}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
