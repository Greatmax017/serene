import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ContactFormSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 📬",
      description: "Thank you for reaching out. We'll get back to you shortly!",
    });
    e.target.reset();
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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions. Fill out the form below or use our contact details to reach us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Free Consultation Inquiry" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us how we can help..." required rows={5} />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 mt-1">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">59 Alers Road, Bexleyheath, DA6 8HR</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 mt-1">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">020 1234 5678 </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 mt-1">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@serenetouch.co.uk </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 mt-1">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">24/7 Care Support Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;