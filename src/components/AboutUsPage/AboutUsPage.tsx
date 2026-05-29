"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { industrialSlide } from "@/utils/motion";
import { FaDumbbell, FaUsers, FaFireAlt, FaGem, FaFacebookF, FaInstagram, FaChevronDown } from "react-icons/fa";
import styles from "./AboutUsPage.module.scss";

export default function AboutUsPage() {
  const isDesktop = useDesktopAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth"
    });
  };

  const fundamenty = [
    {
      title: "Sprzęt Premium",
      desc: "Maszyny półwolne Hammer Strength i najwyższej klasy wolny ciężar, który nie uznaje kompromisów. Każda maszyna została wyselekcjonowana tak, aby zapewnić optymalną biomechanikę ruchu i maksymalne czucie mięśniowe.",
      icon: <FaDumbbell />,
      delay: 0.1,
      color: "#0066ff" // Blue
    },
    {
      title: "Brak Wymówek",
      desc: "Surowa atmosfera, która nakręca do najcięższej pracy od momentu wejścia na salę. Zapomnij o strefach relaksu – u nas liczy się pot, przełamywanie barier i konsekwentna realizacja celów.",
      icon: <FaFireAlt />,
      delay: 0.2,
      color: "#ff3333" // Red
    },
    {
      title: "Społeczność",
      desc: "Ekipa pasjonatów wspierająca się w najtrudniejszych seriach. Niezależnie od tego, czy to Twój pierwszy trening, czy przygotowania do zawodów, znajdziesz tu motywację i szacunek od innych.",
      icon: <FaUsers />,
      delay: 0.3,
      color: "#ffcc00" // Yellow
    },
    {
      title: "Wsparcie",
      desc: "Nasi trenerzy stale czuwają nad Twoją techniką i pomagają wyciągnąć maksimum z każdego treningu. Indywidualne podejście, szybka korekta błędów i ogromna wiedza praktyczna.",
      icon: <FaGem />,
      delay: 0.4,
      color: "#00cc66" // Green
    }
  ];

  return (
    <div className={styles.aboutPage} ref={containerRef}>
      {/* 1. HERO SECTION (ATMOSPHERIC FADE) */}
      <section className={styles.heroSection}>
        <motion.div className={styles.heroBackground} style={{ y: yBackground }}>
          <div className={styles.overlay}></div>
          {/* Bottom fade gradient to seamlessly blend into next section */}
          <div className={styles.bottomFade}></div>
          <Image 
            src="/images/ground-zero-niemodlin-silownia-fitness-hero.webp" 
            alt="Ground Zero Niemodlin" 
            fill
            sizes="100vw"
            quality={100}
            priority
            className={styles.heroImg}
          />
        </motion.div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.cyberBadge}>
            <div className={styles.glitchBlock}></div>
            <span className={styles.badgeText}>ZBUDOWANE Z PASJI</span>
          </div>
          <h1 className={styles.heroTitle}>
            TO NIE JEST <br />
            <span className={styles.outlineText}>KOLEJNA</span> SIECIÓWKA
          </h1>
          <p className={styles.heroSubtitle}>
            Poznaj miejsce, w którym kończą się wymówki, a zaczynają prawdziwe rezultaty. Witaj w Ground Zero.
          </p>

          <div className={styles.heroMiniFeatures}>
            <div className={styles.miniFeature}>
              <FaFireAlt className={styles.mfIcon} />
              <span>PROFESJONALNA KADRA</span>
            </div>
            <div className={styles.mfDivider}></div>
            <div className={styles.miniFeature}>
              <FaDumbbell className={styles.mfIcon} />
              <span>SPRZĘT PREMIUM</span>
            </div>
          </div>
        </motion.div>
        
        <div className={styles.scrollIndicator} onClick={scrollToContent}>
          <div className={styles.mouseScroll}>
            <span>PRZEWIŃ</span>
            <FaChevronDown className={styles.arrowIcon} />
          </div>
        </div>

        {/* Unique glowing barbell line instead of a shape cut */}
        <div className={styles.barbellDivider}>
          <div className={styles.plate}></div>
          <div className={styles.bar}></div>
          <div className={styles.plate}></div>
        </div>
      </section>

      {/* 2. STORY SECTION (WITH GIANT TEXT RESTORED) */}
      <section className={styles.storySection}>
        {/* The giant text stays here exactly as you wanted */}
        <div className={styles.giantBgText}>GROUND ZERO</div>
        
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div 
              className={styles.storyTextContent}
              variants={industrialSlide("left", 0.1, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className={styles.sectionTitle}>
                <span className={styles.neonAccent}>//</span> NASZA WIZJA
              </h2>
              <h3 className={styles.storyHeadline}>
                ZBUDOWANE Z PASJI. <br />STWORZONE DLA CIEBIE.
              </h3>
              <div className={styles.paragraphs}>
                <p>
                  Siłownia <strong>Ground Zero</strong> w Niemodlinie, stworzona w 2025 roku, to nowoczesne centrum treningowe o powierzchni ponad 300 m². Powstaliśmy z prostej potrzeby: stworzyć miejsce na mapie Opolszczyzny, w którym panuje prawdziwa sportowa atmosfera.
                </p>
                <p>
                  Nie znajdziesz u nas oceniających spojrzeń. Stawiamy na <strong>kompleksowy rozwój</strong> – od treningów personalnych, przez zajęcia funkcjonalne, aż po treningi siłowe i przestrzeń dla zawodników MMA.
                </p>
              </div>
              
              <div className={styles.stats}>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>300<span className={styles.plus}>+</span></span>
                  <span className={styles.statLabel}>m² POWIERZCHNI</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>100<span className={styles.plus}>%</span></span>
                  <span className={styles.statLabel}>ZAANGAŻOWANIA</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.storyImageContent}
              variants={industrialSlide("right", 0.2, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.imageCard}>
                <Image 
                  src="/images/maszyny-treningowe-strefa-silownia-ground-zero-niemodlin.webp" 
                  alt="Strefa treningowa siłowni Ground Zero"
                  width={550}
                  height={650}
                  className={styles.storyImg}
                />
                <div className={styles.ownerTag}>
                  <span className={styles.role}>WŁAŚCICIEL / ZAŁOŻYCIEL</span>
                  <span className={styles.name}>Kacper Miller</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION (DARK GYM AESTHETIC WITH MULTICOLOR STAIRCASE) */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.valuesHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitleCenter}>FUNDAMENTY GROUND ZERO</h2>
            <div className={styles.accentLine}></div>
          </motion.div>

          <div className={styles.valuesGrid}>
            {fundamenty.map((val, idx) => (
              <motion.div 
                key={idx}
                className={styles.darkCard}
                style={{ "--card-color": val.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: isDesktop ? val.delay : 0 }}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.darkCardInner}>
                  <div className={styles.iconContainer}>
                    {val.icon}
                  </div>
                  <h4 className={styles.darkTitle}>{val.title}</h4>
                  <p className={styles.darkDesc}>{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / CONNECT (GLASSMORPHISM) */}
      <section className={styles.socialSection}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>

        <div className={styles.container}>
          <motion.div 
            className={styles.socialGlassCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.glassBg}></div>
            
            <div className={styles.socialContent}>
              <div className={styles.textContent}>
                <h2 className={styles.socialTitle}>
                  DOŁĄCZ DO NAS W SIECI
                </h2>
                <p className={styles.socialDesc}>
                  Śledź nasz profil, sprawdzaj relacje z treningów, nowości sprzętowe i grafiki zajęć. Bądź na bieżąco!
                </p>
              </div>
              
              <div className={styles.socialButtons}>
                <a href="https://www.facebook.com/p/Ground-Zero-Si%C5%82ownia-Niemodlin-61576885212351/" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.fb}`}>
                  <div className={styles.btnGlow}></div>
                  <FaFacebookF className={styles.btnIcon} />
                  <span>FACEBOOK</span>
                </a>
                <a href="https://www.instagram.com/silownia.niemodlin.groundzero/" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.ig}`}>
                  <div className={styles.btnGlow}></div>
                  <FaInstagram className={styles.btnIcon} />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>

            <motion.div 
              className={styles.floatingElement1}
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FaFacebookF />
            </motion.div>
            <motion.div 
              className={styles.floatingElement2}
              animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <FaInstagram />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
