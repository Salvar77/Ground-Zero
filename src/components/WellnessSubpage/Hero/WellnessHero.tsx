"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./WellnessHero.module.scss";

export default function WellnessHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth"
    });
  };

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.heroBgWrapper}>
        <motion.div className={styles.heroBackground} style={{ y: yBackground }}>
          <Image 
            src="/images/drenaz-limfatyczny-wellness.webp" 
            alt="Ground Zero Wellness" 
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.overlay}></div>
        </motion.div>
      </div>

      {/* Fog Layers */}
      <div className={styles.fogContainer}>
        <div className={styles.fogLayer1}></div>
        <div className={styles.fogLayer2}></div>
      </div>
      
      <div className={styles.heroContent}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.contentWrapper}
        >
          <div className={styles.cyberBadge}>
            <div className={styles.glitchBlock}></div>
            <span className={styles.badgeText}>ZAAWANSOWANA REGENERACJA</span>
          </div>
          <h1 className={styles.heroTitle}>
            ODZYSKAJ <br />
            <span className={styles.outlineText}>SIŁY</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Wejdź do Recovery Room w Ground Zero. Odkryj moc drenażu limfatycznego i strefy relaksu. Zregeneruj ciało i umysł po najcięższym treningu.
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        className={styles.scrollIndicator} 
        onClick={scrollToContent}
        aria-label="Przewiń do następnej sekcji"
      >
        <div className={styles.mouseScroll}></div>
      </button>
    </section>
  );
}
