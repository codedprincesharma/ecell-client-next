// src/app/idea/page.jsx
'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import IdeaHeader from "@/components/idea/IdeaHeader";
import IdeaForm from "@/components/idea/IdeaForm";

export default function Idea() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <IdeaHeader />
        <IdeaForm />
      </div>
    </section>
  );
}