'use client';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { RockstarScrollItem, RockstarScrollSection } from './ScrollAnimator';

// ===== Three.js Floating Particles Background =====
function FloatingParticles(props) {
  const particlesRef = useRef();
  const { scrollYProgress } = useScroll();

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += delta * 0.1;
      particlesRef.current.rotation.y += delta * 0.12;
      // Particles move slightly on scroll
      particlesRef.current.position.y = scrollYProgress.get() * -2;
    }
  });

  return (
    <Points ref={particlesRef} {...props}>
      <PointMaterial
        transparent
        color="#FF00FF"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// ===== Main Hero Section =====
export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.3, 0]);

  // Text animations
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.8]);

  return (
    <RockstarScrollSection 
      ref={ref}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0618] to-[#000000] overflow-hidden"
    >
      {/* Three.js Particles Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <FloatingParticles
            count={5000}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </Canvas>
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,_rgba(255,0,255,0.1)_0%,_transparent_70%)]" />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{
          scale: scaleText,
          y: yText,
          opacity: opacityText,
        }}
      >
        <RockstarScrollItem delay={0}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            MASTER OAs
          </motion.h1>
        </RockstarScrollItem>
        
        <RockstarScrollItem delay={0.2}>
          <motion.p 
            className="text-xl md:text-2xl text-[#b8b8c5] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Crush tech interviews with <span className="text-cyan-300">the hottest</span> OA questions.
          <br /> <span className="text-pink-300">#NoCap</span>.
          </motion.p>
        </RockstarScrollItem>
        
        <RockstarScrollItem delay={0.4}>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              Browse Companies
            </motion.button>
          </motion.div>
        </RockstarScrollItem>
      </motion.div>
    </RockstarScrollSection>
  );
}