import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to learn more about our care services? Contact us today for a free consultation and personalized care assessment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">59 Alers Road, Bexleyheath, DA6 8HR</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">Send us your questions anytime</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Hours</h3>
                  <p className="text-gray-600">24/7 Care Support Available</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleContactClick}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <img 
                className="w-full h-full object-cover" 
                alt="Modern and welcoming reception area of Serene Touch Care Services"
               src="https://images.unsplash.com/photo-1663747638247-f2317493492c" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;