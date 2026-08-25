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
    "Najlepsza siłownia w Niemodlinie i okolicach (blisko Opola, Grodkowa, Tułowic). Oferujemy nowoczesny sprzęt, treningi personalne i recovery room. Zbuduj formę w Ground Zero na ul. Opolskiej 54!",
  keywords: [
    "siłownia Niemodlin",
    "klub fitness Niemodlin",
    "trener personalny Niemodlin",
    "treningi Niemodlin",
    "Ground Zero Niemodlin",
    "siłownia opolskie",
    "recovery room Niemodlin",
    "strefa wolnych ciężarów Niemodlin",
    "karnety siłownia Niemodlin",
    "fitness Niemodlin",
    "sport Niemodlin",
    "siłownia Opole",
    "klub fitness Opole",
    "siłownia Tułowice",
    "siłownia Gracze",
    "siłownia Szydłów",
    "siłownia Łambinowice",
    "siłownia Grodków",
    "siłownia Lewin Brzeski",
    "siłownia Prószków",
    "siłownia Dąbrowa",
    "siłownia Lipno",
    "siłownia opolszczyzna",
    "fitness Tułowice",
    "fitness Gracze",
    "fitness Grodków",
    "trener personalny Opole",
    "trener personalny Tułowice",
    "trener personalny Grodków",
    "trening personalny Niemodlin",
    "najlepsza siłownia Niemodlin",
    "siłownia opolskie",
    "recovery room opolskie",
    "siłownia Niemodlin i okolice"
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
      "Najlepsza siłownia w Niemodlinie i okolicach (blisko Opola, Grodkowa, Tułowic). Nowoczesny sprzęt, mega atmosfera, treningi personalne i zero wymówek! Dołącz do nas już dziś.",
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

// JSON-LD LocalBusiness (ExerciseGym) schema dla Google i EEAT
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Ground Zero Siłownia Niemodlin",
  image: "https://www.groundzero-niemodlin.pl/images/hero-grafika.jpg",
  "@id": "https://www.groundzero-niemodlin.pl",
  url: "https://www.groundzero-niemodlin.pl",
  telephone: "+48666310850",
  email: "groundzero.niemodlin@gmail.com",
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
    latitude: 50.644670,
    longitude: 17.645690,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Ground+Zero+Si%C5%82ownia+Opolska+54+Niemodlin",
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
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Ground-Zero-Si%C5%82ownia-Niemodlin-61576885212351/",
    "https://www.instagram.com/silownia.niemodlin.groundzero/",
    "https://www.gowork.pl/ground-zero-kacper-miller,27155616/dane-kontaktowe-firmy",
    "https://www.numo.pl/firmy/niemodlin/si%C5%82ownie%2C%20kulturystyka"
  ],
  areaServed: [
    { "@type": "AdministrativeArea", "name": "Niemodlin" },
    { "@type": "AdministrativeArea", "name": "Opole" },
    { "@type": "AdministrativeArea", "name": "Tułowice" },
    { "@type": "AdministrativeArea", "name": "Gracze" },
    { "@type": "AdministrativeArea", "name": "Szydłów" },
    { "@type": "AdministrativeArea", "name": "Dąbrowa" },
    { "@type": "AdministrativeArea", "name": "Łambinowice" },
    { "@type": "AdministrativeArea", "name": "Grodków" },
    { "@type": "AdministrativeArea", "name": "Lewin Brzeski" },
    { "@type": "AdministrativeArea", "name": "Prószków" },
    { "@type": "AdministrativeArea", "name": "Korfantów" },
    { "@type": "AdministrativeArea", "name": "Lipno" },
    { "@type": "AdministrativeArea", "name": "województwo opolskie" }
  ],
  priceRange: "$$",
  description: "Najnowocześniejsza siłownia i klub fitness w Niemodlinie i okolicach (blisko Opola, Grodkowa, Tułowic). Ponad 400m² strefy maszyn, strefa wolnych ciężarów, recovery room oraz pomoc trenerów personalnych.",
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
