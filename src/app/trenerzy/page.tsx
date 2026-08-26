import React from "react";
import TrainersPage from "@/components/TrainersPage/TrainersPage";
import Consultation from "@/components/Consultation/Consultation";

export const metadata = {
  title: "Nasi Trenerzy",
  description: "Poznaj trenerów Ground Zero: Kacper Miller (motoryka, trening siłowy) oraz Nicole Drescher (fitness kobiet). Zmień swoją sylwetkę pod ich okiem!",
  keywords: ["trener personalny Niemodlin", "trenerzy Ground Zero", "Kacper Miller trener", "Nicole Drescher trenerka", "trening personalny", "przygotowanie motoryczne", "fitness dla kobiet"],
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/trenerzy",
  },
  openGraph: {
    title: "Nasi Trenerzy",
    description: "Kacper Miller i Nicole Drescher. Indywidualne podejście, bezlitosna praca nad formą i profesjonalna opieka trenerska na Opolszczyźnie.",
    url: "https://www.groundzero-niemodlin.pl/trenerzy",
    siteName: "Ground Zero Siłownia Niemodlin",
    images: [
      {
        url: "/images/trenerzy-hero-placeholder.webp",
        width: 1200,
        height: 630,
        alt: "Trenerzy personalni Kacper Miller i Nicole Drescher na siłowni Ground Zero",
      },
    ],
    locale: "pl_PL",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Nasi Trenerzy - Kacper Miller i Nicole Drescher",
  "description": "Trenerzy personalni w Ground Zero Niemodlin. Kacper odpowiada za trening siłowy i sporty walki, Nicole za fitness i formę kobiet.",
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
      "name": "Nicole Drescher",
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
        <Consultation />
      </main>
    </>
  );
}
