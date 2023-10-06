import Image from "next/image";
import styles from "./our-team.module.css";
import umut from "@/public/about-us/umut.jpg";
import mert from "@/public/about-us/mert.jpg";

export default function OurTeam() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h1 className="title">Our Teams</h1>
        <p className={styles.description}>
          Our team shares a vision filled with innovation and creativity. Each
          member plays an important role in realizing this vision with their
          talents and originality.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src={umut}
            alt="umut"
            width={120}
            height={120}
          />
          <h2>Umut Özel</h2>
          <p>CEO</p>
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <Image
            className={styles.image}
            src={mert}
            alt="mert"
            width={120}
            height={120}
          />
          <h2>Mert Yavuz</h2>
          <p>CBO</p>
        </div>
      </div>

      <div>
        <p className={styles.description}>and many more Developians!</p>
      </div>
    </div>
  );
}
