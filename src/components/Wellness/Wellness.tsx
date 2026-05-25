import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Wellness.module.scss";

export default function Wellness() {
  return (
    <section id="wellness" className={styles.wellness}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Graphic/Image Left */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageBorder}></div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/ground_zero_wellness.png" 
                alt="Strefa Wellness i Sauna" 
                width={600} 
                height={500} 
                style={{ width: "100%", height: "auto" }}
                className={styles.gymImage}
              />
              <div className={styles.glowOverlay}></div>
            </div>
            
            {/* Cyberpunk Deco Accents */}
            <div className={styles.cyberTag}>RELAX_ZONE</div>
            <div className={styles.cyberCorner}></div>
          </div>

          {/* Content Right */}
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.bgText}>SAUNA</div>
              <span className={styles.badge}>STREFA WELLNESS</span>
              <h2 className={styles.title}>
                REGENERACJA NA<br />
                <span>NAJWYŻSZYM</span> POZIOMIE
              </h2>
            </div>
            
            <p className={styles.description}>
              Po ciężkim treningu Twoje ciało zasługuje na najlepszy odpoczynek. 
              Skorzystaj z naszej ekskluzywnej <strong>strefy saun i pokoju relaksu</strong>. 
              To tutaj zbudujesz odporność, przyspieszysz regenerację włókien mięśniowych 
              oraz oczyścisz umysł z codziennego stresu. Prawdziwa odnowa biologiczna 
              dostępna dla każdego klubowicza.
            </p>

            <div className={styles.btnWrapper}>
              <Link href="/strefa-wellness" className={styles.ctaBtn}>
                ZOBACZ STREFĘ WELLNESS
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
