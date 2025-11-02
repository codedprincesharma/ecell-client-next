'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFHMt1PZjl7EQ/profile-displayphoto-scale_400_400/B56ZfaUrt_GQAk-/0/1751714547935?e=1763596800&v=beta&t=GQ-jAp5PcG0XxmfVlWVHwFj4SaMbEpMAt2uen8FjQ4I",
    name: "Prince Raj",
    dept: "EE",
    role: "Fullstack Web Developer",
    quote:
      "Being part of E-Cell HIT as a Fullstack Developer has been an amazing journey! I’ve learned how to turn ideas into real projects and collaborate with some incredible minds. It’s the best place to grow your skills and creativity.",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQHLtzHEf55HQg/profile-displayphoto-shrink_800_800/B4EZWVgSPyGYAg-/0/1741970024563?e=1763596800&v=beta&t=cLT-QfXIbQXdbcjheGQJkP-1f_PClwFUbb_wnENYJzw",
    name: "Priyanshu Vats",
    dept: "AIML",
    role: "PR Team",
    quote:
      "Joining E-Cell HIT was one of the best choices I made! As a member of the PR team, I’ve grown a lot in teamwork and event promotion. It’s not just about publicity—it’s about sharing ideas that inspire others.",
  },
  // Add more real testimonials here
];

const MARQUEE_DURATION = 25;

export default function TestimonialMarquee() {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

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

    return () => animationRef.current?.kill();
  }, []);

  const pauseMarquee = () => animationRef.current?.pause();
  const resumeMarquee = () => animationRef.current?.resume();

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Subtle Ambient Glow */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Words from Our <span className="text-blue-500">Community</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto">
            Hear from our members about their experiences, growth, and the impact E-Cell HIT has had on their tech journey.
          </p>
        </motion.div>

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
            className="flex gap-6 py-6 px-2 items-stretch"
            style={{ willChange: "transform" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <motion.div
                key={`${testimonial.name}-${i}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <div
                  className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 
                                shadow-xl hover:border-blue-500/30 hover:shadow-blue-500/10 
                                transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-blue-500/20"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-blue-300">
                        {testimonial.dept} • {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base flex-1">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Centered Connect Us Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-lg 
                         hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer"
            >
              Connect With Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}