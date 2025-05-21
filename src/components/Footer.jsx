'use client';

import { motion } from 'framer-motion';
import { RockstarScrollItem } from './ScrollAnimator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-8 bg-[#11111f] border-t border-[#2e2e3a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <RockstarScrollItem delay={0.1}>
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-2">
                <span className="text-white font-mono font-bold text-xs">OA</span>
              </div>
              <span className="text-xl font-mono font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                PYQhub
              </span>
            </div>
            <p className="text-sm text-[#b8b8c5]">
              The ultimate resource for mastering company online assessments
            </p>
          </div>
        </RockstarScrollItem>

        {/* Resources links */}
        <RockstarScrollItem delay={0.2}>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-[#b8b8c5] hover:text-white transition flex items-center"
                >
                  <span className="mr-2">→</span> Question Bank
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-[#b8b8c5] hover:text-white transition flex items-center"
                >
                  <span className="mr-2">→</span> Company Guides
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-[#b8b8c5] hover:text-white transition flex items-center"
                >
                  <span className="mr-2">→</span> Study Plans
                </motion.a>
              </li>
            </ul>
          </div>
        </RockstarScrollItem>

        {/* Company links */}
        <RockstarScrollItem delay={0.3}>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-[#b8b8c5] hover:text-white transition flex items-center"
                >
                  <span className="mr-2">→</span> About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-[#b8b8c5] hover:text-white transition flex items-center"
                >
                  <span className="mr-2">→</span> Contribute
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-[#b8b8c5] hover:text-white transition flex items-center"
                >
                  <span className="mr-2">→</span> Careers
                </motion.a>
              </li>
            </ul>
          </div>
        </RockstarScrollItem>

        {/* Connect section */}
        <RockstarScrollItem delay={0.4}>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-[#b8b8c5] hover:text-purple-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-[#b8b8c5] hover:text-blue-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-[#b8b8c5] hover:text-indigo-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>
            <p className="text-sm text-[#b8b8c5]">
              © {currentYear}PYQhub. All rights reserved.
            </p>
          </div>
        </RockstarScrollItem>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </footer>
  );
}