import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.scss";

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

export const metadata = {
  title: {
    default: "Ground Zero Siłownia Niemodlin",
    template: "%s | Ground Zero",
  },
  description:
    "Ground Zero Siłownia Niemodlin. Twoja siła. Twoje miejsce. Twój czas. Nowoczesny sprzęt, mega atmosfera, zero wymówek!",
  icons: {
    icon: "/images/ground-zero-logo.png?v=4",
  },
  openGraph: {
    title: "Ground Zero Siłownia Niemodlin",
    description: "Nowoczesny sprzęt, mega atmosfera, zero wymówek!",
    url: "https://www.groundzero-niemodlin.pl", // TODO: Update later
    siteName: "Ground Zero Niemodlin",
    locale: "pl_PL",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
