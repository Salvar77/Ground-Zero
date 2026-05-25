"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { staggerContainer, stealthReveal, heavyHit } from "@/utils/motion";
import styles from "./Hero.module.scss";

export default function Hero() {
  const isDesktop = useDesktopAnimation();

  return (
    <section className={styles.hero}>
      {/* Background Image & Effects */}
      <div className={styles.bgImage}>
        <div className={styles.overlay}></div>
        <div className={styles.blueGlow}></div>
      </div>

      {/* Decorative Grid Lines */}
      <div className={styles.gridOverlay}></div>

      {/* Cyberpunk Crown Cut Bottom Overlays */}
      <div className={styles.crownGlow}></div>
      <div className={styles.crownCut}></div>

      <div className={styles.container}>
        <motion.div 
          key={isDesktop ? "desktop-hero-content" : "mobile-hero-content"}
          className={styles.content}
          {...(isDesktop && {
            variants: staggerContainer(0.12, 0.1),
            initial: "hidden",
            animate: "show"
          })}
        >
          <motion.div 
            className={styles.badge}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            <span className={styles.badgeText}>
              SIŁOWNIA GROUND ZERO NIEMODLIN
            </span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            TWOJE MIEJSCE.
            <br />
            TWÓJ CEL.
            <br />
            <span className={styles.accent}>NASZE WSPARCIE.</span>
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            PONAD 300 M² PRZESTRZENI TRENINGOWEJ, NOWOCZESNY SPRZĘT,
            PROFESJONALNI TRENERZY. ZBUDUJ FORMĘ BEZ WYMÓWEK.
          </motion.p>

          <motion.div 
            className={styles.buttons}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            <Link href="/kontakt" className={styles.primaryBtn}>
              <span className={styles.btnText}>DOŁĄCZ DO NAS</span>
              <span className={styles.btnDeco}></span>
            </Link>
            <Link href="#grafik" className={styles.secondaryBtn}>
              <span className={styles.btnText}>GRAFIK ZAJĘĆ</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Angled Stats Row */}
        <motion.div 
          key={isDesktop ? "desktop-hero-stats" : "mobile-hero-stats"}
          className={styles.statsContainer}
          {...(isDesktop && {
            variants: heavyHit(0.6),
            initial: "hidden",
            animate: "show"
          })}
        >
          <div className={styles.statsWrapper}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>40+</span>
              <span className={styles.statLabel}>STANOWISK</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                300<span className={styles.smallUnit}>M²</span>
              </span>
              <span className={styles.statLabel}>PRZESTRZENI</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>PRO</span>
              <span className={styles.statLabel}>TRENERZY</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>MOTYWACJI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
