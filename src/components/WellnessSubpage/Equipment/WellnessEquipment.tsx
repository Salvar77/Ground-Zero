"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { industrialSlide } from "@/utils/motion";
import { FaBolt } from "react-icons/fa";
import styles from "./WellnessEquipment.module.scss";

export default function WellnessEquipment() {
  const isDesktop = useDesktopAnimation();

  return (
    <section className={styles.equipmentSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <motion.div 
            className={styles.textContent}
            {...(isDesktop && {
              variants: industrialSlide("left", 0.1, 0.7),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.3 }
            })}
          >
            <div className={styles.badge}>
              <FaBolt className={styles.badgeIcon} />
              <span>REGENERACJA PREMIUM</span>
            </div>
            
            <h2 className={styles.title}>
              RECOVERY <br />
              <span className={styles.accentText}>ROOM</span>
            </h2>
            
            <p className={styles.description}>
              W naszej strefie Wellness znajdziesz specjalistyczny pokój do odnowy biologicznej. 
              To idealne miejsce na przyspieszenie regeneracji, rozluźnienie napiętych mięśni i głęboki relaks po ciężkim treningu.
            </p>
            
            <ul className={styles.benefitsList}>
              <li>
                <div className={styles.bullet}></div>
                <span><strong>Drenaż limfatyczny (2 stanowiska):</strong> Profesjonalna presoterapia, która błyskawicznie redukuje obrzęki i przyspiesza usuwanie kwasu mlekowego ("lekkie nogi").</span>
              </li>
              <li>
                <div className={styles.bullet}></div>
                <span><strong>Pistolet masujący:</strong> Głęboki masaż perkusywny, idealny do precyzyjnego rozbijania punktów spustowych i najbardziej spiętych powięzi.</span>
              </li>
              <li>
                <div className={styles.bullet}></div>
                <span><strong>Masażer do karku:</strong> Odprężający i rozgrzewający masaż karku oraz szyi, rewelacyjnie niwelujący stres i sztywność po całym dniu pracy.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className={styles.imageContent}
            {...(isDesktop && {
              variants: industrialSlide("right", 0.3, 0.7),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.3 }
            })}
          >
            <div className={styles.imageWrapper}>
              {/* Zmień ten placeholder na prawdziwe zdjęcie Normatec / nogawek w Ground Zero */}
              <Image 
                src="/images/drenaz-limfatyczny-wellness.webp" 
                alt="System drenażu limfatycznego - buty kompresyjne w Ground Zero"
                width={600}
                height={600}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.cornerDecor}></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
