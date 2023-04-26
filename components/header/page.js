import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import developia from "@/public/DEVELOPIA.png";
import Button from "../button/page";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image src={developia} alt="developia" priority />
        </Link>

        <div className={styles.menu}>
          <div className={styles.link}>
            <Link href="/about-us">About Us</Link>
          </div>
          <Button label="Get in Touch" navigateTo="get-in-touch" />
        </div>
      </div>
    </header>
  );
}
