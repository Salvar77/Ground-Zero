import React from "react";
import Contact from "@/components/Contact/Contact";

export const metadata = {
  title: "Kontakt | Ground Zero Siłownia",
  description: "Skontaktuj się z nami. Znajdziesz nas w Niemodlinie. Dołącz do najlepszej siłowni w regionie.",
};

export default function KontaktPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <Contact />
    </main>
  );
}
