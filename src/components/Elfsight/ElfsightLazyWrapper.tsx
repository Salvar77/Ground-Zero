"use client";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import classes from "./ElfsightLazyWrapper.module.scss";

const ElfsightWidget = dynamic(() => import("./ElfsightWidget"), {
  ssr: false,
  loading: () => null,
});

export default function ElfsightLazyWrapper() {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      {visible ? (
        <ElfsightWidget />
      ) : (
        <div className={classes.placeholder}>
          <h3 className={classes.placeholderTitle}>Opinie klientów</h3>
          <p className={classes.placeholderText}>
            Przewiń tutaj, aby wczytać opinie naszych klientów.
          </p>
        </div>
      )}
    </div>
  );
}
