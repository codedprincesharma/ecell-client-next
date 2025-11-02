'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Startup() {
  const containerRef = useRef(null);
  const fundsRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%",
        },
      });

      // Animate each section group
      gsap.utils.toArray(".section-group").forEach((section, i) => {
        gsap.from(section, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      // Funds Raised Counter
      const fundsTl = gsap.timeline({
        scrollTrigger: {
          trigger: fundsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const obj = { val: 0 };
      fundsTl.to(obj, {
        val: 2.5,
        duration: 2,
        ease: "power2.out",
        onUpdate() {
          if (countRef.current) {
            const val = obj.val.toFixed(2);
            countRef.current.innerHTML = `
              <span class="text-4xl md:text-5xl font-black text-blue-400">₹${val}</span>
              <span class="text-blue-300"> Crores+</span>
            `;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
      {/* Subtle Blue Ambient Glow */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div ref={containerRef} className="relative max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <h1 className="section-title text-4xl md:text-5xl lg:text-6xl font-black text-center text-white">
          Our <span className="text-blue-500">Achievements</span>
        </h1>

        {/* Our Startups */}
        <div className="section-group">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white relative inline-block group">
            Our Startups
            <span className="absolute left-0 -bottom-2 w-24 h-px bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* GymPass */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">GymPass</h3>
              <p className="text-white/70 leading-relaxed">
                GymPass is a fitness-tech startup revolutionizing how India accesses gyms. It offers flexible, pay-per-use access to a wide network of partner gyms, eliminating the need for long-term memberships. Users—including students, travelers, and fitness enthusiasts—can discover nearby gyms and check in using a QR-based system, with real-time, hourly billing. At the same time, GymPass helps local gyms boost visibility and footfall through a centralized platform, creating a win-win for users and fitness centers alike.
              </p>
            </div>

            {/* BullBear AI */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">BullBear AI</h3>
              <p className="text-white/70 leading-relaxed">
                BullBear AI is a cutting-edge fintech platform that is revolutionizing the process of making investment decisions. Using advanced machine learning, real-time sentiment analysis, and automated trading bots, it empowers both individual investors and institutions to trade smarter, reduce risk, and protect wealth. Designed for clarity in chaotic markets, BullBear AI replaces emotion and guesswork with intelligent, data-driven action. Built by a passionate team of innovators, it’s not just another trading tool—it’s your personal investment brain, setting a new benchmark in the future of investing.
              </p>
            </div>
          </div>
        </div>

        {/* Funds Raised */}
        <div ref={fundsRef} className="section-group">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white relative inline-block group">
            Funds Raised
            <span className="absolute left-0 -bottom-2 w-20 h-px bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            <span
              ref={countRef}
              className="inline-block"
              dangerouslySetInnerHTML={{
                __html: '<span class="text-4xl md:text-5xl font-black text-blue-400">₹0.00</span><span class="text-blue-300"> Crores+</span>',
              }}
            />{" "}
            raised by our startups through seed funding and grants.
          </p>
        </div>

        {/* Entrepreneurs Mentored */}
        <div className="section-group">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white relative inline-block group">
            Entrepreneurs Mentored
            <span className="absolute left-0 -bottom-2 w-32 h-px bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            <span className="text-blue-400 font-bold">30+</span> students mentored through bootcamps, 1-on-1s, and workshops.
          </p>
        </div>
      </div>
    </section>
  );
}