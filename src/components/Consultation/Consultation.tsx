"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "@/hooks/useDesktopAnimation";
import { heavyHit } from "@/utils/motion";
import styles from "./Consultation.module.scss";

export default function Consultation() {
  const isDesktop = useDesktopAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy ${formData.name}! Twoje zgłoszenie na konsultację zostało przyjęte.`);
    setFormData({ name: "", phone: "", goal: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="consultation" className={styles.consultation}>
      <div className={styles.bgWrapper}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          key={isDesktop ? "desktop-consultation-card" : "mobile-consultation-card"}
          className={styles.glassCard}
          {...(isDesktop && {
            variants: heavyHit(0.1),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.2 }
          })}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cyberDeco}></div>
            <span className={styles.badge}>KROK 1</span>
            <h2 className={styles.title}>BEZPŁATNA<br/><span>KONSULTACJA</span> TRENERSKA</h2>
            <p className={styles.subtitle}>
              Nie wiesz od czego zacząć? Nasi eksperci pomogą Ci wyznaczyć cel i dobrać odpowiedni 
              plan działania, w 100% za darmo. Wypełnij formularz.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name"
                  id="consult-name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Imię i Nazwisko"
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  name="phone"
                  id="consult-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="Numer Telefonu"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <select 
                name="goal" 
                value={formData.goal} 
                onChange={handleChange}
                required
                className={formData.goal === "" ? styles.placeholderSelect : ""}
              >
                <option value="" disabled hidden>Wybierz swój główny cel treningowy</option>
                <option value="redukcja">Redukcja tkanki tłuszczowej</option>
                <option value="masa">Budowa masy mięśniowej</option>
                <option value="kondycja">Poprawa kondycji / Sprawności</option>
                <option value="sporty_walki">Przygotowanie pod sporty walki</option>
                <option value="inne">Inne (powrót po kontuzji, itp.)</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Dodatkowe informacje (opcjonalnie)"
                rows={3}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              ZAREZERWUJ KONSULTACJĘ
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
