import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        
        {/* Schodkowy element informacyjny (Stepped Card) z transform: translateY */}
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
              {/* Opcjonalny numer telefonu, jak klient poda, można uzupełnić */}
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>GODZINY OTWARCIA</span>
              <p className={styles.text}>
                Pon-Pt: 6:00 - 22:00<br/>
                Sobota: 8:00 - 20:00<br/>
                Niedziela: 8:00 - 18:00
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

        {/* Mapa w asymetrycznym gridzie */}
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
