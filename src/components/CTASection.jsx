'use client';

import { motion } from 'framer-motion';
import { RockstarScrollItem } from './ScrollAnimator';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#1a0a2a] to-[#0a0a12] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(123,31,162,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <RockstarScrollItem delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Ready to Ace Your Next OA?
            </span>
          </h2>
        </RockstarScrollItem>
        
        <RockstarScrollItem delay={0.4}>
          <p className="text-xl text-[#b8b8c5] mb-8 max-w-2xl mx-auto">
            Join thousands of students who've successfully prepared with our platform
          </p>
        </RockstarScrollItem>
        
        <RockstarScrollItem delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(123,31,162,0.7)] transition-all duration-300"
            >
              Get Started - It's Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md bg-transparent text-white border border-[#4b072f] hover:border-purple-600 hover:shadow-[0_0_15px_rgba(123,31,162,0.3)] transition-all duration-300"
            >
              Browse Question Bank
            </motion.button>
          </div>
        </RockstarScrollItem>
      </div>

      {/* Floating animated elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-xl"
        animate={{
          y: [0, 60, 0],
          x: [0, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </section>
  );
}