import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Features from "@/components/Features/Features";
import About from "@/components/About/About";
import Wellness from "@/components/Wellness/Wellness";
// import Schedule from "@/components/Schedule/Schedule";
import FreeTrial from "@/components/FreeTrial/FreeTrial";
import Trainers from "@/components/Trainers/Trainers";
import Consultation from "@/components/Consultation/Consultation";
import Contact from "@/components/Contact/Contact";
// import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <Features />
        <About />
        <Wellness />
        <FreeTrial />
        {/* <Schedule /> */}
        <Trainers />
        <Consultation />
        {/* <Pricing /> */}
        <Contact />
      </main>
    </>
  );
}
