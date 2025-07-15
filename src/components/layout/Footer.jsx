import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/903f55aa-d7cb-404b-9401-efbbcd490653/77b4d75948ad207d0f5e3fc2f26b63f8.jpg" 
                alt="Serene Touch Care Services Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-lg font-bold text-purple-400">Serene Touch</span>
                <p className="text-sm text-green-400 font-medium">Care Services</p>
              </div>
            </div>
            <p className="text-gray-300">
              Providing compassionate, professional home care services with dignity and respect.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#services" className="block text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-2">
              <p className="text-gray-300">59 Alers Road</p>
              <p className="text-gray-300">Bexleyheath, DA6 8HR</p>
              <p className="text-gray-300">24/7 Support Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Serene Touch Care Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;