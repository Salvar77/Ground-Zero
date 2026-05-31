import React from "react";
import AboutUsPage from "@/components/AboutUsPage/AboutUsPage";

export const metadata = {
  title: "O Nas | Ground Zero - Najlepsza Siłownia i Fitness w Niemodlinie",
  description: "Poznaj Ground Zero - innowacyjne centrum treningowe w Niemodlinie o powierzchni ponad 300 m². Założyciele Kacper i Nikola Miller. Siłownia, wolne ciężary, zajęcia fitness, MMA na Opolszczyźnie.",
  alternates: {
    canonical: "https://groundzeroniemodlin.pl/o-nas",
  },
  openGraph: {
    title: "O Nas | Ground Zero - Najlepsza Siłownia i Fitness w Niemodlinie",
    description: "Poznaj Ground Zero - innowacyjne centrum treningowe w Niemodlinie. Siłownia, wolne ciężary, fitness, MMA stworzone z pasji przez Kacpra i Nikolę Miller.",
    url: "https://groundzeroniemodlin.pl/o-nas",
    siteName: "Ground Zero Siłownia Niemodlin",
    images: [
      {
        url: "/images/o-nas-hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Wnętrze siłowni Ground Zero Niemodlin",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AboutPage", "LocalBusiness"],
  "name": "Ground Zero Siłownia Niemodlin",
  "image": "https://groundzeroniemodlin.pl/images/o-nas-hero-desktop.jpg",
  "description": "Nowoczesne centrum treningowe w Niemodlinie (powierzchnia ponad 300 m²). Oferujemy strefę wolnych ciężarów ze sprzętem Hammer Strength, zajęcia fitness oraz MMA.",
  "url": "https://groundzeroniemodlin.pl/o-nas",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Niemodlin",
    "addressRegion": "opolskie",
    "addressCountry": "PL"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Kacper Miller",
      "jobTitle": "Założyciel, Trener",
      "description": "Odpowiedzialny za surowy charakter Ground Zero, strefę ciężarów i maszyny Hammer Strength."
    },
    {
      "@type": "Person",
      "name": "Nikola Miller",
      "jobTitle": "Założycielka, Trenerka",
      "description": "Ekspertka ds. treningu i fitnessu dla kobiet. Buduje wyjątkową społeczność kobiet w Ground Zero."
    }
  ]
};

export default function ONas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <AboutUsPage />
      </main>
    </>
  );
}
