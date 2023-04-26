import Image from "next/image";
import styles from "./what-we-do.module.css";
import send from "@/public/home/send-o.png";
import support from "@/public/home/support.png";
import fileCode from "@/public/home/file-code-o.png";
import flash from "@/public/home/flash.png";

export default function WhatWeDo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className="title" style={{ color: "white" }}>
          What We Do?
        </h1>

        <div className={styles.card_container}>
          <div className={styles.card}>
            <Image src={send} alt="send" />
            <h3 className={styles.card_title}>Design to Impress</h3>
            <p className={styles.card_description}>
              Our team of skilled designers will work with you to craft a design
              that truly impresses.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={support} alt="support" />
            <h3 className={styles.card_title}>Committed Support</h3>
            <p className={styles.card_description}>
              We are committed to providing exceptional support throughout the
              entire development process and beyond.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={fileCode} alt="file code" />
            <h3 className={styles.card_title}>Clean Code</h3>
            <p className={styles.card_description}>
              Our developers adhere to the highest standards of coding practices
              to ensure that your product is not only functional but also easy
              to maintain and scale.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={flash} alt="file code" />
            <h3 className={styles.card_title}>Build Quick</h3>
            <p className={styles.card_description}>
              We use agile methodologies to build your product quickly and
              efficiently, without compromising on quality. Let us help you
              bring your product to market in record time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
