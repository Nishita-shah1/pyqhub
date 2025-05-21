'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './ScrollAnimator';

export default function CompanyShowcase({ currentCompany, setCurrentCompany }) {
  const companies = [
    { name: 'Google', logo: '/google-logo.png', difficulty: 'Hard' },
    { name: 'Amazon', logo: '/amazon-logo.png', difficulty: 'Medium' },
    { name: 'Microsoft', logo: '/microsoft-logo.png', difficulty: 'Medium' },
    { name: 'Meta', logo: '/meta-logo.png', difficulty: 'Hard' },
    { name: 'Apple', logo: '/apple-logo.png', difficulty: 'Hard' },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <ScrollAnimationWrapper>
        <h2 className="text-3xl font-bold mb-2 text-center">Top Companies</h2>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <p className="text-[#b8b8c5] text-center mb-12 max-w-2xl mx-auto">
          Select a company to view their most frequently asked OA questions
        </p>
      </ScrollAnimationWrapper>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
        {companies.map((company, index) => (
          <ScrollAnimationWrapper key={company.name}>
            <motion.div 
              onClick={() => setCurrentCompany(company.name)}
              whileHover={{ y: -5 }}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                currentCompany === company.name 
                  ? 'border-purple-500 bg-[#2a0a36] shadow-[0_0_15px_rgba(123,31,162,0.5)]' 
                  : 'border-[#2e2e3a] hover:border-purple-300 hover:bg-[#1e1e2a]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3 bg-white rounded-full flex items-center justify-center p-2">
                  <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold">{company.name}</h3>
                <span className={`text-xs mt-1 px-2 py-1 rounded-full ${
                  company.difficulty === 'Hard' ? 'bg-red-900 text-red-300' : 
                  company.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' : 
                  'bg-green-900 text-green-300'
                }`}>
                  {company.difficulty}
                </span>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </section>
  );
}