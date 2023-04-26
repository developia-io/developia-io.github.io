import Image from "next/image";
import styles from "./hero.module.css";
import heroImg from "@/public/home/hero-img.png";

export default function Hero() {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.title}>
          <div className={styles.header_md}>Next Generation</div>
          <div className={styles.header_xl}>Code,</div>
          <div className={styles.header_md}>New Generation</div>
          <div className={styles.header_l}>Start-up</div>
        </div>

        <Image className={styles.hero_img} src={heroImg} alt="hero image" />
      </div>
    </div>
  );
}
