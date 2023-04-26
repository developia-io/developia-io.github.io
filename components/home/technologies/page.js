import logos from "@/public/logos/logos";
import Image from "next/image";
import styles from "./technologies.module.css";

export default function Technologies() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className="title">WHAT TECHNOLOGIES DO WE USE?</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.img_ticker}>
          {logos?.map((logo, index) => (
            <Image src={logo} alt="logo" key={index} />
          ))}
        </div>
        <div className={styles.img_reverse_ticker}>
          {logos?.map((logo, index) => (
            <Image src={logo} alt="logo" key={index} />
          ))}
        </div>
      </div>
      <div className={styles.sub_title}>
        <h1 style={{ color: "#1e0e62" }}>AND MUCH MORE!</h1>
      </div>
    </div>
  );
}
