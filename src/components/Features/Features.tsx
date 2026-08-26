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
    title: 'SALA TRENINGU SIŁOWEGO',
    image: '/images/strefa-wolnych-ciezarow-hantle-ground-zero-niemodlin.webp'
  },
  {
    id: '02',
    title: 'SALA FITNESS I SPORTÓW WALKI',
    image: '/images/strefa-sportow-walki-mma-worek-treningowy-ground-zero-niemodlin.webp'
  },
  {
    id: '03',
    title: 'SALA TRENINGU FUNKCJONALNEGO',
    image: '/images/rowerek-powietrzny-air-bike-trening-funkcjonalny-ground-zero-niemodlin.webp'
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
