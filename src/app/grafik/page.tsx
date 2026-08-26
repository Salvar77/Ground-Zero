import React from "react";
import { Metadata } from "next";
import Schedule from "@/components/Schedule/Schedule";

export const metadata: Metadata = {
  title: "Grafik Zajęć Grupowych i Fitness",
  description: "Sprawdź aktualny grafik zajęć grupowych w Ground Zero Niemodlin. Cross, Fitness, MMA dla dzieci, młodzieży i dorosłych. Znajdź trening dla siebie!",
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/grafik",
  },
};

export default function GrafikPage() {
  return (
    <main>
      <Schedule />
    </main>
  );
}
