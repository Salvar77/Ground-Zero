import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Tu będą kolejne sekcje: O Nas, Trenerzy, Cennik, Kontakt */}
      </main>
    </>
  );
}
