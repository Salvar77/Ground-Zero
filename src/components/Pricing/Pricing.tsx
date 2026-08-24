"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, heavyHit, powerCharge } from "@/utils/motion";
import styles from "./Pricing.module.scss";

type MembershipOption = {
  name: string;
  price: number;
  period: string;
  desc: string;
  badge?: string;
};

const pricingOptions: MembershipOption[] = [
  {
    name: "Karnet SMART",
    price: 155,
    period: "/ miesiąc",
    badge: "PROMOCJA",
    desc: "Karnet na miesiąc w cenie jedynie 155zł gwarancja ceny przez cały rok! To realna oszczędność prawie 300 zł w skali roku!\n\nUWAGA! Subskrypcja zawierana jest na okres 12 miesięcy i zapewnia nieprzerwany dostęp do usług przez cały czas jej obowiązywania. Karnet Siłownia Subskrybcja OPEN zapewnia nielimitowany dostęp do siłowni przez cały okres jego ważności.\n\nDodatkowo w ramach karnetu przysługuje:\n• 1 wejście dziennie na dowolne zajęcia grupowe (z wyjątkiem zajęć MMA)\n• pełny dostęp do strefy Recovery Room, w tym możliwość korzystania z drenażu limfatycznego\n• bezpłatna konsultacja trenerska, która pomoże wyznaczyć cele treningowe i dobrać odpowiedni plan ćwiczeń.\n\nTo idealny wybór dla osób, które chcą trenować bez ograniczeń, korzystać z zajęć grupowych oraz zadbać o skuteczną regenerację.\n\nUmowa przewiduje 2-miesięczny okres wypowiedzenia. Wypowiedzenie należy złożyć w formie określonej w załączonej umowie. Okres wypowiedzenia rozpoczyna bieg zgodnie z zasadami wskazanymi w regulaminie, a subskrypcja pozostaje aktywna do końca okresu wypowiedzenia. W tym czasie opłaty abonamentowe naliczane są zgodnie z obowiązującymi warunkami umowy.\n\nCZYM JEST PRO RATA?\nTwój abonament wystartuje pierwszego dnia miesiąca, a więc opłata za bieżący miesiąc to właśnie Pro Rata. Kwota Pro Raty zmienia się każdego dnia, ponieważ system kalkuluje ile dni zostało do końca miesiąca."
  },
  {
    name: "Karnet OPEN",
    price: 179,
    period: "/ miesiąc",
    desc: "Zwolnienie z VAT na podstawie art. 113 ust.1 ustawy o podatku od towarów i usług.\n\nKarnet Siłownia OPEN zapewnia nielimitowany dostęp do siłowni przez cały okres jego ważności.\n\nDodatkowo w ramach karnetu przysługuje:\n• 1 wejście dziennie na dowolne zajęcia grupowe (z wyjątkiem zajęć MMA)\n• pełny dostęp do strefy Recovery Room, w tym możliwość korzystania z drenażu limfatycznego\n• bezpłatna konsultacja trenerska, która pomoże wyznaczyć cele treningowe i dobrać odpowiedni plan ćwiczeń.\n\nTo idealny wybór dla osób, które chcą trenować bez ograniczeń, korzystać z zajęć grupowych oraz zadbać o skuteczną regenerację."
  },
  {
    name: "Karnet 1 wejście",
    price: 40,
    period: "/ dzień",
    desc: "Karnet na jedno wejście to idealna opcja dla osób, które chcą spróbować treningu bez zobowiązań lub potrzebują jednorazowego dostępu do zajęć czy siłowni. To wygodne rozwiązanie, gdy chcesz sprawdzić miejsce, wejść na szybki trening lub dopasować aktywność do napiętego grafiku. Karnet obowiązuje na Siłownię, zajęcia Fitness oraz zajęcia Cross."
  },
  {
    name: "Karnet 365 Dni",
    price: 1750,
    period: "/ 365 dni",
    desc: "Karnet OPEN 365 zapewnia nielimitowany dostęp do siłowni przez 365 dni od dnia aktywacji. W ramach karnetu otrzymujesz:\n• nielimitowaną liczbę wejść na siłownię\n• 1 wejście dziennie na wszystkie zajęcia grupowe (z wyjątkiem zajęć MMA)\n• pełny dostęp do strefy Recovery Room, w tym możliwość korzystania z drenażu limfatycznego\n• bezpłatną konsultację trenerską, która pomoże dobrać plan treningowy i osiągnąć zamierzone cele.\n\nKarnet jest opłacany z góry. Dla większej wygody istnieje możliwość rozłożenia płatności na 2 raty.\nDodatkowo karnet umożliwia:\n• 2-krotne zawieszenie karnetu w trakcie jego trwania\n• cesję karnetu na inną osobę."
  },
  {
    name: "Karnet 4 wejścia",
    price: 120,
    period: "/ miesiąc",
    desc: "Idealny wybór, jeśli chcesz zacząć swoją przygodę z treningiem lub potrzebujesz elastycznego rozwiązania dopasowanego do Twojego trybu życia.\nKarnet obejmuje 4 wejścia, które możesz swobodnie wykorzystać na:\n• treningi na siłowni\n• wszystkie zajęcia grupowe (z wyjątkiem zajęć MMA).\nDzięki niemu masz pełną swobodę wyboru – trenujesz wtedy, kiedy masz czas i ochotę, bez zobowiązań.\nKarnet jest ważny przez 1 miesiąc od daty zakupu, co daje Ci komfort elastycznego planowania treningów. Niewykorzystane wejścia po upływie terminu ważności przepadają."
  },
  {
    name: "Karnet Student/Senior/Mundurowy",
    price: 165,
    period: "/ miesiąc",
    desc: "Karnet Siłownia OPEN – STUDENT / SENIOR / MUNDUROWI oferuje te same korzyści co standardowy karnet OPEN, jednak dostępny jest w obniżonej cenie ze względu na przysługującą zniżkę.\n\nW ramach karnetu przysługuje:\n• nielimitowany dostęp do siłowni przez cały okres jego ważności\n• 1 wejście dziennie na dowolne zajęcia grupowe (z wyjątkiem zajęć MMA)\n• pełny dostęp do strefy Recovery Room, w tym możliwość korzystania z drenażu limfatycznego\n• bezpłatna konsultacja trenerska, która pomoże wyznaczyć cele treningowe i dobrać odpowiedni plan ćwiczeń.\n\nWarunkiem utrzymania zniżki jest dostarczenie odpowiedniego dokumentu potwierdzającego uprawnienia (np. legitymacji studenckiej, emeryta/rencisty lub służbowej) w ciągu 7 dni od zakupu karnetu. W przypadku niedostarczenia dokumentu w wymaganym terminie karnet zostaje zawieszony.\nTo idealna opcja dla osób uprawnionych do zniżki, które chcą korzystać z pełnej oferty klubu na preferencyjnych warunkach."
  }
];

export default function Pricing() {
  return (
    <section id="cennik" className={styles.pricing}>
      <div className={styles.container}>
        
        <motion.div 
          className={styles.header}
          variants={heavyHit()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.bgText}>PRICING</div>
          <span className={styles.badge}>OFERTA</span>
          <h2 className={styles.title}>
            CENNIK <span>KARNETÓW</span>
          </h2>
          <p className={styles.subtitle}>
            Brak ukrytych opłat, jasne zasady. Wybierz plan idealnie dopasowany do Twojego grafiku i celów, i zacznij działać już dziś.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingOptions.map((option, index) => (
            <motion.div key={index} className={styles.card} variants={powerCharge()}>
              {option.badge && <div className={styles.comboBadge}>{option.badge}</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.tierName}>{option.name}</h3>
              </div>
              
              <div className={styles.cardBody}>
                {option.desc.split('\n').map((paragraph, i) => (
                  <p key={i} className={styles.tierDesc}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.cyberLine}></div>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{option.price.toFixed(2).replace('.', ',')}</span>
                  <span className={styles.currency}>PLN</span>
                  <span className={styles.period}>{option.period}</span>
                </div>
                <a href="https://groundzero.oos.pl/buyCarnet" target="_blank" rel="noopener noreferrer" className={styles.cardBtn}>
                  KUP KARNET
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
