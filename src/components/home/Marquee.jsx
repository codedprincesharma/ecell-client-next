'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://ik.imagekit.io/qlynnooa4/1747298421226.jpeg?updatedAt=1753990135899",
  "https://ik.imagekit.io/qlynnooa4/1747468181392.jpeg?updatedAt=1753990135861",
  "https://ik.imagekit.io/qlynnooa4/1747468181849.jpeg?updatedAt=1753990135863",
  "https://ik.imagekit.io/qlynnooa4/1735364989852.jpeg?updatedAt=1753990135831",
  "https://ik.imagekit.io/qlynnooa4/1747468181594.jpeg?updatedAt=1753990135766",
  "https://ik.imagekit.io/qlynnooa4/1747298421226.jpeg?updatedAt=1753990135899",
  "https://ik.imagekit.io/qlynnooa4/1747468181392.jpeg?updatedAt=1753990135861",
  "https://ik.imagekit.io/qlynnooa4/1747468181849.jpeg?updatedAt=1753990135863",
  "https://ik.imagekit.io/qlynnooa4/1735364989852.jpeg?updatedAt=1753990135831",
  "https://ik.imagekit.io/qlynnooa4/1747468181594.jpeg?updatedAt=1753990135766",
];

const FLIP_WORDS = ["Impact", "Works"];
const FLIP_INTERVAL = 2200;
const MARQUEE_DURATION = 12;

export default function Marquee() {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const wordRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const wordEl = wordRef.current;
    if (!marquee || !wordEl) return;

    const totalWidth = marquee.scrollWidth / 2;

    // Marquee Animation
    gsap.set(marquee, { x: 0 });
    animationRef.current?.kill();

    animationRef.current = gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: MARQUEE_DURATION,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x) % totalWidth;
          return `${val}px`;
        },
      },
    });

    // Flip Word Animation
    let index = 0;
    const flipWords = () => {
      gsap.to(wordEl, {
        rotateX: 90,
        opacity: 0.7,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          wordEl.textContent = FLIP_WORDS[index];
          index = (index + 1) % FLIP_WORDS.length;
          gsap.fromTo(
            wordEl,
            { rotateX: -90, opacity: 0.7 },
            { rotateX: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
          );
        },
      });
    };

    const interval = setInterval(flipWords, FLIP_INTERVAL);

    // Scroll Entrance Animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup
    return () => {
      animationRef.current?.kill();
      clearInterval(interval);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const pauseMarquee = () => animationRef.current?.pause();
  const resumeMarquee = () => animationRef.current?.resume();

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 overflow-hidden bg-black"
    >
      {/* Subtle Blue Ambient Glow */}
      <div className="fixed inset-0  pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading with Flipping Word */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Our{" "}
            <span
              ref={wordRef}
              className="inline-block min-w-[140px] text-blue-500 font-[Orbitron] 
                         [transform-style:preserve-3d] [backface-visibility:hidden]"
              style={{ perspective: "1000px" }}
            >
              Impact
            </span>{" "}
            in HIT Haldia
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/70 font-light">
            A showcase of our achievements, moments, and milestones.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 
                     shadow-2xl hover:border-blue-500/20 transition-colors duration-500"
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
        >
          {/* Left Fade */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          {/* Right Fade */}
          <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Infinite Scrolling Track */}
          <div
            ref={marqueeRef}
            className="flex gap-6 md:gap-10 items-center py-6 px-2"
            style={{ willChange: "transform" }}
          >
            {[...images, ...images].map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`E-Cell showcase ${i + 1}`}
                  className="h-24 w-24 md:h-32 md:w-32 rounded-2xl object-cover 
                             border border-white/10 shadow-lg cursor-pointer
                             hover:border-blue-500/40 hover:shadow-blue-500/20
                             transition-all duration-300 select-none"
                  draggable={false}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}