import Image from "next/image";
import styles from "./what-we-do.module.css";
import send from "@/public/home/send-o.png";
import support from "@/public/home/support.png";
import fileCode from "@/public/home/file-code-o.png";

export default function WhatWeDo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className="title" style={{ color: "white" }}>
          What Are We Doing?
        </h1>

        <div className={styles.card_container}>
          <div className={styles.card}>
            <Image src={send} alt="send" />
            <h3 className={styles.card_title}>Designed to Impress</h3>
            <p className={styles.card_description}>
              Carefully crafted precise design, with harmonious typography and
              perfect padding around every component.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={support} alt="support" />
            <h3 className={styles.card_title}>Committed Support</h3>
            <p className={styles.card_description}>
              We are here for you. Our dedicated team is committed in providing
              excellent support.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={fileCode} alt="file code" />
            <h3 className={styles.card_title}>Clean Code</h3>
            <p className={styles.card_description}>
              Built with HTML, CSS and JS. Startup’s code is easy to under-stand
              and easy to change. No other frameworks needed.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={fileCode} alt="file code" />
            <h3 className={styles.card_title}>Clean Code</h3>
            <p className={styles.card_description}>
              Built with HTML, CSS and JS. Startup’s code is easy to under-stand
              and easy to change. No other frameworks needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
