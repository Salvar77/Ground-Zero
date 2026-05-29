"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { industrialSlide } from "@/utils/motion";
import styles from "./About.module.scss";

export default function About() {
  const isDesktop = useDesktopAnimation();

  return (
    <section id="o-nas" className={styles.about}>
      <div className={styles.container}>
        
        <div className={styles.grid}>
          {/* Content Left */}
          <motion.div 
            key={isDesktop ? "desktop-about-content" : "mobile-about-content"}
            className={styles.content}
            {...(isDesktop && {
              variants: industrialSlide("left", 0.0, 0.7),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 }
            })}
          >
            <div className={styles.header}>
              <div className={styles.bgText}>ABOUT</div>
              <span className={styles.badge}>O NASZEJ SIŁOWNI</span>
              <h2 className={styles.title}>
                ZBUDOWANE Z PASJI,<br />
                <span>SKONSTRUOWANE</span> DLA WYNIKÓW
              </h2>
            </div>
            
            <p className={styles.description}>
              Ground Zero Niemodlin to nie jest kolejna bezduszna sieciówka. To nowoczesne 
              centrum treningowe o powierzchni ponad <strong>300 m²</strong>, stworzone przez pasjonatów 
              dla wszystkich, którzy chcą od życia czegoś więcej. Nie znajdziesz tu wymówek – 
              znajdziesz za to profesjonalny sprzęt, zintegrowaną społeczność i atmosferę, 
              która motywuje do ciężkiej pracy od wejścia.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L9 17L20 6" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Indywidualne Podejście</h4>
                  <p className={styles.featureDesc}>
                    Nasi trenerzy pomogą Ci dopasować trening do Twoich celów i możliwości zdrowotnych.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L9 17L20 6" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Wszechstronny Rozwój</h4>
                  <p className={styles.featureDesc}>
                    Od ciężarów, przez Cross i Fitness, aż po sporty walki (MMA) – rozwijamy każdą cechę motoryczną.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L9 17L20 6" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Sprzęt Klasy Premium</h4>
                  <p className={styles.featureDesc}>
                    Starannie wyselekcjonowane maszyny półwolne Hammer, strefa wolnych ciężarów i profesjonalna klatka.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.btnWrapper}>
              <Link href="/o-nas" className={styles.ctaBtn}>
                POZNAJ NAS BLIŻEJ
              </Link>
            </div>
          </motion.div>

          {/* Graphic/Image Right */}
          <motion.div 
            key={isDesktop ? "desktop-about-image" : "mobile-about-image"}
            className={styles.imageWrapper}
            {...(isDesktop && {
              variants: industrialSlide("right", 0.1, 0.7),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 }
            })}
          >
            <div className={styles.imageBorder}></div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/ground_zero_gym_interior.png" 
                alt="Wnętrze siłowni Ground Zero Niemodlin - nowoczesny sprzęt fitness" 
                width={600} 
                height={500} 
                style={{ width: "100%", height: "auto" }}
                className={styles.gymImage}
              />
              <div className={styles.glowOverlay}></div>
            </div>
            
            {/* Cyberpunk Deco Accents */}
            <div className={styles.cyberTag}>GZ_STUDIO_2026</div>
            <div className={styles.cyberCorner}></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
