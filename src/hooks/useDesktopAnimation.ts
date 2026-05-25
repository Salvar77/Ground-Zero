import { useState, useEffect } from "react";

export function useDesktopAnimation() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Sprawdzamy szerokość okna po zamontowaniu komponentu
    const checkViewport = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return isDesktop;
}
