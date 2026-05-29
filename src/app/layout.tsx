import { Barlow, Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.scss";
import { Metadata } from "next";

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-body",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.groundzero-niemodlin.pl"),
  title: {
    default: "Ground Zero Siłownia Niemodlin | Twój Klub Fitness i Treningi",
    template: "%s | Ground Zero Niemodlin",
  },
  description:
    "Najlepsza siłownia w Niemodlinie. Oferujemy nowoczesny sprzęt, treningi personalne, strefę wellness oraz profesjonalne wsparcie trenerów. Zbuduj formę bez wymówek w Ground Zero na ul. Opolskiej 54!",
  keywords: [
    "siłownia Niemodlin",
    "klub fitness Niemodlin",
    "trener personalny Niemodlin",
    "treningi Niemodlin",
    "Ground Zero Niemodlin",
    "siłownia opolskie",
    "wellness Niemodlin",
    "strefa wolnych ciężarów Niemodlin",
    "karnety siłownia Niemodlin",
    "fitness Niemodlin",
    "sport Niemodlin",
  ],
  authors: [{ name: "Ground Zero Niemodlin", url: "https://www.groundzero-niemodlin.pl" }],
  creator: "Ground Zero Niemodlin",
  publisher: "Ground Zero Niemodlin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ground Zero Siłownia Niemodlin | Twój Klub Fitness",
    description:
      "Najlepsza siłownia w Niemodlinie. Nowoczesny sprzęt, mega atmosfera, treningi personalne i zero wymówek! Dołącz do nas już dziś.",
    url: "https://www.groundzero-niemodlin.pl",
    siteName: "Ground Zero Niemodlin",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#080808",
};

// JSON-LD LocalBusiness (HealthClub / ExerciseGym) schema dla Google i EEAT
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Ground Zero Siłownia Niemodlin",
  image: "https://www.groundzero-niemodlin.pl/images/hero-grafika.jpg",
  "@id": "https://www.groundzero-niemodlin.pl",
  url: "https://www.groundzero-niemodlin.pl",
  telephone: "+48666310850",
  email: "kontakt@groundzero-niemodlin.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Opolska 54",
    addressLocality: "Niemodlin",
    postalCode: "49-100",
    addressCountry: "PL",
    addressRegion: "Opolskie",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.640562, // Przybliżona lokalizacja dla Niemodlin Opolska 54
    longitude: 17.574696,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "13:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  description: "Najnowocześniejsza siłownia i klub fitness w Niemodlinie. Treningi personalne, strefa maszyn, wolne ciężary oraz strefa wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
