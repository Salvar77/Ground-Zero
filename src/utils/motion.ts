import { Variants } from "framer-motion";

// Kontener do stopniowania animacji dzieci (Stagger)
export const staggerContainer = (staggerChildren: number, delayChildren: number = 0): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// 1. Heavy Hit (Tąpnięcie Ciężaru / Weight Slam)
// Element spada szybko z góry z lekkim powiększeniem i uderza z twardym, sprężystym odbiciem
export const heavyHit = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: -60,
      scale: 0.93,
      opacity: 0,
    },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 280, // Bardzo twarda sprężyna
        damping: 15,    // Małe tłumienie (mocne tąpnięcie i szybkie wygaszenie)
        delay: delay,
      },
    },
  };
};

// 2. Industrial Slide (Agresywny wjazd ze skosem / Slanted Slide-in)
// Element wjeżdża z boku mocno pochylony (skew), prostując się w momencie zatrzaśnięcia na docelowej pozycji
export const industrialSlide = (
  direction: "left" | "right",
  delay: number = 0,
  duration: number = 0.6
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? -120 : 120,
      skewX: direction === "left" ? -15 : 15,
      opacity: 0,
    },
    show: {
      x: 0,
      skewX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 18,
        delay: delay,
        duration: duration,
      },
    },
  };
};

// 3. Power Charge (Ładowanie Mocy / Explosive Scale)
// Szybkie napompowanie elementu z rozmycia do pełnej skali i kontrastu (efekt wyciskania)
export const powerCharge = (delay: number = 0, duration: number = 0.5): Variants => {
  return {
    hidden: {
      scale: 0.8,
      filter: "blur(8px) brightness(0.6)",
      opacity: 0,
    },
    show: {
      scale: 1,
      filter: "blur(0px) brightness(1)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 14,
        delay: delay,
        duration: duration,
      },
    },
  };
};

// 4. Stealth Reveal (Szybki wyjazd z cienia / Blur-up Slide)
// Elegancki, bardzo szybki wyjazd z dołu połączony z wyostrzeniem – idealny do haseł i opisów
export const stealthReveal = (delay: number = 0, duration: number = 0.6): Variants => {
  return {
    hidden: {
      y: 30,
      filter: "blur(4px)",
      opacity: 0,
    },
    show: {
      y: 0,
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (fast out, smooth in)
        duration: duration,
        delay: delay,
      },
    },
  };
};

// 5. Blast Out (Eksplozja Energii / Pulse Blast)
// Element gwałtownie wybucha z miniatury z potężnym rozbłyskiem i sprężynowym ustabilizowaniem
export const blastOut = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.3,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
        delay: delay,
      },
    },
  };
};

// 6. Iron Grip (Żelazny Uścisk / Slam & Squeeze)
// Element spada z powiększenia z rotacją, "zatrzaskując się" w miejscu z dużą siłą
export const ironGrip = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 1.15,
      rotate: -2,
      opacity: 0,
    },
    show: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 15,
        delay: delay,
      },
    },
  };
};

// 7. Power Clean (Podrzut / Overshoot)
// Element dynamicznie wyskakuje z dołu, lekko "przestrzeliwuje" pozycję (overshoot) i stabilizuje się
export const powerClean = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120, // miększa sprężyna dla wyraźniejszego overshoot'u
        damping: 9,     // małe tłumienie, żeby element lekko zatańczył (jak przy zarzucie)
        delay: delay,
      },
    },
  };
};

