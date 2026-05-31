import React from "react";
import TrainersPage from "@/components/TrainersPage/TrainersPage";

export const metadata = {
  title: "Nasi Trenerzy | Kacper i Nikola Miller - Ground Zero Niemodlin",
  description: "Poznaj trenerów Ground Zero. Kacper Miller - ekspert od treningu siłowego i przygotowania motorycznego. Nikola Miller - specjalistka od fitnessu i treningu kobiet. Zmień swoją sylwetkę w Niemodlinie.",
  alternates: {
    canonical: "https://groundzeroniemodlin.pl/trenerzy",
  },
  openGraph: {
    title: "Trenerzy Personalni | Ground Zero Niemodlin",
    description: "Kacper i Nikola Miller. Indywidualne podejście, bezlitosna praca nad formą i profesjonalna opieka trenerska na Opolszczyźnie.",
    url: "https://groundzeroniemodlin.pl/trenerzy",
    siteName: "Ground Zero Siłownia Niemodlin",
    images: [
      {
        url: "/images/trenerzy-hero-placeholder.webp",
        width: 1200,
        height: 630,
        alt: "Trenerzy personalni Kacper i Nikola Miller na siłowni Ground Zero",
      },
    ],
    locale: "pl_PL",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Nasi Trenerzy - Kacper i Nikola Miller",
  "description": "Trenerzy personalni w Ground Zero Niemodlin. Kacper odpowiada za trening siłowy i sporty walki, Nikola za fitness i formę kobiet.",
  "mainEntity": [
    {
      "@type": "Person",
      "name": "Kacper Miller",
      "jobTitle": "Trener Personalny, Trener Przygotowania Motorycznego",
      "worksFor": {
        "@type": "SportsActivityLocation",
        "name": "Ground Zero Siłownia Niemodlin"
      }
    },
    {
      "@type": "Person",
      "name": "Nikola Miller",
      "jobTitle": "Instruktorka Fitness, Trenerka Kobiet",
      "worksFor": {
        "@type": "SportsActivityLocation",
        "name": "Ground Zero Siłownia Niemodlin"
      }
    }
  ]
};

export default function Trenerzy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <TrainersPage />
      </main>
    </>
  );
}
