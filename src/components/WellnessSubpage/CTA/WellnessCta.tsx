"use client";

import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "./WellnessCta.module.scss";

export default function WellnessCta() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateBubbles = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      const totalBubbles = 40;
      starsContainer.innerHTML = "";
      for (let i = 0; i < totalBubbles; i++) {
        let bubble = document.createElement("div");
        bubble.className = styles.bubble;
        // Random size between 2px and 8px
        bubble.style.width = `${Math.random() * 6 + 2}px`;
        bubble.style.height = bubble.style.width;
        // Random position
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        // Random animation duration between 10s and 20s
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
        // Random delay
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(bubble);
      }
    };
    
    generateBubbles();
  }, []);

  return (
    <section className={styles.section}>
      {/* Background bubbles wrapper */}
      <div className={styles.bubblesContainer} ref={starsRef}></div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.wrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>
              ZASŁUGUJESZ NA <span className={styles.accentText}>ODPOCZYNEK</span>
            </h2>
            <p className={styles.text}>
              Nie zapominaj, że prawdziwe efekty buduje się podczas regeneracji. 
              Dołącz do nas, odwiedź Strefę Wellness i sprawdź, jak zregenerowane ciało 
              przekłada się na lepsze wyniki.
            </p>
            
            <div className={styles.socialButtons}>
              <a 
                href="https://www.facebook.com/p/Ground-Zero-Si%C5%82ownia-Niemodlin-61576885212351/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialBtn} ${styles.fb}`}
              >
                <FaFacebookF className={styles.btnIcon} />
                <span>FACEBOOK</span>
              </a>
              <a 
                href="https://www.instagram.com/silownia.niemodlin.groundzero/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialBtn} ${styles.ig}`}
              >
                <FaInstagram className={styles.btnIcon} />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
