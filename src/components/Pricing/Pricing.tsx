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
    name: "Karnet 1 wejście",
    price: 30,
    period: "/ dzień",
    desc: "Karnet na jedno wejście to idealna opcja dla osób, które chcą spróbować treningu bez zobowiązań lub potrzebują jednorazowego dostępu do zajęć czy siłowni. To wygodne rozwiązanie, gdy chcesz sprawdzić miejsce, wejść na szybki trening lub dopasować aktywność do napiętego grafiku. Karnet obowiązuje na Siłownię, zajęcia Fitness oraz zajęcia Cross",
  },
  {
    name: "Karnet miesieczny - Cross",
    price: 140,
    period: "/ miesiąc",
    desc: "Karnet miesięczny to idealne rozwiązanie dla osób, które chcą trenować regularnie i widzieć szybkie postępy. Zajęcia CROSS łączą elementy treningu funkcjonalnego, siłowego oraz kondycyjnego, dzięki czemu poprawisz swoją sprawność, zwiększysz siłę i wytrzymałość, a przy tym spalisz dużą ilość kalorii.",
  },
  {
    name: "Karnet miesięczny - Fitness",
    price: 140,
    period: "/ miesiąc",
    desc: "Karnet miesięczny na fitness to świetny wybór dla osób, które chcą zadbać o swoje zdrowie, sylwetkę i dobre samopoczucie. Zajęcia fitness pozwalają rozwijać kondycję, wzmacniać mięśnie, poprawiać mobilność oraz redukować stres — a wszystko w przyjaznej, energicznej atmosferze.",
  },
  {
    name: "Karnet miesięczny - Siłownia",
    price: 150,
    period: "/ miesiąc",
    desc: "Karnet miesięczny na siłownię to idealna opcja dla osób, które chcą trenować we własnym tempie i na własnych zasadach. Profesjonalnie wyposażona sala pozwala na kompleksowy trening siłowy, kondycyjny oraz funkcjonalny — niezależnie od poziomu zaawansowania.",
  },
  {
    name: "Karnet na zajęcia MMA Grupa dziecięca",
    price: 150,
    period: "/ miesiąc",
    desc: "Karnet na zajęcia MMA to idealna opcja dla osób, które chcą rozwijać swoją kondycję, siłę oraz umiejętności sztuk walki pod okiem profesjonalnych trenerów. Treningi łączą elementy boksu, zapasów i brazylijskiego jiu-jitsu, zapewniając wszechstronny rozwój oraz intensywny, angażujący wysiłek.\n\nKarnet obejmuje udział w regularnych zajęciach MMA w Siłowni Ground Zero Niemodlin, dostęp do pełnego wyposażenia treningowego oraz możliwość pracy w grupie dostosowanej do poziomu zaawansowania – zarówno dla początkujących, jak i bardziej doświadczonych zawodników.\nKarnet obowiązuje na zajęcia na grupę dziecięcą według obowiązującego grafiku zajęć",
  },
  {
    name: "Karnet na zajęcia MMA grupa młodzież",
    price: 150,
    period: "/ miesiąc",
    desc: "Karnet na zajęcia MMA to idealna opcja dla osób, które chcą rozwijać swoją kondycję, siłę oraz umiejętności sztuk walki pod okiem profesjonalnych trenerów. Treningi łączą elementy boksu, zapasów i brazylijskiego jiu-jitsu, zapewniając wszechstronny rozwój oraz intensywny, angażujący wysiłek.\n\nKarnet obejmuje udział w regularnych zajęciach MMA w Siłowni Ground Zero Niemodlin, dostęp do pełnego wyposażenia treningowego oraz możliwość pracy w grupie dostosowanej do poziomu zaawansowania – zarówno dla początkujących, jak i bardziej doświadczonych zawodników.\n\nKarnet obejmuje uczestnictwo w zajęciach grupy młodzieżowej według obowiązującego grafiku",
  },
  {
    name: "Karnet Siłownia + Cross",
    price: 250,
    period: "/ miesiąc",
    desc: "Karnet łączony to idealny wybór dla osób, które chcą maksymalnie wykorzystać możliwości treningowe. Połączenie nielimitowanego dostępu do siłowni z intensywnymi zajęciami Cross daje pełną swobodę planowania i pozwala rozwijać siłę, wytrzymałość oraz ogólną sprawność na każdym poziomie zaawansowania.",
    badge: "COMBO",
  },
  {
    name: "Karnet Siłownia + Fitness",
    price: 250,
    period: "/ miesiąc",
    desc: "Karnet łączony to świetna propozycja dla osób, które chcą połączyć samodzielny trening na siłowni z energią zajęć fitness. Dzięki temu zyskujesz pełną elastyczność — możesz realizować własny plan treningowy, a jednocześnie korzystać z prowadzonej aktywności, która motywuje, wzmacnia i urozmaica codzienny ruch.",
    badge: "COMBO",
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
                <a href="/kontakt" className={styles.cardBtn}>
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
