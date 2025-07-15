import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Clock, Shield, Star, Phone } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const servicesList = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Assistance with daily activities including bathing, dressing, grooming, and medication management.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Companionship",
    description: "Social interaction, conversation, and emotional support to combat loneliness and isolation.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Clock,
    title: "Respite Care",
    description: "Temporary relief for family caregivers, providing professional care when you need a break.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Live-in Care",
    description: "24-hour care support for those who need continuous assistance and monitoring.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Star,
    title: "Specialized Care",
    description: "Expert care for conditions like dementia, Alzheimer's, and other specialized needs.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Phone,
    title: "Emergency Support",
    description: "24/7 emergency response and support system for peace of mind and safety.",
    color: "from-red-500 to-pink-500"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const handleServiceClick = (service) => {
    if (service === "Personal Care") {
      navigate('/personal-care');
      return;
    }
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! check back later 🚀"
    });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care services designed to support independence and enhance quality of life in the comfort of home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className={`bg-gradient-to-r ${service.color} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;