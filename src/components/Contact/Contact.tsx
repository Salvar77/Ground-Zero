"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { useDesktopAnimation } from '@/hooks/useDesktopAnimation';
import { industrialSlide } from '@/utils/motion';
import styles from './Contact.module.scss';

const Contact = () => {
  const isDesktop = useDesktopAnimation();

  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.container}>
        
        {/* Schodkowy element informacyjny - KARTA ZAWSZE PIERWSZA W HTML DLA DOBREGO MOBILE UX */}
        <motion.div 
          key={isDesktop ? "desktop-contact-card" : "mobile-contact-card"}
          className={styles.steppedCard}
          {...(isDesktop && {
            variants: industrialSlide("right", 0.1, 0.7),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.2 }
          })}
        >
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>ZNAJDŹ NAS</h2>
            <div className={styles.cyberLine}></div>
          </div>
          
          <div className={styles.infoWrapper}>
            <div className={styles.infoGroup}>
              <span className={styles.label}>
                <FiMapPin className={styles.infoIcon} /> LOKALIZACJA
              </span>
              <p className={styles.text}>
                ul. Opolska 54<br/>
                49-100 Niemodlin
              </p>
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>
                <FiPhone className={styles.infoIcon} /> KONTAKT
              </span>
              <p className={styles.text}>
                <a href="tel:+48666310850" className={styles.link}>
                  666 310 850
                </a>
                <br/>
                <a href="mailto:kontakt@groundzero-niemodlin.pl" className={styles.link} style={{ fontSize: '0.9em' }}>
                  kontakt@groundzero-niemodlin.pl
                </a>
              </p>
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>
                <FiClock className={styles.infoIcon} /> GODZINY OTWARCIA
              </span>
              <p className={styles.text}>
                Pon-Sob: 06:00 - 22:00<br/>
                Niedziela: 13:00 - 21:00
              </p>
            </div>
          </div>

          <a 
            href="https://share.google/diniwT8BAhxoWrOd2" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.navBtn}
          >
            WYZNACZ TRASĘ
          </a>
        </motion.div>

        {/* Mapa - W CSS NA DESKTOPIE WEDRUJE NA LEWO */}
        <motion.div 
          key={isDesktop ? "desktop-contact-map" : "mobile-contact-map"}
          className={styles.mapWrapper}
          {...(isDesktop && {
            variants: industrialSlide("left", 0.0, 0.7),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.2 }
          })}
        >
          <div className={styles.mapOverlay}></div>
          <iframe 
            src="https://maps.google.com/maps?q=Ground%20Zero%20Niemodlin&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
