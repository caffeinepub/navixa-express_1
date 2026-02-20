import { Package, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onBookShipment: () => void;
  onTrackShipment: () => void;
  onContactWhatsApp: () => void;
}

export default function HeroSection({ onBookShipment, onTrackShipment, onContactWhatsApp }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x800.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-orange-900/40" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/generated/logo.dim_200x200.png" 
              alt="Navixa Express Logo" 
              className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Navixa Express
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-blue-100 font-light">
            Fast, Reliable & Transparent Courier Services
          </p>
          
          <p className="text-base md:text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
            Your trusted logistics partner for seamless shipment booking, tracking, and delivery across India
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={onBookShipment}
              size="lg"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Package className="mr-2 h-5 w-5" />
              Book Shipment
            </Button>
            
            <Button 
              onClick={onTrackShipment}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Track Shipment
            </Button>
            
            <Button 
              onClick={onContactWhatsApp}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-green-500/90 hover:bg-green-600 text-white border-2 border-green-400 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact on WhatsApp
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Package className="h-10 w-10 mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold text-lg mb-2">Easy Booking</h3>
              <p className="text-sm text-blue-100">Simple and fast shipment booking process</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold text-lg mb-2">Real-time Tracking</h3>
              <p className="text-sm text-blue-100">Track your shipments anytime, anywhere</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Shield className="h-10 w-10 mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold text-lg mb-2">Secure Delivery</h3>
              <p className="text-sm text-blue-100">Safe and reliable courier services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
