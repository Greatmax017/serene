import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MissionVision from '@/components/sections/MissionVision';
import { Button } from '@/components/ui/button';
import OurTeam from '@/components/sections/OurTeam';
import { toast } from '@/components/ui/use-toast';
import { MapPin, CheckCircle, Heart, Shield, Users, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
    
  };

  const handleCallClick = () => {
    navigate('/contact');
  };
  return (
    <>
      <Helmet>
        <title>About Us - Serene Touch Care Services</title>
        <meta name="description" content="Learn about the mission, vision, and dedicated team at Serene Touch Care Services. Discover our commitment to providing compassionate home care." />
      </Helmet>
      
      <main>
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover"
            alt="Professional healthcare team providing compassionate care"
            src="/african-social-worker-helping-senior-woman.jpg" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Heart className="h-5 w-5 text-purple-300" />
                <span className="font-medium">About Serene Touch</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Compassionate Care
                <span className="block text-purple-300">You Can Trust</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Dedicated to providing exceptional home care services with dignity, respect, 
                and the highest standards of professional care for over a decade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center space-x-8"
        >
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-green-300" />
            <span className="font-medium text-sm">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="h-5 w-5 text-purple-300" />
            <span className="font-medium text-sm">10+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Heart className="h-5 w-5 text-purple-300" />
            <span className="font-medium text-sm">Family Owned</span>
          </div>
        </motion.div>
      </section>
        <MissionVision />
        <OurTeam />
      </main>
     
    </>
  );
};

export default AboutPage;