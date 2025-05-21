'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './ScrollAnimator';

export default function QuestionsSection({ currentCompany, isLoading }) {
  const [activeTab, setActiveTab] = useState('trending');
  
  const questions = {
    trending: [
      { id: 1, title: 'Binary Tree Maximum Path Sum', frequency: '85%', difficulty: 'Hard' },
      { id: 2, title: 'LRU Cache', frequency: '78%', difficulty: 'Medium' },
      { id: 3, title: 'Merge Intervals', frequency: '72%', difficulty: 'Medium' },
    ],
    newest: [
      { id: 4, title: 'Design Underground System', frequency: '65%', difficulty: 'Medium' },
      { id: 5, title: 'Minimum Window Substring', frequency: '58%', difficulty: 'Hard' },
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#1a1a26] border-t border-b border-[#2e2e3a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold">
              {currentCompany} OA Questions
            </h2>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper>
            <div className="flex border border-[#4b072f] rounded-md overflow-hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('trending')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'trending' 
                    ? 'bg-[#2a0a36] text-white' 
                    : 'bg-transparent text-[#b8b8c5] hover:bg-[#1e1e2a]'
                }`}
              >
                Most Frequent
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('newest')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'newest' 
                    ? 'bg-[#2a0a36] text-white' 
                    : 'bg-transparent text-[#b8b8c5] hover:bg-[#1e1e2a]'
                }`}
              >
                Recently Asked
              </motion.button>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {isLoading ? (
          <div className="grid gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="h-16 bg-[#2e2e3a] rounded-md animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-4">
            {questions[activeTab].map((question, index) => (
              <ScrollAnimationWrapper key={question.id}>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="p-5 rounded-lg bg-[#22222e] border border-[#2e2e3a] hover:border-purple-500 hover:shadow-[0_0_10px_rgba(123,31,162,0.3)] transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{question.title}</h3>
                    <div className="flex gap-3">
                      <span className="text-sm px-3 py-1 bg-[#2a0a36] rounded-full">
                        {question.frequency} asked
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        question.difficulty === 'Hard' ? 'bg-red-900 text-red-300' : 
                        question.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' : 
                        'bg-green-900 text-green-300'
                      }`}>
                        {question.difficulty}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}