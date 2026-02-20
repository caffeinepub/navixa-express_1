import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';
import TrackShipmentModal from './components/TrackShipmentModal';
import Footer from './components/Footer';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const handleBookShipment = () => {
    setIsBookingModalOpen(true);
  };

  const handleTrackShipment = () => {
    setIsTrackingModalOpen(true);
  };

  const handleContactWhatsApp = () => {
    const message = encodeURIComponent('Hello Navixa Express, I would like to know more about your services.');
    window.open(`https://wa.me/918530661581?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        onBookShipment={handleBookShipment}
        onTrackShipment={handleTrackShipment}
        onContactWhatsApp={handleContactWhatsApp}
      />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      
      <TrackShipmentModal 
        isOpen={isTrackingModalOpen} 
        onClose={() => setIsTrackingModalOpen(false)} 
      />
    </div>
  );
}

export default App;
