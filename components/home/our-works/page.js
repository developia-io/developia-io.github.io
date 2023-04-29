"use client";

import Card from "./card/page";
import styles from "./our-works.module.css";
import card_infos from "./card/card-infos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

function OurWorks() {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setslidesPerView] = useState(1);

  window.onresize = function () {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(screen.width);
    screen.width < 1150 && screen.width > 750
      ? setslidesPerView(2)
      : screen.width < 750
      ? setslidesPerView(1)
      : setslidesPerView(3);
  }, [width]);

  return (
    <div className={styles.wrapper} id="works">
      <div className={styles.header}>
        <h1 className="title">Our Works</h1>
        <p>
          At Developia, we have had the opportunity to collaborate on a variety
          of exciting projects, from developing cutting-edge software to
          designing intuitive user interfaces. We take pride in delivering
          high-quality solutions that exceed our clients' expectations.
        </p>
      </div>

      <div className={styles.card_container}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {card_infos.map((card_info, index) => (
            <SwiperSlide key={index}>
              <Card cardInfo={card_info} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurWorks;
