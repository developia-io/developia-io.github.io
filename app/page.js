import styles from "./page.module.css";
import HomePage from "@/containers/home/page";

export default function Home() {
  return (
    <main className={[`${styles.main}`]}>
      <HomePage />
    </main>
  );
}
