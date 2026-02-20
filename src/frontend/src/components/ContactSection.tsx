import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-900">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="tel:9518715580"
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 group"
            >
              <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                <p className="text-blue-700 font-medium">9518715580</p>
              </div>
            </a>
            
            <a 
              href="https://wa.me/918530661581"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-400 group"
            >
              <div className="bg-green-600 p-3 rounded-lg group-hover:bg-green-700 transition-colors">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-green-700 font-medium">8530661581</p>
              </div>
            </a>
            
            <a 
              href="mailto:navixaexpress@gmail.com"
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300 border border-orange-200 hover:border-orange-400 group"
            >
              <div className="bg-orange-600 p-3 rounded-lg group-hover:bg-orange-700 transition-colors">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                <p className="text-orange-700 font-medium break-all">navixaexpress@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="bg-blue-600 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">Address</h3>
                <p className="text-gray-700">Dehu, Pune, Maharashtra – 412109</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
