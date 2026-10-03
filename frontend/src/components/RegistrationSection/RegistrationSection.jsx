import { useState } from 'react';
import './RegistrationSection.css';

const events = [
  { id: 'astroquiz', label: 'Astroquiz 🧠' },
  { id: 'treasure-hunt', label: 'Space Treasure Hunt 🗺️' },
  { id: 'astrophotography', label: 'Astrophotography Workshop 📸' },
  { id: 'starry-nights', label: 'Starry Nights 🌠' },
  { id: 'kss', label: 'Knowledge Sharing Sessions 💡' },
];

const initialForm = {
  fullName: '',
  email: '',
  rollNumber: '',
  phone: '',
  branch: '',
  year: '',
  events: [],
  teamName: '',
  experience: '',
  agreeTerms: false,
};

const RegistrationSection = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleEventToggle = (eventId) => {
    setForm(prev => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter(e => e !== eventId)
        : [...prev.events, eventId],
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.rollNumber.trim()) newErrors.rollNumber = 'Roll number is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) newErrors.phone = 'Valid 10-digit phone required';
    if (!form.branch) newErrors.branch = 'Branch is required';
    if (!form.year) newErrors.year = 'Year is required';
    if (form.events.length === 0) newErrors.events = 'Select at least one event';
    if (!form.agreeTerms) newErrors.agreeTerms = 'You must agree to terms';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const res = await fetch(`${apiBase}/api/v1/registrations/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        // Show server-side error (e.g. duplicate email/roll)
        setErrors({ submit: json.detail || 'Registration failed. Please try again.' });
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setErrors({ submit: 'Could not reach the server. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="registration section-padding">
        <div className="container">
          <div className="registration__success glass-card">
            <div className="registration__success-icon">🎉</div>
            <h2 className="registration__success-title">You're Registered!</h2>
            <p className="registration__success-text">
              Welcome to Astrofest 2025, <strong>{form.fullName}</strong>! <br />
              A confirmation email has been sent to <strong>{form.email}</strong>.
            </p>
            <p className="registration__success-events">
              Events registered: {form.events.map(id => events.find(e => e.id === id)?.label).join(', ')}
            </p>
            <button className="btn-primary" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
              Register Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="registration section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Join Us</span>
          <h2 className="section-title">
            Register for <span className="text-gradient">Astrofest</span>
          </h2>
          <p className="section-subtitle">
            Secure your spot in this cosmic celebration. Registration is free for all NITK students.
          </p>
        </div>

        <div className="registration__wrapper">
          {/* Left: Info Panel */}
          <div className="registration__info">
            <div className="reg-info-card glass-card">
              <h3 className="reg-info-card__title">Why Register?</h3>
              <ul className="reg-info-card__list">
                {[
                  { icon: '🎟️', text: 'Free entry to all events' },
                  { icon: '🏆', text: 'Win exciting prizes' },
                  { icon: '📜', text: 'Participation certificates' },
                  { icon: '🎓', text: 'Learn from expert speakers' },
                  { icon: '🌟', text: 'Stargazing sessions' },
                  { icon: '🤝', text: 'Network with astronomy enthusiasts' },
                ].map(({ icon, text }) => (
                  <li key={text} className="reg-info-card__item">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reg-info-card glass-card">
              <h3 className="reg-info-card__title">Important Dates</h3>
              <div className="reg-dates">
                <div className="reg-date-item">
                  <span className="reg-date-label">Registration Deadline</span>
                  <span className="reg-date-value text-gradient">Feb 1, 2025</span>
                </div>
                <div className="reg-date-item">
                  <span className="reg-date-label">Event Starts</span>
                  <span className="reg-date-value text-gradient">Feb 3, 2025</span>
                </div>
                <div className="reg-date-item">
                  <span className="reg-date-label">Venue</span>
                  <span className="reg-date-value">NITK Surathkal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="registration__form glass-card" onSubmit={handleSubmit} noValidate>
            <h3 className="registration__form-title">Registration Form</h3>

            <div className="form__grid">
              {/* Full Name */}
              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`form__input ${errors.fullName ? 'form__input--error' : ''}`}
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span className="form__error">{errors.fullName}</span>}
              </div>

              {/* Email */}
              <div className="form__field">
                <label className="form__label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form__input ${errors.email ? 'form__input--error' : ''}`}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="form__error">{errors.email}</span>}
              </div>

              {/* Roll Number */}
              <div className="form__field">
                <label className="form__label" htmlFor="rollNumber">Roll Number *</label>
                <input
                  id="rollNumber"
                  name="rollNumber"
                  type="text"
                  className={`form__input ${errors.rollNumber ? 'form__input--error' : ''}`}
                  placeholder="e.g. 221CS001"
                  value={form.rollNumber}
                  onChange={handleChange}
                />
                {errors.rollNumber && <span className="form__error">{errors.rollNumber}</span>}
              </div>

              {/* Phone */}
              <div className="form__field">
                <label className="form__label" htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={`form__input ${errors.phone ? 'form__input--error' : ''}`}
                  placeholder="10-digit number"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="form__error">{errors.phone}</span>}
              </div>

              {/* Branch */}
              <div className="form__field">
                <label className="form__label" htmlFor="branch">Branch *</label>
                <select
                  id="branch"
                  name="branch"
                  className={`form__input form__select ${errors.branch ? 'form__input--error' : ''}`}
                  value={form.branch}
                  onChange={handleChange}
                >
                  <option value="">Select branch</option>
                  {['CS', 'IT', 'EC', 'EE', 'ME', 'CE', 'CH', 'BT', 'MA', 'PH', 'Other'].map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                {errors.branch && <span className="form__error">{errors.branch}</span>}
              </div>

              {/* Year */}
              <div className="form__field">
                <label className="form__label" htmlFor="year">Year of Study *</label>
                <select
                  id="year"
                  name="year"
                  className={`form__input form__select ${errors.year ? 'form__input--error' : ''}`}
                  value={form.year}
                  onChange={handleChange}
                >
                  <option value="">Select year</option>
                  {['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year / PG'].map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                {errors.year && <span className="form__error">{errors.year}</span>}
              </div>

              {/* Team Name (optional) */}
              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="teamName">Team Name <span className="form__label-optional">(optional – for team events)</span></label>
                <input
                  id="teamName"
                  name="teamName"
                  type="text"
                  className="form__input"
                  placeholder="Enter team name"
                  value={form.teamName}
                  onChange={handleChange}
                />
              </div>

              {/* Events selection */}
              <div className="form__field form__field--full">
                <label className="form__label">Events to Register *</label>
                <div className="form__events-grid">
                  {events.map(event => (
                    <label
                      key={event.id}
                      className={`form__event-option ${form.events.includes(event.id) ? 'form__event-option--selected' : ''}`}
                    >
                      <input
                        type="checkbox"
                        className="form__event-checkbox"
                        checked={form.events.includes(event.id)}
                        onChange={() => handleEventToggle(event.id)}
                      />
                      <span>{event.label}</span>
                    </label>
                  ))}
                </div>
                {errors.events && <span className="form__error">{errors.events}</span>}
              </div>

              {/* Experience */}
              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="experience">Astronomy Experience <span className="form__label-optional">(optional)</span></label>
                <textarea
                  id="experience"
                  name="experience"
                  className="form__input form__textarea"
                  placeholder="Tell us about your interest in astronomy..."
                  value={form.experience}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              {/* Terms */}
              <div className="form__field form__field--full">
                <label className={`form__checkbox-label ${errors.agreeTerms ? 'form__checkbox-label--error' : ''}`}>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    className="form__checkbox"
                    checked={form.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>I agree to the event terms and conditions and consent to being contacted about Astrofest 2025.</span>
                </label>
                {errors.agreeTerms && <span className="form__error">{errors.agreeTerms}</span>}
              </div>
            </div>

            {/* Submit-level error */}
            {errors.submit && (
              <div className="form__error form__error--block">{errors.submit}</div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={`btn-primary form__submit ${loading ? 'form__submit--loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="form__spinner" />
                  Registering...
                </>
              ) : (
                'Register Now 🚀'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
