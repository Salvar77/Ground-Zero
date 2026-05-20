import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        
        {/* Schodkowy element informacyjny - KARTA ZAWSZE PIERWSZA W HTML DLA DOBREGO MOBILE UX */}
        <div className={styles.steppedCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>ZNAJDŹ NAS</h2>
            <div className={styles.cyberLine}></div>
          </div>
          
          <div className={styles.infoWrapper}>
            <div className={styles.infoGroup}>
              <span className={styles.label}>LOKALIZACJA</span>
              <p className={styles.text}>
                Ground Zero Siłownia<br/>
                Niemodlin, Polska
              </p>
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>KONTAKT</span>
              <p className={styles.text}>
                Zadzwoń do nas, aby zapytać o<br/>darmowy trening próbny.
              </p>
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>GODZINY OTWARCIA</span>
              <p className={styles.text}>
                Pon-Sob: 06:00 - 22:00<br/>
                Niedziela: 13:00 - 21:00
              </p>
            </div>
          </div>

          <a 
            href="https://share.google/diniwT8BAhxoWrOd2" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.navBtn}
          >
            WYZNACZ TRASĘ
          </a>
        </div>

        {/* Mapa - W CSS NA DESKTOPIE WEDRUJE NA LEWO */}
        <div className={styles.mapWrapper}>
          <div className={styles.mapOverlay}></div>
          <iframe 
            src="https://maps.google.com/maps?q=Ground%20Zero%20Niemodlin&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
