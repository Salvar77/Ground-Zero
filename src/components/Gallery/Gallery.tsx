"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, heavyHit, powerCharge } from "@/utils/motion";
import styles from "./Gallery.module.scss";

type ImageItem = {
  id: number;
  src: string;
  category: string;
  size: "normal" | "wide" | "tall";
};

// Zastępcze obrazy z picsum
const DUMMY_IMAGES: ImageItem[] = [
  { id: 1, src: "https://picsum.photos/seed/gz1/800/600", category: "Siłownia", size: "wide" },
  { id: 2, src: "https://picsum.photos/seed/gz2/600/800", category: "Cross", size: "tall" },
  { id: 3, src: "https://picsum.photos/seed/gz3/800/600", category: "MMA", size: "normal" },
  { id: 4, src: "https://picsum.photos/seed/gz4/800/600", category: "Fitness", size: "normal" },
  { id: 5, src: "https://picsum.photos/seed/gz5/800/600", category: "Cross", size: "normal" },
  { id: 6, src: "https://picsum.photos/seed/gz6/800/600", category: "Siłownia", size: "normal" },
  { id: 7, src: "https://picsum.photos/seed/gz7/800/600", category: "MMA", size: "wide" },
  { id: 8, src: "https://picsum.photos/seed/gz8/800/600", category: "Siłownia", size: "normal" },
];

const CATEGORIES = ["Wszystkie", "Siłownia", "Cross", "MMA", "Fitness"];

export default function Gallery() {
  const [filter, setFilter] = useState("Wszystkie");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredImages = DUMMY_IMAGES.filter(
    (img) => filter === "Wszystkie" || img.category === filter
  );

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        
        <motion.div 
          className={styles.header}
          variants={heavyHit()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.bgText}>GALLERY</div>
          <span className={styles.badge}>ZOBACZ NAS</span>
          <h2 className={styles.title}>
            NASZA <span>GALERIA</span>
          </h2>
          <p className={styles.subtitle}>
            Zobacz jak wygląda najlepszy klub fitness w regionie. Nowoczesny sprzęt, świetna strefa wolnych ciężarów i niepowtarzalny, drapieżny klimat.
          </p>
        </motion.div>

        <motion.div 
          className={styles.filters}
          variants={powerCharge()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.activeFilter : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`${styles.item} ${styles[img.size]}`}
                onClick={() => setLightboxImg(img.src)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={`Galeria ${img.category}`} className={styles.image} loading="lazy" />
                <div className={styles.itemOverlay}>
                  <div className={styles.zoomIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <button className={styles.lightboxClose} onClick={() => setLightboxImg(null)}>✕</button>
            <motion.img
              src={lightboxImg}
              alt="Powiększenie"
              className={styles.lightboxImg}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // żeby nie zamykało klikając w sam obrazek
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
