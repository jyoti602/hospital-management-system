import React from 'react';
import HeroSection from './HeroSection';
import ServiceCardsSection from './ServiceCardsSection';
import AboutUsSection from './AboutUsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import VisionAndTeamSection from './VisionAndTeamSection';
import TestimonialsSection from './TestimonialsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceCardsSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <VisionAndTeamSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;

