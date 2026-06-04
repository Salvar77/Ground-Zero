"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFireAlt, FaHeartbeat, FaLeaf, FaWater } from "react-icons/fa";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import styles from "./WellnessFeatures.module.scss";

const features = [
  {
    id: 1,
    title: "SAUNA FIŃSKA",
    desc: "Temperatura sięgająca 90-100°C. Idealna do głębokiego oczyszczenia organizmu z toksyn i rozluźnienia napiętych mięśni po treningu siłowym.",
    icon: <FaFireAlt />,
    delay: 0.1,
  },
  {
    id: 2,
    title: "ODNOWA BIOLOGICZNA",
    desc: "Przyspiesz regenerację włókien mięśniowych, popraw krążenie i zmniejsz ryzyko kontuzji dzięki regularnym sesjom w strefie wellness.",
    icon: <FaHeartbeat />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "POKÓJ RELAKSU",
    desc: "Strefa wyciszenia, gdzie po sesji w saunie możesz odciąć się od bodźców, uspokoić oddech i w pełni zrelaksować umysł.",
    icon: <FaLeaf />,
    delay: 0.3,
  },
  {
    id: 4,
    title: "TERAPIA KONTRASTOWA",
    desc: "Możliwość schłodzenia organizmu po wyjściu z sauny poprawia wydolność układu immunologicznego i krążenia.",
    icon: <FaWater />,
    delay: 0.4,
  }
];

export default function WellnessFeatures() {
  const isDesktop = useDesktopAnimation();

  return (
    <section className={styles.featuresSection}>
      {/* Decorative Background Elements */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>CO OFERUJE <span className={styles.accentText}>STREFA WELLNESS?</span></h2>
          <div className={styles.cyberLine}></div>
          <p className={styles.subtitle}>
            Stworzyliśmy przestrzeń, która kompleksowo dba o Twoją regenerację. 
            Nie musisz być zawodowcem, by korzystać z profesjonalnej odnowy.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: isDesktop ? feature.delay : 0 }}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
                <div className={styles.cardCyberEdge}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
