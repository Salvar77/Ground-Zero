import React from "react";
import styles from "./Marquee.module.scss";

const Marquee = () => {
  const text =
    "// BUDUJ FORMĘ BEZ WYMÓWEK // GROUND ZERO NIEMODLIN // TWÓJ CEL. NASZE WSPARCIE. // DOŁĄCZ DO SPOŁECZNOŚCI // ";

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
