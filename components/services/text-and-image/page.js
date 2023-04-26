import React from "react";
import styles from "./text-and-image.module.css";
import Image from "next/image";

export default function TextAndImage({
  title = "Lorem",
  description = "Ipsum de gprgn hrfth",
  imageSrc = null,
  isImageRight = true,
}) {
  return (
    <div
      className={`${styles.container} ${isImageRight ? "" : styles.reverse}`}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <Image src={imageSrc} alt="image" width={300} />
    </div>
  );
}
