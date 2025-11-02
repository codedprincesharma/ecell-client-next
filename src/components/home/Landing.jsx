'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';



const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden to-slate-900 px-4 md:px-8 lg:px-12 py-16">
      {/* Animated Background Particles */}
      

      {/* Subtle Radial Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 to-transparent blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
              Innovation
            </span>
            <span className="block text-white">
              <span className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Starts
              </span>{' '}
              with{' '}
              <span className="inline-block relative">
                <span className="relative z-10 text-white">You</span>
                <motion.span
                  className="absolute inset-0 blur-xl bg-blue-500 opacity-70"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0.4, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              .
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-blue-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            We’re not just building the future —{' '}
            <span className="font-semibold text-cyan-300">we’re accelerating it</span> with
            visionaries like you.
          </motion.p>
        </motion.div>

        {/* CTA Button with 3D Tilt & Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex justify-center"
          style={{
            perspective: '1000px',
          }}
        >
          <Link href="/event" className="group">
            <motion.div
              className="relative inline-block"
              style={{
                transform: `rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.02}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.02}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-2xl overflow-hidden">
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  animate={{ x: [-300, 300] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />

                <span className="relative z-10 text-white font-bold text-lg tracking-wide">
                  Explore Events
                </span>

                {/* Bottom Glow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-blue-500/50 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-300"
        >
          <span>50+ Breakthrough Events</span>
          <span className="hidden sm:block">•</span>
          <span>10,000+ Innovators</span>
          <span className="hidden sm:block">•</span>
          <span>Global Impact</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landing;