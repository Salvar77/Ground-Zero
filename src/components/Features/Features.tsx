"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDesktopAnimation } from '@/hooks/useDesktopAnimation';
import { staggerContainer, heavyHit, stealthReveal } from '@/utils/motion';
import styles from './Features.module.scss';

const featuresData = [
  {
    id: '01',
    title: 'STREFA WOLNYCH CIĘŻARÓW',
    desc: 'Prawdziwe żelazo dla prawdziwych wyników. Hantle, gryfy olimpijskie i profesjonalne pomosty ciężarowe dla wyciskających siódme poty.',
    image: '/images/hantle-wolne-ciezary-silownia-ground-zero-niemodlin.webp'
  },
  {
    id: '02',
    title: 'MASZYNY PÓŁWOLNE',
    desc: 'Najwyższej klasy sprzęt typu Hammer. Maszyny, które wybaczają błędy w technice, ale nie wybaczają słabości na treningu.',
    image: '/images/maszyny-treningowe-strefa-silownia-ground-zero-niemodlin.webp'
  },
  {
    id: '03',
    title: 'TRENING FUNKCJONALNY',
    desc: 'Kettlebells, liny, boxy i klatka treningowa. Zbuduj kondycję, siłę eksplozywną i mobilność w jednym miejscu.',
    image: '/images/ground_zero_functional_training.png'
  }
];

const Features = () => {
  const isDesktop = useDesktopAnimation();

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        
        <motion.div 
          key={isDesktop ? "desktop-features-header" : "mobile-features-header"}
          className={styles.header}
          {...(isDesktop && {
            variants: staggerContainer(0.1),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.3 }
          })}
        >
          <div className={styles.bgText}>ZONES</div>
          <motion.h2 
            className={styles.title}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            Twój punkt <span>startowy</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            Nie uznajemy kompromisów. Stworzyliśmy przestrzeń, w której każdy znajdzie sprzęt dopasowany do swoich celów – od amatora po zawodowca.
          </motion.p>
        </motion.div>

        <motion.div 
          key={isDesktop ? "desktop-features-grid" : "mobile-features-grid"}
          className={styles.grid}
          {...(isDesktop && {
            variants: staggerContainer(0.18, 0.1),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.15 }
          })}
        >
          {featuresData.map((feature) => (
            <motion.div 
              key={feature.id} 
              className={styles.card}
              {...(isDesktop && { variants: heavyHit() })}
            >
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  unoptimized
                  className={styles.cardBgImage} 
                />
                <div className={styles.cardOverlay}></div>
              </div>

              <div className={styles.cardNumber}>{feature.id}</div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>

              <div className={styles.cyberDeco}></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
