import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import DeveloperFeatures from '@/components/DeveloperFeatures';
import CorePrinciples from '@/components/CorePrinciples';
import MainFeatures from '@/components/MainFeatures';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background-base overflow-x-clip">
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <LogoCloud />
        <DeveloperFeatures />
        <CorePrinciples />
        <MainFeatures />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;