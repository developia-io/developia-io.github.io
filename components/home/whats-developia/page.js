import Image from "next/image";
import styles from "./whats-developia.module.css";
import paintBrush from "@/public/home/paint-brush.png";
import code from "@/public/home/code.png";
import toggleOn from "@/public/home/toggle-on.png";

export default function WhatsDevelopia() {
  return (
    <div className="container">
      <div className={styles.head}>
        <h1 className="title">What’s Developia?</h1>
        <p className={styles.description}>
          Developia supports entrepreneurship ecosystem with its design and
          advanced development capabilities. Positioning as a Venture Studio,
          Developia offers different partnership models to assist companies in
          cashflow management.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={paintBrush} alt="paint brush" />
          <h2>New Design</h2>
          <p>
            Carefully crafted precise design, with harmonious typography and
            perfect padding around every component
          </p>
        </div>
        <div className={styles.card}>
          <Image src={code} alt="code" />
          <h2>New Code</h2>
          <p>
            Built with HTML, CSS and JS. Startup’s code is easy to under-stand
            and easy to change. No other frameworks needed.
          </p>
        </div>
        <div className={styles.card}>
          <Image src={toggleOn} alt="toggle on" />
          <h2>New Solutions</h2>
          <p>
            Transform your ideas into reality and launch a beautiful site with
            minimal frustration.
          </p>
        </div>
      </div>
    </div>
  );
}
