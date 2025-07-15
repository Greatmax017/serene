import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Commitment to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Serene Touch, we are driven by a clear mission and a compelling vision for the future of home care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 p-10 rounded-3xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide exceptional, compassionate, and personalized home care services that enhance the quality of life for our clients, enabling them to live with dignity, independence, and comfort in their own homes. We are committed to building trusting relationships with clients and their families through reliability, respect, and unwavering dedication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 p-10 rounded-3xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4 rounded-full">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading and most trusted home care provider in our community, recognized for our excellence in service, our compassionate caregivers, and our innovative approach to care. We envision a future where every individual has access to high-quality home care that supports their well-being and empowers them to live their best life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;