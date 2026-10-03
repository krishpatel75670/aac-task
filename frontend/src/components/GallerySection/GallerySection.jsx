import './GallerySection.css';

// Space-themed gradient placeholder images using CSS
const galleryItems = [
  { id: 1, label: 'Starry Nights 2024', gradient: 'linear-gradient(135deg, #0a0a2e, #1e1b4b, #312e81)', icon: '🌠' },
  { id: 2, label: 'Astroquiz Finals', gradient: 'linear-gradient(135deg, #1e1b4b, #7c3aed, #4c1d95)', icon: '🧠' },
  { id: 3, label: 'Telescope Session', gradient: 'linear-gradient(135deg, #0c4a6e, #0284c7, #38bdf8)', icon: '🔭' },
  { id: 4, label: 'Astrophotography', gradient: 'linear-gradient(135deg, #1c1917, #57534e, #a8a29e)', icon: '📸' },
  { id: 5, label: 'Treasure Hunt 2024', gradient: 'linear-gradient(135deg, #422006, #92400e, #f59e0b)', icon: '🗺️' },
  { id: 6, label: 'KSS Speaker Talk', gradient: 'linear-gradient(135deg, #042f2e, #065f46, #10b981)', icon: '💡' },
  { id: 7, label: 'Club Members', gradient: 'linear-gradient(135deg, #4a044e, #86198f, #e879f9)', icon: '👨‍🚀' },
  { id: 8, label: 'Observatory View', gradient: 'linear-gradient(135deg, #0f172a, #1e3a5f, #3b82f6)', icon: '🌌' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Memories</span>
          <h2 className="section-title">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Relive the magic of past Astrofest editions. Every event, every moment captured.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery__item ${i === 0 ? 'gallery__item--wide' : ''} ${i === 5 ? 'gallery__item--tall' : ''}`}
            >
              {/* Placeholder gradient card */}
              <div className="gallery__img-placeholder" style={{ background: item.gradient }}>
                <span className="gallery__placeholder-icon">{item.icon}</span>
              </div>

              {/* Overlay */}
              <div className="gallery__overlay">
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__cta-row">
          <a
            href="https://www.instagram.com/aac.nitk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View More on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
