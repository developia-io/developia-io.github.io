"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import developia from "@/public/DEVELOPIA.png";
import hamburger from "./hamburger.svg";
import cross from "./cross.svg";
import Button from "../Button/page";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    const cross = document.getElementById("cross");
    isOpen
      ? ((menu.style.display = "flex"),
        (hamburger.style.display = "none"),
        (cross.style.display = "flex"))
      : ((menu.style.display = "none"),
        (cross.style.display = "none"),
        (hamburger.style.display = "flex"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link className={styles.developia} href="/">
            <Image src={developia} alt="developia" priority />
          </Link>
          <Image
            id="hamburger"
            className={styles.hamburger}
            src={hamburger}
            alt="hamburger"
            width={30}
            height={30}
            onClick={() => toggle()}
          />
          <Image
            id="cross"
            className={styles.cross}
            src={cross}
            alt="cross"
            width={30}
            height={30}
            onClick={() => toggle()}
          />
        </div>

        <div className={styles.menu} id="menu">
          <div className={styles.link}>
            <Link href="/#services" onClick={isOpen ? null : () => toggle()}>
              Services
            </Link>
            <Link
              href="/#technologies"
              onClick={isOpen ? null : () => toggle()}
            >
              Technologies
            </Link>
            <Link href="/#works" onClick={isOpen ? null : () => toggle()}>
              Works
            </Link>
            <Link href="/about-us" onClick={isOpen ? null : () => toggle()}>
              About Us
            </Link>
          </div>
          <div onClick={isOpen ? null : () => toggle()}>
            <Button label="Get in Touch" navigateTo="get-in-touch" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
