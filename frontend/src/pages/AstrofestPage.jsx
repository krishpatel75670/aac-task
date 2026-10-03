import StarField from '../components/StarField/StarField';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import EventsSection from '../components/EventsSection/EventsSection';
import ScheduleSection from '../components/ScheduleSection/ScheduleSection';
import SpeakersSection from '../components/SpeakersSection/SpeakersSection';
import GallerySection from '../components/GallerySection/GallerySection';
import RegistrationSection from '../components/RegistrationSection/RegistrationSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import './AstrofestPage.css';

const AstrofestPage = () => {
  return (
    <div className="astrofest-page">
      {/* Animated star background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="astrofest-main">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <SpeakersSection />
        <GallerySection />
        <RegistrationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AstrofestPage;
