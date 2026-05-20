import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Features from "@/components/Features/Features";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        {/* Tu będą kolejne sekcje: O Nas, Trenerzy, Cennik */}
        <Contact />
      </main>
    </>
  );
}
