import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Phone, Shield, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const slides = [
  {
    image: "A professional caregiver compassionately assisting an elderly client at home",
    alt: "Professional caregiver assisting elderly client",
    title: "Personal Care Services",
    description: "Assistance with daily activities including bathing, dressing, grooming, and medication management to maintain dignity and independence.",
    image_path: "/realistic-scene-with-elderly-care-senior-people.jpg"
  },
  {
    image: "A cheerful caregiver and senior woman sharing a laugh in a sunlit living room",
    alt: "Caregiver providing companionship to a senior",
    title: "Companionship Care",
    description: "Social interaction, conversation, and emotional support to combat loneliness and enhance quality of life for seniors.",
    image_path: "/african-social-worker-helping-senior-woman.jpg"
  },
  {
    image: "A nurse providing specialized medical care to a patient in their home",
    alt: "Nurse providing specialized home care",
    title: "Specialized Care",
    description: "Expert care for conditions like dementia, Alzheimer's, and other specialized health needs with trained professionals.",
    image_path: "/giving-warm-plaid-caring-curly-nurse-wearing-uniform-giving-warm-plaid-patient-after-catching-cold.jpg"
  },
  {
    image: "An elderly person receiving relaxing respite care from a professional",
    alt: "Senior receiving respite care",
    title: "Respite Care",
    description: "Temporary relief for family caregivers, providing professional care when you need a break or time away.",
    image_path: "/african-social-worker-helping-senior-woman.jpg"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);
  
  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! check back later 🚀"
    });
  };

  const handleServiceClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! check back later 🚀"
    });
  };

  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] overflow-hidden text-white">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            className="w-full h-full object-cover"
            alt={slides[currentSlide].alt}
           src={slides[currentSlide].image_path} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Heart className="h-5 w-5 text-purple-300" />
                <span className="font-medium">Compassionate Care</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                Professional
                <span className="block text-purple-300">
                  Home Care
                </span>
                Services
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed drop-shadow-md max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleServiceClick}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-purple-300" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-300" />
                <span className="font-medium">Fully Insured</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
        <button onClick={prevSlide} className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-purple-400' : 'w-4 bg-white/50 hover:bg-white/80'}`}></button>
          ))}
        </div>
        <button onClick={nextSlide} className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl hidden lg:block"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3">
            <Star className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-white">5-Star Rated</p>
            <p className="text-sm text-gray-200">Trusted by families</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;