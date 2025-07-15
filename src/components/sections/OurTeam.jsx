import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ivy Johnson',
    role: 'Founder & CEO',
    image: 'A confident woman in business attire smiling warmly',
    bio: 'With over 20 years of experience in healthcare management, Jane founded Serene Touch with a passion for providing dignified care.',
    image_path: '/ivy.jpg',
  },
  {
    name: 'Amen Eribo',
    role: 'Head of Care Operations',
    image: 'A friendly man in a polo shirt standing in a modern office',
    bio: 'John ensures that every client receives the highest standard of care by managing our team of dedicated caregivers.',
    image_path: 'https://images.unsplash.com/photo-1557862921-37829c790f19',
  },
  {
    name: 'Emily White',
    role: 'Client Relations Manager',
    image: 'A cheerful young woman with a headset, ready to assist clients',
    bio: 'Emily is the friendly voice that connects our clients with the perfect care plan, ensuring a seamless and supportive experience.',
    image_path: 'https://images.unsplash.com/photo-1557862921-37829c790f19',
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Dedicated Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The compassionate professionals behind our commitment to exceptional care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center group"
            >
              <div className="relative h-64">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  alt={member.image}
                 src={member.image_path} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-300 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;