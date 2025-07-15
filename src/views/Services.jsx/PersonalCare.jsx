import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Users, CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const personalCareServices = [
  {
    icon: Heart,
    title: "Bathing & Personal Hygiene",
    description: "Respectful assistance with bathing, showering, oral care, and maintaining personal cleanliness."
  },
  {
    icon: Users,
    title: "Dressing & Grooming",
    description: "Help with selecting appropriate clothing, dressing, hair care, and maintaining personal appearance."
  },
  {
    icon: Shield,
    title: "Medication Management",
    description: "Assistance with medication reminders, organization, and ensuring proper medication adherence."
  },
  {
    icon: Clock,
    title: "Mobility Support",
    description: "Safe assistance with walking, transferring, and moving around the home to prevent falls."
  }
];

const benefits = [
  "Maintain dignity and independence at home",
  "Trained and certified caregivers",
  "Flexible scheduling to meet your needs",
  "Personalized care plans",
  "Family communication and updates",
  "24/7 emergency support available"
];

const PersonalCare = () => {
    const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleCallClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover"
            alt="Professional caregiver providing personal care assistance"
            src="/2150829771.jpg" 
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
                <span className="font-medium">Personal Care Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Dignified
                <span className="block text-purple-300">Personal Care</span>
                at Home
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Professional assistance with daily activities to help you maintain independence, 
                dignity, and comfort in your own home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                Comprehensive Personal Care Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our personal care services are designed to help you or your loved one maintain 
                independence while receiving the support needed for daily activities. Our trained 
                caregivers provide respectful, compassionate assistance that preserves dignity 
                and promotes well-being.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span className="font-medium text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-purple-400" />
                  <span className="font-medium text-gray-700">5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-300" />
                  <span className="font-medium text-gray-700">Flexible Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-purple-300" />
                  <span className="font-medium text-gray-700">Compassionate Care</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Personal Care <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored assistance for your specific needs, delivered with respect and professionalism.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {personalCareServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              Contact us today for a free consultation and personalized care plan. 
              Our team is ready to help you maintain independence and quality of life at home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                size="lg"
                className="border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">24/7 Support</h3>
                <p className="text-pink-100">Available when you need us</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Licensed & Insured</h3>
                <p className="text-pink-100">Fully certified professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Compassionate Care</h3>
                <p className="text-pink-100">Treating you like family</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PersonalCare;