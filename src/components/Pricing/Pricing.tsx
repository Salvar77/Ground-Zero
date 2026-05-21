"use client";

import React, { useState } from "react";
import styles from "./Pricing.module.scss";

type MembershipOption = {
  name: string;
  price: number;
  desc: string;
  features: string[];
};

const monthlyOptions: Record<string, MembershipOption> = {
  silownia: {
    name: "Karnet Miesięczny - Siłownia",
    price: 150,
    desc: "Idealna opcja dla osób, które chcą trenować we własnym tempie i na własnych zasadach na profesjonalnej sali treningowej.",
    features: [
      "Nielimitowany dostęp do strefy siłowej i maszyn",
      "Dostęp do strefy kardio i wolnych ciężarów",
      "Wejścia w dowolnych godzinach otwarcia",
      "Darmowy pakiet powitalny i konsultacja",
    ],
  },
  cross: {
    name: "Karnet Miesięczny - Cross",
    price: 140,
    desc: "Trening funkcjonalny, siłowy oraz kondycyjny. Dynamiczne zajęcia grupowe pod okiem wykwalifikowanego trenera.",
    features: [
      "Udział w zajęciach Cross wg grafiku",
      "Intensywny rozwój kondycji i siły",
      "Stała opieka trenera prowadzącego",
      "Dostęp do dedykowanego sprzętu Cross",
    ],
  },
  fitness: {
    name: "Karnet Miesięczny - Fitness",
    price: 140,
    desc: "Zajęcia grupowe wspierające zdrowie, ruchomość stawów i redukcję stresu w motywującej, energicznej atmosferze.",
    features: [
      "Udział w zajęciach Fitness wg grafiku",
      "Poprawa mobilności i elastyczności",
      "Świetna atmosfera i wsparcie grupy",
      "Różnorodne zestawy ćwiczeń cardio/ABS",
    ],
  },
  mma: {
    name: "Karnet MMA (Dzieci / Młodzież)",
    price: 150,
    desc: "Wszechstronny rozwój sprawności, nauka dyscypliny i technik boksu, zapasów oraz BJJ pod okiem profesjonalistów.",
    features: [
      "Zajęcia MMA dla dzieci lub młodzieży",
      "Bezpieczny trening w grupach wiekowych",
      "Rozwój koordynacji i pewności siebie",
      "Dostęp do pełnego zaplecza treningowego",
    ],
  },
};

export default function Pricing() {
  const [selectedMonthly, setSelectedMonthly] = useState<string>("silownia");
  const currentMonthly = monthlyOptions[selectedMonthly];

  return (
    <section id="cennik" className={styles.pricing}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.bgText}>PRICING</div>
          <span className={styles.badge}>CENNIK KARNETÓW</span>
          <h2 className={styles.title}>
            WYBIERZ SWÓJ <span>PLAN TRENINGOWY</span>
          </h2>
          <p className={styles.subtitle}>
            Zdecyduj, jak chcesz trenować. Jasne zasady, brak ukrytych opłat. 
            Wybierz karnet dostosowany do Twojego grafiku i celów.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Jednorazowy */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.tierName}>JEDNORAZOWY</h3>
              <p className={styles.tierDesc}>Dla osób chcących sprawdzić siłownię lub trenujących okazjonalnie.</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.currency}>PLN</span>
                <span className={styles.price}>30</span>
                <span className={styles.period}>/ dzień</span>
              </div>
            </div>
            
            <div className={styles.cyberLine}></div>

            <div className={styles.cardBody}>
              <ul className={styles.featuresList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>1 wejście do klubu</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Dostęp do strefy siłowni</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Dostęp do zajęć Fitness / Cross</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Bez zobowiązań i umów</span>
                </li>
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <a href="#kontakt" className={styles.cardBtn}>
                KUP WEJŚCIÓWKĘ
              </a>
            </div>
          </div>

          {/* Card 2: Miesięczny (Interactive) */}
          <div className={`${styles.card} ${styles.interactiveCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.tierBadge}>NAJPOPULARNIEJSZE</div>
              <h3 className={styles.tierName}>MIESIĘCZNY</h3>
              <p className={styles.tierDesc}>Dostęp do wybranej strefy aktywności na pełny miesiąc kalendarzowy.</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.currency}>PLN</span>
                <span className={styles.price}>{currentMonthly.price}</span>
                <span className={styles.period}>/ miesiąc</span>
              </div>
            </div>

            {/* Selector tabs inside the card */}
            <div className={styles.subSelector}>
              <button 
                className={selectedMonthly === "silownia" ? styles.activeSub : ""}
                onClick={() => setSelectedMonthly("silownia")}
              >
                Siłownia
              </button>
              <button 
                className={selectedMonthly === "cross" ? styles.activeSub : ""}
                onClick={() => setSelectedMonthly("cross")}
              >
                Cross
              </button>
              <button 
                className={selectedMonthly === "fitness" ? styles.activeSub : ""}
                onClick={() => setSelectedMonthly("fitness")}
              >
                Fitness
              </button>
              <button 
                className={selectedMonthly === "mma" ? styles.activeSub : ""}
                onClick={() => setSelectedMonthly("mma")}
              >
                MMA
              </button>
            </div>
            
            <div className={styles.cyberLineAccent}></div>

            <div className={styles.cardBody}>
              <h4 className={styles.optionTitle}>{currentMonthly.name}</h4>
              <p className={styles.optionDesc}>{currentMonthly.desc}</p>
              
              <ul className={styles.featuresList}>
                {currentMonthly.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.iconAccent}>
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <a href="#kontakt" className={`${styles.cardBtn} ${styles.cardBtnAccent}`}>
                WYBIERZ KARNET
              </a>
            </div>
          </div>

          {/* Card 3: Łączony (Combo) */}
          <div className={`${styles.card} ${styles.comboCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.goldBadge}>KOMPLEKSOWY</div>
              <h3 className={styles.tierName}>ŁĄCZONY COMBO</h3>
              <p className={styles.tierDesc}>Dla osób chcących łączyć trening na siłowni z zajęciami zorganizowanymi.</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.currency}>PLN</span>
                <span className={styles.price}>250</span>
                <span className={styles.period}>/ miesiąc</span>
              </div>
            </div>
            
            <div className={styles.cyberLine}></div>

            <div className={styles.cardBody}>
              <ul className={styles.featuresList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Nielimitowany dostęp do Siłowni</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Dostęp do zajęć Cross LUB Fitness</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Dowolna liczba wejść w miesiącu</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Maksymalna elastyczność i progres</span>
                </li>
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <a href="#kontakt" className={styles.cardBtn}>
                WYBIERZ COMBO
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
