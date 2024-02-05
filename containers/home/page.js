import Hero from "@/components/Home/Hero/page";
import WhatsDevelopia from "@/components/Home/WhatsDevelopia/page";
import styles from "./home.module.css";
import WhatWeDo from "@/components/Home/WhatWeDo/page";
import Technologies from "@/components/Home/Technologies/page";
import Clients from "@/components/Home/Clients/page";
import OurWorks from "@/components/Home/OurWorks/page";

import { Inter } from "next/font/google";
import Services from "@/components/Home/Services/page";

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
