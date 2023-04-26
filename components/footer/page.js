import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

import developia from "@/public/DEVELOPIA.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={developia} alt="developia" />
        </Link>

        <div className={styles.menu}>
          © 2020 DEVELOPIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
         
