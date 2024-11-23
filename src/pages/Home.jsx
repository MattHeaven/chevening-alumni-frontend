import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ObjectivesSection from '../components/Objectives';
import OurServices from '../components/ServicesSection';
import OurPartners from '../components/Partners';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ObjectivesSection />
        <OurServices />
        <OurPartners />
        <Footer />

    </>
  )
}

export default Home