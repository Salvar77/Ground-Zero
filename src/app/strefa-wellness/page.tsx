import React from "react";
import { Metadata } from "next";
import WellnessHero from "@/components/WellnessSubpage/Hero/WellnessHero";
import WellnessFeatures from "@/components/WellnessSubpage/Features/WellnessFeatures";
import WellnessCta from "@/components/WellnessSubpage/CTA/WellnessCta";

export const metadata: Metadata = {
  title: "Strefa Wellness i Sauna | Ground Zero Niemodlin",
  description: "Zregeneruj siły w naszej strefie Wellness. Sauna fińska, pokój relaksu i odnowa biologiczna w najlepszej siłowni w regionie.",
};

export default function WellnessPage() {
  return (
    <main style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <WellnessHero />
      <WellnessFeatures />
      <WellnessCta />
    </main>
  );
}
