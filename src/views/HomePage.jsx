
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';

import AboutSummary from '@/components/sections/AboutSummary';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Hero from '../components/sections/Hero';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Serene Touch Care Services - Compassionate Home Care</title>
        <meta name="description" content="Serene Touch Care Services offers professional and compassionate home care services in Bexleyheath. Personalized care plans to support your loved ones." />
      </Helmet>
     
      <main>
        <Hero />
        <AboutSummary />
        <Services />
        <Testimonials />
      </main>

    </>
  );
};

export default HomePage;
