import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image & Effects */}
      <div className={styles.bgImage}>
        <div className={styles.overlay}></div>
        <div className={styles.blueGlow}></div>
      </div>

      {/* Decorative Grid Lines */}
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>SIŁOWNIA GROUND ZERO NIEMODLIN</span>
          </div>
          
          <h1 className={styles.title}>
            TWOJE MIEJSCE.<br />
            TWÓJ CEL.<br />
            <span className={styles.accent}>NASZE WSPARCIE.</span>
          </h1>
          
          <p className={styles.subtitle}>
            PONAD 300 M² PRZESTRZENI TRENINGOWEJ, NOWOCZESNY SPRZĘT, PROFESJONALNI TRENERZY. ZBUDUJ FORMĘ BEZ WYMÓWEK.
          </p>
          
          <div className={styles.buttons}>
            <Link href="#cennik" className={styles.primaryBtn}>
              <span className={styles.btnText}>DOŁĄCZ DO NAS</span>
              <span className={styles.btnDeco}></span>
            </Link>
            <Link href="#grafik" className={styles.secondaryBtn}>
              <span className={styles.btnText}>GRAFIK ZAJĘĆ</span>
            </Link>
          </div>
        </div>

        {/* Angled Stats Row */}
        <div className={styles.statsContainer}>
          <div className={styles.statsWrapper}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>40+</span>
              <span className={styles.statLabel}>STANOWISK</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>300<span className={styles.smallUnit}>M²</span></span>
              <span className={styles.statLabel}>PRZESTRZENI</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>PRO</span>
              <span className={styles.statLabel}>TRENERZY</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>MOTYWACJI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
