"use client";
import Script from "next/script";
import classes from "./ElfsightWidget.module.scss";

export default function ElfsightWidget() {
  return (
    <div className={classes.widgetContainer}>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div
        className="elfsight-app-536bd2f7-c317-4b2a-b620-a7c804650e70"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
