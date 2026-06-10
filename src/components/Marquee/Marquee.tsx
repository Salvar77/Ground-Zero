import React from "react";
import styles from "./Marquee.module.scss";

const Marquee = () => {
  const text =
    "// TRENINGI PERSONALNE // ZAJĘCIA FITNESS // TRENINGI PERSONALNE // ZAJĘCIA FITNESS // ";

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
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
