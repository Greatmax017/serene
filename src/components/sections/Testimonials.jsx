import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    relation: 'Daughter of a Client',
    avatar: 'A happy, middle-aged woman smiling warmly',
    quote: "The care and compassion Serene Touch provided for my mother was outstanding. The caregivers were professional, kind, and truly treated her like family. I can't thank them enough.",
  },
  {
    name: 'Michael B.',
    relation: 'Client',
    avatar: 'A cheerful elderly man sitting in a comfortable armchair',
    quote: 'Having a companion from Serene Touch has made a huge difference in my life. It’s wonderful to have someone to talk to and help with daily tasks. I feel much less lonely now.',
  },
  {
    name: 'The Thompson Family',
    relation: 'Family of a Client',
    avatar: 'A multi-generational family posing together outdoors',
    quote: "We used Serene Touch for respite care and were so impressed. It gave us peace of mind knowing our father was in such good hands. We highly recommend their services.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the experiences of families who have trusted us with their loved ones' care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg flex flex-col"
            >
              <Quote className="w-10 h-10 text-purple-300 mb-4" />
              <p className="text-gray-700 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    <img  className="w-full h-full object-cover" alt={testimonial.avatar} src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.relation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;