// src/pages/About.jsx or src/app/About/page.jsx (for Next.js App Router)
// If using Pages Router, adjust accordingly.
'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Lightbulb,
  Users2,
  TrendingUp,
  Heart,
  Sparkles,
  Activity,
  Award,
  Zap,
  ArrowRight,
  Trophy,
} from "lucide-react";
import HeroSection from "@/components/about/HeroSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import TimelineSection from "@/components/about/TimelineSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import ImpactStatsSection from "@/components/about/ImpactStatsSection"; 

// import HeroSection from ""
// import WhoWeAreSection from "../components/WhoWeAreSection";
// import TimelineSection from "../components/TimelineSection";
// import MissionVisionSection from "../components/MissionVisionSection";
// import CoreValuesSection from "../components/CoreValuesSection";
// import ImpactStatsSection from "../components/ImpactStatsSection";

// Timeline Data
const timelineSteps = [
  {
    icon: Heart,
    title: "Midnight Spark",
    date: "Night 1",
    desc: (
      <>
        It all began on an ordinary hostel night—somewhere between a steaming
        cup of chai and a plate of leftover Maggi.{" "}
        <strong className="text-blue-400">Aryan Raj</strong> and his roommate{" "}
        <strong className="text-blue-400">Rohan Kumar Singh</strong> lay on
        their creaky beds, gazing at the ceiling fan, when an idea quietly
        sparked into motion:
        <br />
        <span className="mt-2 block text-lg font-medium text-blue-300">
          “Let’s start an E-Cell in our college.”
        </span>
      </>
    ),
  },
  {
    icon: Zap,
    title: "8 Months of Grit",
    date: "Month 1-8",
    desc: (
      <>
        What followed was an intense eight-month journey, filled with
        rejections, resource crunches, administrative hurdles, and sleepless
        nights. There were days when no one showed up. Pitch failures occurred
        on several occasions. But the dream remained unshaken.
      </>
    ),
  },
  {
    icon: Users2,
    title: "Believers → Core Team",
    date: "Month 4",
    desc: (
      <>
        Slowly, efforts gained momentum. A few believers turned into a core
        team. That team grew into a movement.
      </>
    ),
  },
  {
    icon: Lightbulb,
    title: "Workshops & Mentorships",
    date: "Month 6",
    desc: (
      <>
        Workshops were launched, mentorships began, and students started
        thinking like founders.
      </>
    ),
  },
  {
    icon: Trophy,
    title: "E-Cell HIT Haldia",
    date: "Today",
    desc: (
      <>
        What once began as a late-night whisper became the driving force of
        HIT’s startup culture—
        <strong className="text-blue-400">
          {" "}
          the now-thriving E-Cell HIT Haldia
        </strong>
        .
        <br />
        <span className="mt-2 block text-lg font-medium text-blue-300">
          Today, we stand strong because of a passionate group of visionaries
          who chose action over hesitation and built not just an organization
          but a lasting entrepreneurial legacy.
        </span>
      </>
    ),
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Fostering creative thinking and breakthrough ideas.",
  },
  {
    icon: Users2,
    title: "Collaboration",
    desc: "Building a strong community of student entrepreneurs.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Continuous learning through workshops and mentorship.",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Driven by enthusiasm for entrepreneurship and impact.",
  },
];

const stats = [
  { number: "50+", label: "Active Members", icon: Users2 },
  { number: "20+", label: "Events Annually", icon: Activity },
  { number: "5+", label: "Startups Launched", icon: Sparkles },
  { number: "$25M+", label: "Funding Raised", icon: Award },
];

const missionVisionData = [
  {
    icon: Target,
    title: "Our Mission",
    content:
      "To foster innovation, leadership, and entrepreneurship among students with tools, resources, and mindset to build and lead.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    content:
      "To be a leading force in student-led innovation, producing successful ventures and entrepreneurial leaders who create positive change.",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Subtle Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <HeroSection />
      <WhoWeAreSection />
      <TimelineSection
        timelineSteps={timelineSteps}
        lineHeight={lineHeight}
      />
      <MissionVisionSection missionVisionData={missionVisionData} />
      <CoreValuesSection values={values} />
      <ImpactStatsSection stats={stats} />
    </div>
  );
};

export default About;