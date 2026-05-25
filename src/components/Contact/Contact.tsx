import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.container}>
        
        {/* Schodkowy element informacyjny - KARTA ZAWSZE PIERWSZA W HTML DLA DOBREGO MOBILE UX */}
        <div className={styles.steppedCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>ZNAJDŹ NAS</h2>
            <div className={styles.cyberLine}></div>
          </div>
          
          <div className={styles.infoWrapper}>
            <div className={styles.infoGroup}>
              <span className={styles.label}>
                <FiMapPin className={styles.infoIcon} /> LOKALIZACJA
              </span>
              <p className={styles.text}>
                ul. Opolska 54<br/>
                49-100 Niemodlin
              </p>
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>
                <FiPhone className={styles.infoIcon} /> KONTAKT
              </span>
              <p className={styles.text}>
                <a href="tel:+48666310850" className={styles.link}>
                  666 310 850
                </a>
                <br/>
                <a href="mailto:kontakt@groundzero-niemodlin.pl" className={styles.link} style={{ fontSize: '0.9em' }}>
                  kontakt@groundzero-niemodlin.pl
                </a>
              </p>
            </div>
            
            <div className={styles.infoGroup}>
              <span className={styles.label}>
                <FiClock className={styles.infoIcon} /> GODZINY OTWARCIA
              </span>
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
