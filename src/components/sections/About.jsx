import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Serene Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe everyone deserves to age with dignity and independence in the comfort of their own home. Our compassionate team is dedicated to providing exceptional care services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Care Plans</h3>
                  <p className="text-gray-600">Every client receives a customized care plan tailored to their specific needs and preferences.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualified Caregivers</h3>
                  <p className="text-gray-600">Our team consists of trained, experienced, and compassionate professionals who are passionate about care.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock support ensures peace of mind for both clients and their families.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Our Location</h4>
                  <p className="text-gray-600">59 Alers Road, Bexleyheath, DA6 8HR</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-[500px] object-cover" 
                alt="Caring team of healthcare professionals standing together"
               src="https://images.unsplash.com/photo-1666533835045-3a1b3dfc3538" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;