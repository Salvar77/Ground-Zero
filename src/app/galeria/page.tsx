import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Galeria Zdjęć",
  description: "Zajrzyj do naszego klubu od środka! Zobacz profesjonalną strefę maszyn, wolnych ciężarów oraz salę fitness i cross w Ground Zero Niemodlin.",
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/galeria",
  },
};

export default function GaleriaPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
