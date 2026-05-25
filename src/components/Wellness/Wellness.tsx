"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { powerCharge, stealthReveal } from "@/utils/motion";
import styles from "./Wellness.module.scss";

export default function Wellness() {
  const isDesktop = useDesktopAnimation();

  return (
    <section id="wellness" className={styles.wellness}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Graphic/Image Left */}
          <motion.div 
            key={isDesktop ? "desktop-wellness-image" : "mobile-wellness-image"}
            className={styles.imageWrapper}
            {...(isDesktop && {
              variants: powerCharge(0.0, 0.6),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 }
            })}
          >
            <div className={styles.imageBorder}></div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/ground_zero_wellness.png" 
                alt="Strefa Wellness i Sauna" 
                width={600} 
                height={500} 
                style={{ width: "100%", height: "auto" }}
                className={styles.gymImage}
              />
              <div className={styles.glowOverlay}></div>
            </div>
            
            {/* Cyberpunk Deco Accents */}
            <div className={styles.cyberTag}>RELAX_ZONE</div>
            <div className={styles.cyberCorner}></div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            key={isDesktop ? "desktop-wellness-content" : "mobile-wellness-content"}
            className={styles.content}
            {...(isDesktop && {
              variants: stealthReveal(0.2, 0.7),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 }
            })}
          >
            <div className={styles.header}>
              <div className={styles.bgText}>SAUNA</div>
              <span className={styles.badge}>STREFA WELLNESS</span>
              <h2 className={styles.title}>
                REGENERACJA NA<br />
                <span>NAJWYŻSZYM</span> POZIOMIE
              </h2>
            </div>
            
            <p className={styles.description}>
              Po ciężkim treningu Twoje ciało zasługuje na najlepszy odpoczynek. 
              Skorzystaj z naszej ekskluzywnej <strong>strefy saun i pokoju relaksu</strong>. 
              To tutaj zbudujesz odporność, przyspieszysz regenerację włókien mięśniowych 
              oraz oczyścisz umysł z codziennego stresu. Prawdziwa odnowa biologiczna 
              dostępna dla każdego klubowicza.
            </p>

            <div className={styles.btnWrapper}>
              <Link href="/strefa-wellness" className={styles.ctaBtn}>
                ZOBACZ STREFĘ WELLNESS
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
