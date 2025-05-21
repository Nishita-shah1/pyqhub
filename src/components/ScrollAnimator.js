'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

// Basic scroll animation wrapper
export const ScrollAnimationWrapper = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Rockstar-style scroll hook
const useRockstarScroll = (targetRef) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const yPosAnim = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scaleAnim = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return { yPosAnim, opacityAnim, scaleAnim };
};

// Rockstar-style scroll section
export const RockstarScrollSection = ({ children, className, speed = 1 }) => {
  const ref = useRef(null);
  const { yPosAnim, opacityAnim, scaleAnim } = useRockstarScroll(ref);

  return (
    <motion.section
      ref={ref}
      style={{
        y: yPosAnim,
        opacity: opacityAnim,
        scale: scaleAnim,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Rockstar-style scroll item
export const RockstarScrollItem = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: delay * 0.2, ease: [0.16, 1, 0.3, 1] }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect component
export const ParallaxElement = ({ children, speed = 1, className, id }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        ref.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
};