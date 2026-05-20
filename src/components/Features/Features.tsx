import React from 'react';
import styles from './Features.module.scss';

const featuresData = [
  {
    id: '01',
    title: 'STREFA WOLNYCH CIĘŻARÓW',
    desc: 'Prawdziwe żelazo dla prawdziwych wyników. Hantle, gryfy olimpijskie i profesjonalne pomosty ciężarowe dla wyciskających siódme poty.',
  },
  {
    id: '02',
    title: 'MASZYNY PÓŁWOLNE',
    desc: 'Najwyższej klasy sprzęt typu Hammer. Maszyny, które wybaczają błędy w technice, ale nie wybaczają słabości na treningu.',
  },
  {
    id: '03',
    title: 'TRENING FUNKCJONALNY',
    desc: 'Kettlebells, liny, boxy i klatka treningowa. Zbuduj kondycję, siłę eksplozywną i mobilność w jednym miejscu.',
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.bgText}>ZONES</div>
          <h2 className={styles.title}>
            Twój punkt <span>startowy</span>
          </h2>
          <p className={styles.subtitle}>
            Nie uznajemy kompromisów. Stworzyliśmy przestrzeń, w której każdy znajdzie sprzęt dopasowany do swoich celów – od amatora po zawodowca.
          </p>
        </div>

        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.cardNumber}>{feature.id}</div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>

              <div className={styles.cyberDeco}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
