import React from 'react';
import Navbar from '@/shared/Navbar/Navbar';
import Footer from '@/shared/Footer/Footer';
import Hero from '../section/Hero';
import Stats from '../section/Stats';
import LatestItems from '../section/LatestItems';
import HowItWorks from '../section/HowItWorks';

const BerandaContainer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <LatestItems />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default BerandaContainer;
