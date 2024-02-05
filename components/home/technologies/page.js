"use client";

import logos from "@/public/logos/logos";
import Image from "next/image";
import styles from "./technologies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Technologies() {
  const [slidesPerView, setSlidesPerView] = useState(8);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(8);
    }
  }, []);

  return (
    <div className={styles.wrapper} id="technologies">
      <h1 className={`${styles.title} title`}>WHAT TECHNOLOGIES DO WE USE?</h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className={styles.mySwiper}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Image src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        className={styles.mySwiper}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Image src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className={styles.sub_title}>AND MUCH MORE!</h1>
    </div>
  );
}
