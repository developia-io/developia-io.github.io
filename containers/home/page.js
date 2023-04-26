import Hero from "@/components/home/hero/page";
import WhatsDevelopia from "@/components/home/whats-developia/page";
import styles from "./home.module.css";
import WhatWeDo from "@/components/home/what-we-do/page";
import Technologies from "@/components/home/technologies/page";
import Clients from "@/components/home/clients/page";
import OurWorks from "@/components/home/our-works/page";

import { Inter } from "next/font/google";
import Services from "@/components/home/services/page";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={[`${styles.home} ${inter.className}`]}>
      <div className={styles.green_rectangle} />
      <div className={styles.purple_rectangle} />
      <div className={styles.yellow_rectangle} />
      <div className={styles.red_rectangle} />
      <Hero />
      <WhatsDevelopia />
      <WhatWeDo />
      <Services />
      <Technologies />
      <Clients />
      <OurWorks />
    </div>
  );
}
