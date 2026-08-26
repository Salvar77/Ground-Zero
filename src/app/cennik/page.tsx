import React from "react";
import { Metadata } from "next";
import Pricing from "@/components/Pricing/Pricing";
import Consultation from "@/components/Consultation/Consultation";

export const metadata: Metadata = {
  title: "Cennik Karnetów i Wejściówek",
  description: "Wybierz idealny karnet w Ground Zero Niemodlin! Siłownia, Cross, Fitness, zajęcia MMA. Posiadamy pakiety jednorazowe, miesięczne i combo. Sprawdź opcje!",
  keywords: ["cennik ground zero", "karnety siłownia", "ceny siłownia niemodlin", "karnet mma", "karnet cross", "karnet fitness", "ile kosztuje siłownia niemodlin"],
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/cennik",
  },
  openGraph: {
    title: "Cennik Karnetów i Wejściówek",
    description: "Jasne zasady, brak ukrytych opłat. Sprawdź naszą ofertę karnetów miesięcznych i łączonych (Combo).",
    url: "https://www.groundzero-niemodlin.pl/cennik",
    siteName: "Ground Zero Siłownia Niemodlin",
    locale: "pl_PL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cennik Karnetów - Ground Zero Niemodlin",
  "description": "Cennik biletów wstępu, karnetów miesięcznych oraz łączonych na zajęcia siłowni, cross, fitness oraz MMA w Ground Zero Niemodlin.",
  "url": "https://www.groundzero-niemodlin.pl/cennik"
};

export default function CennikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Pricing />
        <Consultation />
      </main>
    </>
  );
}
