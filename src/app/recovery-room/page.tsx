import React from "react";
import { Metadata } from "next";
import WellnessHero from "@/components/WellnessSubpage/Hero/WellnessHero";
import WellnessFeatures from "@/components/WellnessSubpage/Features/WellnessFeatures";
import WellnessEquipment from "@/components/WellnessSubpage/Equipment/WellnessEquipment";
import WellnessCta from "@/components/WellnessSubpage/CTA/WellnessCta";

export const metadata: Metadata = {
  title: "Recovery Room i Odnowa Biologiczna",
  description: "Zregeneruj siły w naszym Recovery Room. Drenaż limfatyczny i pistolety masujące w najlepszej siłowni w regionie.",
  keywords: ["recovery room Niemodlin", "drenaż limfatyczny Niemodlin", "odnowa biologiczna Niemodlin", "relaks siłownia", "masaż uciskowy", "regeneracja po treningu"],
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/recovery-room",
  },
  openGraph: {
    title: "Recovery Room i Odnowa Biologiczna",
    description: "Zregeneruj siły w naszym Recovery Room. Drenaż limfatyczny i profesjonalna odnowa biologiczna.",
    url: "https://www.groundzero-niemodlin.pl/recovery-room",
    siteName: "Ground Zero Siłownia Niemodlin",
    locale: "pl_PL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "Service"],
  "name": "Recovery Room - Ground Zero",
  "description": "Profesjonalna odnowa biologiczna, drenaż limfatyczny i pokój relaksu w Niemodlinie.",
  "url": "https://www.groundzero-niemodlin.pl/recovery-room",
  "provider": {
    "@type": "ExerciseGym",
    "name": "Ground Zero Siłownia Niemodlin",
    "image": "https://www.groundzero-niemodlin.pl/images/hero-grafika.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Opolska 54",
      "addressLocality": "Niemodlin",
      "postalCode": "49-100",
      "addressCountry": "PL"
    }
  },
  "areaServed": "Niemodlin i okolice",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Usługi Recovery Room",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drenaż Limfatyczny Normatec"
        }
      }
    ]
  }
};

export default function WellnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ backgroundColor: "#000", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
        <WellnessHero />
        <WellnessFeatures />
        <WellnessEquipment />
        <WellnessCta />
      </main>
    </>
  );
}
