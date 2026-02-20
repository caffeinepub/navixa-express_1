import { Users, Zap, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            About Navixa Express
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Navixa Express supports small businesses and eCommerce sellers with fast, reliable, and transparent courier services. 
            We have successfully helped <span className="font-bold text-orange-600">50+ happy customers</span> grow their businesses 
            with our dedicated logistics solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Small Business Support</h3>
              <p className="text-gray-600">
                Empowering small businesses and eCommerce sellers with reliable logistics
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
              <Award className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">50+ Happy Customers</h3>
              <p className="text-gray-600">
                Trusted by businesses across India for their shipping needs
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <Zap className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast & Transparent</h3>
              <p className="text-gray-600">
                Quick delivery with complete transparency throughout the process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
