"use client";

import Image from "next/image";
import Tilty from "react-tilty";
import styles from "./whats-developia.module.css";
import paintBrush from "@/public/home/paint-brush.png";
import code from "@/public/home/code.png";
import toggleOn from "@/public/home/toggle-on.png";

function WhatsDevelopia() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1 className="title">What’s Developia?</h1>
          <p className={styles.description}>
            Developia supports entrepreneurship ecosystem with its design and
            advanced development capabilities. Positioning as a Venture Studio,
            Developia offers different partnership models to assist companies in
            cashflow management.
          </p>
        </div>

        <div className={styles.card_container}>
          <Tilty
            style={{ transformStyle: "preserve-3d" }}
            className={styles.card}
          >
            <Image
              src={paintBrush}
              alt="paint brush"
              style={{ transform: "translateZ(30px)" }}
            />
            <h2 style={{ transform: "translateZ(30px)" }}>New Design</h2>
            <p style={{ transform: "translateZ(30px)" }}>
              Carefully crafted precise design, with harmonious typography and
              perfect padding around every component
            </p>
          </Tilty>
          <Tilty
            style={{ transformStyle: "preserve-3d" }}
            className={styles.card}
          >
            <Image
              src={code}
              alt="code"
              style={{ transform: "translateZ(30px)" }}
            />
            <h2 style={{ transform: "translateZ(30px)" }}>New Code</h2>
            <p style={{ transform: "translateZ(30px)" }}>
              Built with HTML, CSS and JS. Startup’s code is easy to under-stand
              and easy to change. No other frameworks needed.
            </p>
          </Tilty>
          <Tilty
            style={{ transformStyle: "preserve-3d" }}
            className={styles.card}
          >
            <Image
              src={toggleOn}
              alt="toggle on"
              style={{ transform: "translateZ(30px)" }}
            />
            <h2 style={{ transform: "translateZ(30px)" }}>New Solutions</h2>
            <p style={{ transform: "translateZ(30px)" }}>
              Transform your ideas into reality and launch a beautiful site with
              minimal frustration.
            </p>
          </Tilty>
        </div>
      </div>
    </div>
  );
}

export default WhatsDevelopia;
