import Link from "next/link";
import styles from "./button.module.css";

export default function Button({ label, navigateTo }) {
  return (
    <Link href={`/${navigateTo}`}>
      <button className={styles.button}>{label}</button>
    </Link>
  );
}
