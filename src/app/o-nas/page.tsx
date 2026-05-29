import React from "react";
import AboutUsPage from "@/components/AboutUsPage/AboutUsPage";

export const metadata = {
  title: "O Nas | Ground Zero Siłownia Niemodlin",
  description: "Poznaj Ground Zero - innowacyjne centrum treningowe w Niemodlinie stworzone przez Kacpra Millera. Dowiedz się więcej o naszej filozofii i dołącz do najlepszej społeczności.",
};

export default function ONas() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <AboutUsPage />
    </main>
  );
}
