import Image from "next/image";
import styles from "./chapters.module.css";

export default function Chapters({
  imageSrc,
  icon1,
  icon2,
  title1,
  title2,
  text1,
  text2,
  isImageOnLeft = true,
}) {
  return (
    <div className={`${styles.wrapper} ${isImageOnLeft ? styles.reverse : ""}`}>
      <div className={styles.container}>
        <div className={styles.chapter}>
          <Image src={icon1} alt="icon" />
          <h2 style={{ color: "#005CB9" }}>{title1}</h2>
          <p>{text1}</p>
        </div>
        <div className={styles.chapter}>
          <Image src={icon2} alt="icon" />
          <h2 style={{ color: "#005CB9" }}>{title2}</h2>
          <p>{text2}</p>
        </div>
      </div>
      <Image src={imageSrc} alt="" />
    </div>
  );
}
