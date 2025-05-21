'use client';

import { motion } from 'framer-motion';
import { RockstarScrollItem } from './ScrollAnimator';

const stats = [
  { value: '95%', label: 'Accuracy', color: 'from-purple-500 to-purple-300' },
  { value: '50+', label: 'Companies', color: 'from-blue-500 to-blue-300' },
  { value: '10k+', label: 'Questions', color: 'from-pink-500 to-pink-300' }
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <RockstarScrollItem>
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Why Our Platform?
          </span>
        </h2>
      </RockstarScrollItem>
      
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {stats.map((stat, index) => (
          <RockstarScrollItem key={stat.label} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-[#1a1a26] border border-[#2e2e3a] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(123,31,162,0.3)] transition-all duration-300"
            >
              <div className={`text-4xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold`}>
                {stat.value}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-[#b8b8c5]">
                {stat.label === 'Accuracy' && 'Our questions are verified by recent interviewees to ensure accuracy'}
                {stat.label === 'Companies' && 'Comprehensive coverage of top tech companies and startups'}
                {stat.label === 'Questions' && 'The largest collection of verified OA questions with solutions'}
              </p>
            </motion.div>
          </RockstarScrollItem>
        ))}
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-purple-900 opacity-20 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-blue-900 opacity-20 blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
}