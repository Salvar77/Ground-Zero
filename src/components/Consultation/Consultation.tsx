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
    email: "",
    goal: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'consultation', ...formData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", goal: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                  placeholder="Imię"
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
              <input 
                type="email" 
                name="email"
                id="consult-email"
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="Adres E-mail"
              />
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

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "WYSYŁANIE..." : "ZAREZERWUJ KONSULTACJĘ"}
            </button>
            {submitStatus === "success" && (
              <p className={styles.successMsg}>Dziękujemy! Zgłoszenie zostało pomyślnie wysłane.</p>
            )}
            {submitStatus === "error" && (
              <p className={styles.errorMsg}>Wystąpił błąd podczas wysyłania. Spróbuj ponownie później.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
