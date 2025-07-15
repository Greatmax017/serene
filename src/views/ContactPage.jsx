import React from 'react';
import { Helmet } from 'react-helmet';
import ContactFormSection from '@/components/sections/ContactFormSection';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Serene Touch Care Services</title>
        <meta name="description" content="Get in touch with Serene Touch Care Services. Contact us for a free consultation or to inquire about our home care services. We're here to help." />
      </Helmet>
      
      <main>
        <ContactFormSection />
      </main>
     
    </>
  );
};

export default ContactPage;