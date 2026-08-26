"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { staggerContainer, heavyHit, stealthReveal } from "@/utils/motion";
import styles from "./Trainers.module.scss";

type Trainer = {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  image: string;
  description: string;
};

const trainersData: Trainer[] = [
  {
    id: "t1",
    name: "Nicole",
    role: "Trenerka Personalna",
    specialization: [
      "Kształtowanie Sylwetki",
      "Budowanie Siły",
      "Trening Siłowy",
    ],
    image: "/images/trenerka-wlascicielka-nikola-miller.webp",
    description:
      "Trening siłowy to jej pasja. Pomaga kobietom w budowaniu silnej i wymodelowanej sylwetki. Skupia się na poprawie sprawności, sile i udowadnia, że każdy trening to rozmowa z Twoją siłą.",
  },
  {
    id: "t2",
    name: "Kacper",
    role: "Trener Personalny",
    specialization: [
      "Trening Siłowy",
      "Kształtowanie Sylwetki",
      "Rehabilitacja Ruchowa",
    ],
    image: "/images/trener-wlasciciel-kacper-miller.webp",
    description:
      "Pomaga budować silne, sprawne i wydolne ciało — niezależnie od tego, czy Twoim celem jest poprawa sylwetki, zwiększenie siły, lepsza kondycja, czy przygotowanie do sportowej rywalizacji.",
  }
];

export default function Trainers() {
  const isDesktop = useDesktopAnimation();

  return (
    <section id="trenerzy" className={styles.trainers}>
      <div className={styles.container}>
        <motion.div 
          key={isDesktop ? "desktop-trainers-header" : "mobile-trainers-header"}
          className={styles.header}
          {...(isDesktop && {
            variants: staggerContainer(0.1),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.3 }
          })}
        >
          <div className={styles.bgText}>TEAM</div>
          <span className={styles.badge}>NASZA KADRA</span>
          <motion.h2 
            className={styles.title}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            Trenuj z <span>najlepszymi</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            {...(isDesktop && { variants: stealthReveal() })}
          >
            Poznaj ekspertów, którzy nie uznają półśrodków. Przesuń swoje granice pod okiem profesjonalistów z wieloletnim doświadczeniem. <br/><strong className={styles.highlightText}>NIE SPRZEDAJEMY TRENINGU TYLKO REZULTAT</strong>
          </motion.p>
        </motion.div>

        <motion.div 
          key={isDesktop ? "desktop-trainers-grid" : "mobile-trainers-grid"}
          className={styles.grid}
          {...(isDesktop && {
            variants: staggerContainer(0.18, 0.1),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.15 }
          })}
        >
          {trainersData.map((trainer) => (
            <motion.div 
              key={trainer.id} 
              className={styles.card}
              {...(isDesktop && { variants: heavyHit() })}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={380}
                  height={450}
                  style={{ width: "100%", height: "auto" }}
                  className={styles.trainerImage}
                />
                <div className={styles.cardOverlay}></div>

                {/* Cyberpunk Deco Line */}
                <div className={styles.diagonalCut}></div>
              </div>

              <div className={styles.cardInfo}>
                <span className={styles.role}>{trainer.role}</span>
                <h3 className={styles.name}>{trainer.name}</h3>

                <p className={styles.desc}>{trainer.description}</p>

                <div className={styles.specs}>
                  {trainer.specialization.map((spec, index) => (
                    <span key={index} className={styles.specBadge}>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          key={isDesktop ? "desktop-trainers-btn" : "mobile-trainers-btn"}
          className={styles.btnWrapper}
          {...(isDesktop && {
            variants: stealthReveal(0.3),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true }
          })}
        >
          <Link href="/trenerzy" className={styles.ctaBtn}>
            POZNAJ NAS BLIŻEJ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
