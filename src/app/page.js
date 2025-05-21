'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import CompanyShowcase from '@/components/CompanyShowcase';
import QuestionsSection from '@/components/QuestionsSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';


export default function Home() {
  const [currentCompany, setCurrentCompany] = useState('Google');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      <Nav />
      <HeroSection />
      <CompanyShowcase 
        currentCompany={currentCompany} 
        setCurrentCompany={setCurrentCompany} 
      />
      <QuestionsSection 
        currentCompany={currentCompany} 
        isLoading={isLoading} 
      />
      <StatsSection/>
      <CTASection/>
      <Footer/>
      
    </div>
      
  );
}