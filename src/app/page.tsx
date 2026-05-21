import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Features from "@/components/Features/Features";
import About from "@/components/About/About";
// import Schedule from "@/components/Schedule/Schedule";
import FreeTrial from "@/components/FreeTrial/FreeTrial";
import Trainers from "@/components/Trainers/Trainers";
import Consultation from "@/components/Consultation/Consultation";
// import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <About />
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
