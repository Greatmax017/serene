
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/views/HomePage';
import AboutPage from '@/views/AboutPage';
import ContactPage from '@/views/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import PersonalCare from './views/Services.jsx/PersonalCare';
import General from './components/layout/General';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        
        <Routes>
          <Route  element={<General />}>

          
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/personal-care" element={<PersonalCare />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
