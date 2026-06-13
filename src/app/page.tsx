import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import About from "@/components/About/About";
import Wellness from "@/components/Wellness/Wellness";
// import Schedule from "@/components/Schedule/Schedule";
import FreeTrial from "@/components/FreeTrial/FreeTrial";
import Trainers from "@/components/Trainers/Trainers";
import Consultation from "@/components/Consultation/Consultation";
import Contact from "@/components/Contact/Contact";
// import Pricing from "@/components/Pricing/Pricing";
import ElfsightLazyWrapper from "@/components/Elfsight/ElfsightLazyWrapper";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <About />
        <Wellness />
        <FreeTrial />
        {/* <Schedule /> */}
        <Trainers />
        <Consultation />
        {/* <Pricing /> */}
        <ElfsightLazyWrapper />
        <Contact />
      </main>
    </>
  );
}
