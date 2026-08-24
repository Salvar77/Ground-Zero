"use client";

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { staggerContainer, stealthReveal, heavyHit } from "@/utils/motion";
import Marquee from "@/components/Marquee/Marquee";
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
            PONAD 400 M² PRZESTRZENI TRENINGOWEJ, NOWOCZESNY SPRZĘT,
            PROFESJONALNI TRENERZY. ZBUDUJ FORMĘ BEZ WYMÓWEK.
          </motion.p>

          <motion.div
            {...(isDesktop && { variants: stealthReveal() })}
          >
            <Marquee />
          </motion.div>

          <motion.div 
            className={styles.contactInfo}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            <a href="https://maps.app.goo.gl/YourLink" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <FaMapMarkerAlt /> ul. Opolska 54, 49-100 Niemodlin
            </a>
            <a href="tel:+48666310850" className={styles.contactItem}>
              <FaPhoneAlt /> 666 310 850
            </a>
          </motion.div>

          <motion.div 
            className={styles.buttons}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            <Link href="#consultation" className={styles.primaryBtn}>
              <span className={styles.btnText}>DARMOWA KONSULTACJA</span>
              <span className={styles.btnDeco}></span>
            </Link>
            <Link href="/grafik" className={styles.secondaryBtn}>
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
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>STANOWISK</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                400<span className={styles.smallUnit}>M²</span>
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
