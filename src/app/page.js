import Image from "next/image";
import Landing from '@/components/home/Landing'
import Marquee from '@/components/home/Marquee'
import Startup from '@/components/home/Startup'
import ImpactStats from '@/components/home/ImpactStats'
import Mentor from "@/components/home/Mentor";
import TeamPreview from "@/components/home/TeamPreview";
import TestimonialMarquee from "@/components/home/TestimonialMarquee"
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center  font-sans bg-black ">
      <Landing/>
      <Marquee/>
      <Startup/>
      <ImpactStats/>
      <Mentor/>
      <TeamPreview/>
      <TestimonialMarquee/>
    </div>
  );
}
