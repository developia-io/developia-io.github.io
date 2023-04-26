import Image from "next/image";
import styles from "./services.module.css";
import servicesIcons from "@/public/home/services/services";

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className="title">Services</h1>

        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.head}>
              <Image src={servicesIcons[2]} alt="send" />
              <h3 className={styles.card_title}>SOFTWARE DEVELOPMENT</h3>
            </div>
            <p className={styles.card_description}>
              Transforming ideas into reality through code.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.head}>
              <Image src={servicesIcons[5]} alt="send" />
              <h3 className={styles.card_title}>ADVANCED TECHNOLOGIES</h3>
            </div>
            <p className={styles.card_description}>
              Innovative solutions for complex problems.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.head}>
              <Image src={servicesIcons[3]} alt="send" />
              <h3 className={styles.card_title}>Digital upgrade</h3>
            </div>
            <p className={styles.card_description}>
              Elevating businesses to the digital age
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.head}>
              <Image src={servicesIcons[0]} alt="send" />
              <h3 className={styles.card_title}>data analysis</h3>
            </div>
            <p className={styles.card_description}>
              Unlocking insights for informed decision-making
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.head}>
              <Image src={servicesIcons[1]} alt="send" />
              <h3 className={styles.card_title}>ui/ux design and prototype</h3>
            </div>
            <p className={styles.card_description}>
              Creating user-centered experiences that delight
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.head}>
              <Image src={servicesIcons[4]} alt="send" />
              <h3 className={styles.card_title}>devops</h3>
            </div>
            <p className={styles.card_description}>
              Building and deploying software at lightning speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
