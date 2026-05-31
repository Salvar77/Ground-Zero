"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaDumbbell, FaFireAlt, FaHeartbeat, FaFistRaised, FaRegCalendarCheck, FaChartLine } from "react-icons/fa";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { industrialSlide, heavyHit, staggerContainer } from "@/utils/motion";
import styles from "./TrainersPage.module.scss";

export default function TrainersPage() {
  const isDesktop = useDesktopAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className={styles.trainersPage} ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroImgBg}></div>
          <div className={styles.overlay}></div>
        </div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.cyberBadge}>
            <div className={styles.glitchBlock}></div>
            <span className={styles.badgeText}>ELITA GROUND ZERO</span>
          </div>
          <h1 className={styles.heroTitle}>
            TWOJA TRANSFORMACJA <br />
            <span className={styles.outlineText}>ZACZYNA SIĘ TUTAJ</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Poznaj ekspertów, którzy nie uznają półśrodków. Przesuń swoje granice pod okiem profesjonalistów z wieloletnim doświadczeniem.
          </p>
        </motion.div>
      </section>

      {/* 2. DUAL SPLIT SECTION (KACPER & NIKOLA) */}
      <section className={styles.trainersSplitSection}>
        {/* Tło ozdobne - okręgi stylizowane na talerze od sztangi / techniczny radar */}
        <div className={styles.plateOrnaments}>
          <div className={styles.concentricCircle1}></div>
          <div className={styles.concentricCircle2}></div>
          <div className={styles.gridOverlay}></div>
        </div>

        <div className={styles.trainersContainer}>
          
          {/* KACPER MILLER */}
          <div className={styles.profileRow}>
            <motion.div 
              className={styles.profileImageContainer}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`${styles.neonGlow} ${styles.neonGlowKacper}`}></div>
              <div className={`${styles.decoCorner} ${styles.cornerKacper}`}></div>
              <Image 
                src="/images/kacper-miller-placeholder.webp"
                alt="Kacper Miller - Trener Personalny Niemodlin"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.profileImg}
              />
            </motion.div>

            <motion.div 
              className={styles.profileInfo}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={`${styles.nameBadge} ${styles.badgeKacper}`}>HARDCORE & SIŁA</span>
              <h2 className={styles.name}>KACPER MILLER</h2>
              <p className={styles.desc}>
                Specjalista od ciężkiego sprzętu i żelaznej dyscypliny. Jego domeną jest <strong>trening siłowy, hipertrofia i sporty walki</strong>. Jeśli chcesz budować masę mięśniową, siłę absolutną lub przygotować się motorycznie pod MMA – Kacper wyciśnie z Ciebie 110% normy.
              </p>
              
              <div className={styles.featuresList}>
                <div className={`${styles.featItem} ${styles.kacperFeat}`}>
                  <FaDumbbell className={styles.featIcon} />
                  <span>Trening Siłowy i Budowa Masy Mięśniowej</span>
                </div>
                <div className={`${styles.featItem} ${styles.kacperFeat}`}>
                  <FaFistRaised className={styles.featIcon} />
                  <span>Przygotowanie Motoryczne pod Sporty Walki (MMA)</span>
                </div>
                <div className={`${styles.featItem} ${styles.kacperFeat}`}>
                  <FaChartLine className={styles.featIcon} />
                  <span>Zaawansowana Rekompozycja Sylwetki</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* NIKOLA MILLER */}
          <div className={`${styles.profileRow} ${styles.reverse}`}>
            <motion.div 
              className={`${styles.profileInfo} ${styles.reverseInfo}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${styles.nameBadge} ${styles.badgeNikola}`}>FITNESS & KOBIECA SIŁA</span>
              <h2 className={styles.name}>NIKOLA MILLER</h2>
              <p className={styles.desc}>
                Ekspertka od fitnessu i kształtowania kobiecej sylwetki. Nikola łamie stereotypy, pokazując że <strong>silna kobieta to piękna kobieta</strong>. Skupia się na pośladkach, spalaniu tkanki tłuszczowej i budowaniu niezachwianej pewności siebie na sali treningowej.
              </p>
              
              <div className={styles.featuresList}>
                <div className={`${styles.featItem} ${styles.nikolaFeat}`}>
                  <FaFireAlt className={styles.featIcon} />
                  <span>Spalanie Tkanki Tłuszczowej i Redukcja Wagi</span>
                </div>
                <div className={`${styles.featItem} ${styles.nikolaFeat}`}>
                  <FaHeartbeat className={styles.featIcon} />
                  <span>Kształtowanie Pośladków i Modelowanie Sylwetki</span>
                </div>
                <div className={`${styles.featItem} ${styles.nikolaFeat}`}>
                  <FaRegCalendarCheck className={styles.featIcon} />
                  <span>Plany Treningowe Skrojone pod Kobiety</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={`${styles.profileImageContainer} ${styles.reverseImage}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`${styles.neonGlow} ${styles.neonGlowNikola}`}></div>
              <div className={`${styles.decoCorner} ${styles.cornerNikola}`}></div>
              <Image 
                src="/images/nikola-miller-placeholder.webp"
                alt="Nikola Miller - Instruktorka Fitness Niemodlin"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.profileImg}
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. OFFER / SERVICES */}
      <section className={styles.offerSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.secTitle}>JAK MOŻEMY CI <span>POMÓC?</span></h2>
          </motion.div>

          <div className={styles.offerGrid}>
            <motion.div 
              className={styles.offerCard}
              variants={heavyHit()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <FaDumbbell className={styles.offerIcon} />
              <h3 className={styles.offerTitle}>Trening Personalny 1:1</h3>
              <p className={styles.offerDesc}>100% uwagi trenera skupione na Tobie. Korygujemy technikę, motywujemy do walki i dbamy o Twoje bezpieczeństwo na każdym kroku.</p>
            </motion.div>
            
            <motion.div 
              className={styles.offerCard}
              variants={heavyHit()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaChartLine className={styles.offerIcon} />
              <h3 className={styles.offerTitle}>Prowadzenie Online</h3>
              <p className={styles.offerDesc}>Brak czasu na spotkania na żywo? Otrzymujesz od nas pełen pakiet: dietę, plan treningowy w aplikacji oraz stały kontakt i analizę video.</p>
            </motion.div>
            
            <motion.div 
              className={styles.offerCard}
              variants={heavyHit()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaRegCalendarCheck className={styles.offerIcon} />
              <h3 className={styles.offerTitle}>Plany Treningowe</h3>
              <p className={styles.offerDesc}>Indywidualnie rozpisany harmonogram ćwiczeń, dostosowany do Twojego celu, poziomu zaawansowania oraz dostępnego czasu.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATIONS (PLACEHOLDER) */}
      <section className={styles.transformationsSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.secTitle}><span>EFEKTY</span> MÓWIĄ SAME ZA SIEBIE</h2>
          </motion.div>

          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.placeholderText}>MIEJSCE NA<br/>METAMORFOZĘ #{i}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.ctaTitle}>PRZESTAŃ ZACZYNAĆ OD JUTRA</h2>
          <p className={styles.ctaDesc}>Skontaktuj się z nami i umów na pierwszą bezpłatną konsultację. Pokażemy Ci, jak trenować mądrze i skutecznie.</p>
          <Link href="https://www.facebook.com/p/Ground-Zero-Si%C5%82ownia-Niemodlin-61576885212351/" target="_blank" className={styles.ctaButton}>
            <span className={styles.btnText}>NAPISZ DO NAS</span>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
