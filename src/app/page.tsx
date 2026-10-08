import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import PropertiesSection from './components/PropertiesSection';
import ServicesSection from './components/ServicesSection';
import StatsBar from './components/StatsBar';
import TestimonialCTA from './components/TestimonialCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PropertiesSection />
        <ServicesSection />
        <StatsBar />
        <TestimonialCTA />
      </main>
      <Footer />
    </>
  );
}
