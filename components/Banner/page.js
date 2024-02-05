import styles from "./banner.module.css";

export default function Banner({ header, description }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className="title" style={{ color: "#fff" }}>
          {header}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
