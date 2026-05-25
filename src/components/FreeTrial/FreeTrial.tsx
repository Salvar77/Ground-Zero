"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { ironGrip, powerClean } from "@/utils/motion";
import styles from "./FreeTrial.module.scss";

export default function FreeTrial() {
  const isDesktop = useDesktopAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy ${formData.name}! Skontaktujemy się z Tobą wkrótce w celu ustalenia terminu darmowego treningu.`);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="free-trial" className={styles.freeTrial}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image Side */}
          <motion.div 
            key={isDesktop ? "desktop-freetrial-image" : "mobile-freetrial-image"}
            className={styles.imageCol}
            {...(isDesktop && {
              variants: ironGrip(0.1),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 }
            })}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/ground_zero_free_trial.png"
                alt="Ground Zero Darmowy Trening"
                fill
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              <div className={styles.glitchDeco}></div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            key={isDesktop ? "desktop-freetrial-form" : "mobile-freetrial-form"}
            className={styles.formCol}
            {...(isDesktop && {
              variants: powerClean(0.3),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 }
            })}
          >
            <div className={styles.header}>
              <span className={styles.badge}>SPRAWDŹ NAS</span>
              <h2 className={styles.title}>ODBIERZ <span>DARMOWY</span><br />TRENING PRÓBNY</h2>
              <p className={styles.subtitle}>
                Zostaw swoje dane, a nasz doradca skontaktuje się z Tobą, aby umówić Cię na pierwszą, 
                niezobowiązującą wizytę w Ground Zero Niemodlin. Przekonaj się sam!
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name"
                  id="trial-name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder=" "
                />
                <label htmlFor="trial-name">Imię i Nazwisko</label>
                <div className={styles.inputLine}></div>
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  name="phone"
                  id="trial-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder=" "
                />
                <label htmlFor="trial-phone">Numer Telefonu</label>
                <div className={styles.inputLine}></div>
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email"
                  id="trial-email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder=" "
                />
                <label htmlFor="trial-email">Adres E-mail</label>
                <div className={styles.inputLine}></div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span className={styles.btnText}>ODBIERZ WEJŚCIÓWKĘ</span>
                <div className={styles.btnCyberCut}></div>
              </button>
              
              <p className={styles.rodo}>
                * Wysyłając formularz akceptujesz regulamin i zgadzasz się na kontakt telefoniczny.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
