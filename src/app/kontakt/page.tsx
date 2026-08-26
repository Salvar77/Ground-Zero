import React from "react";
import Contact from "@/components/Contact/Contact";
import FreeTrial from "@/components/FreeTrial/FreeTrial";

export const metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z nami. Znajdziesz nas w Niemodlinie przy ul. Opolskiej 54. Zadzwoń lub napisz i dołącz do najlepszej siłowni w regionie.",
  keywords: ["kontakt siłownia Niemodlin", "Ground Zero kontakt", "adres siłownia Niemodlin", "telefon siłownia", "formularz kontaktowy", "siłownia Niemodlin kontakt"],
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/kontakt",
  },
  openGraph: {
    title: "Kontakt",
    description: "Masz pytania? Skontaktuj się z nami! Znajdziesz nas przy ul. Opolskiej 54 w Niemodlinie.",
    url: "https://www.groundzero-niemodlin.pl/kontakt",
    siteName: "Ground Zero Siłownia Niemodlin",
    locale: "pl_PL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Kontakt - Ground Zero Siłownia",
  "description": "Strona kontaktowa siłowni Ground Zero w Niemodlinie.",
  "url": "https://www.groundzero-niemodlin.pl/kontakt",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Ground Zero Siłownia Niemodlin",
    "telephone": "+48666310850",
    "email": "groundzero.niemodlin@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Opolska 54",
      "addressLocality": "Niemodlin",
      "postalCode": "49-100",
      "addressCountry": "PL",
      "addressRegion": "Opolskie"
    }
  }
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Contact isSubpage={true} />
        <FreeTrial />
      </main>
    </>
  );
}
