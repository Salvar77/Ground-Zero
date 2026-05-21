import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="o-nas" className={styles.about}>
      <div className={styles.container}>
        
        <div className={styles.grid}>
          {/* Content Left */}
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.bgText}>ABOUT</div>
              <span className={styles.badge}>O NASZEJ SIŁOWNI</span>
              <h2 className={styles.title}>
                ZBUDOWANE Z PASJI,<br />
                <span>SKONSTRUOWANE</span> DLA WYNIKÓW
              </h2>
            </div>
            
            <p className={styles.description}>
              Ground Zero Niemodlin to nie jest kolejna bezduszna sieciówka. To nowoczesne 
              centrum treningowe o powierzchni ponad <strong>300 m²</strong>, stworzone przez pasjonatów 
              dla wszystkich, którzy chcą od życia czegoś więcej. Nie znajdziesz tu wymówek – 
              znajdziesz za to profesjonalny sprzęt, zintegrowaną społeczność i atmosferę, 
              która motywuje do ciężkiej pracy od wejścia.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L9 17L20 6" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Indywidualne Podejście</h4>
                  <p className={styles.featureDesc}>
                    Nasi trenerzy pomogą Ci dopasować trening do Twoich celów i możliwości zdrowotnych.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L9 17L20 6" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Wszechstronny Rozwój</h4>
                  <p className={styles.featureDesc}>
                    Od ciężarów, przez Cross i Fitness, aż po sporty walki (MMA) – rozwijamy każdą cechę motoryczną.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L9 17L20 6" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Sprzęt Klasy Premium</h4>
                  <p className={styles.featureDesc}>
                    Starannie wyselekcjonowane maszyny półwolne Hammer, strefa wolnych ciężarów i profesjonalna klatka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic/Image Right */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageBorder}></div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/ground_zero_gym_interior.png" 
                alt="Ground Zero Gym Interior" 
                width={600} 
                height={500} 
                style={{ width: "100%", height: "auto" }}
                className={styles.gymImage}
              />
              <div className={styles.glowOverlay}></div>
            </div>
            
            {/* Cyberpunk Deco Accents */}
            <div className={styles.cyberTag}>GZ_STUDIO_2026</div>
            <div className={styles.cyberCorner}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
