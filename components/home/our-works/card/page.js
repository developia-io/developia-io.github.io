import Image from "next/image";
import styles from "./card.module.css";

export default function Card({ cardInfo }) {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: cardInfo.bgColor,
      }}
    >
      <div className={styles.logo}>
        <Image
          src={cardInfo.logo}
          alt={cardInfo.title}
          width={200}
          height={70}
        />
      </div>

      <div className={styles.body} style={{ color: cardInfo.color }}>
        <h1>{cardInfo.title}</h1>
        <p>{cardInfo.description}</p>
      </div>

      {cardInfo?.bodyImage ? (
        <div className={styles.body_image}>
          <Image
            src={cardInfo.bodyImage}
            alt={cardInfo.description}
            width={333.33}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
