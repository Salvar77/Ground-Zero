import React from "react";
import { Metadata } from "next";
import WellnessHero from "@/components/WellnessSubpage/Hero/WellnessHero";
import WellnessFeatures from "@/components/WellnessSubpage/Features/WellnessFeatures";
import WellnessEquipment from "@/components/WellnessSubpage/Equipment/WellnessEquipment";
import WellnessCta from "@/components/WellnessSubpage/CTA/WellnessCta";

export const metadata: Metadata = {
  title: "Strefa Wellness i Sauna | Ground Zero Niemodlin",
  description: "Zregeneruj siły w naszej strefie Wellness. Sauna fińska, pokój relaksu, drenaż limfatyczny (Normatec) i odnowa biologiczna w najlepszej siłowni w regionie.",
  keywords: ["strefa wellness Niemodlin", "sauna Niemodlin", "sauna fińska Niemodlin", "drenaż limfatyczny Niemodlin", "odnowa biologiczna Niemodlin", "relaks siłownia", "masaż uciskowy", "regeneracja po treningu"],
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/strefa-wellness",
  },
  openGraph: {
    title: "Strefa Wellness i Sauna | Ground Zero Niemodlin",
    description: "Sauna fińska, profesjonalny drenaż limfatyczny Normatec i strefa relaksu. Zregeneruj się po ciężkim treningu w Ground Zero.",
    url: "https://www.groundzero-niemodlin.pl/strefa-wellness",
    siteName: "Ground Zero Siłownia Niemodlin",
    locale: "pl_PL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "Service"],
  "name": "Strefa Wellness i Sauna - Ground Zero",
  "description": "Profesjonalna strefa odnowy biologicznej w Ground Zero Niemodlin. Oferujemy saunę fińską oraz sesje drenażu limfatycznego (Normatec) dla optymalnej regeneracji.",
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
    "name": "Usługi Wellness",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sauna Fińska"
        }
      },
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
