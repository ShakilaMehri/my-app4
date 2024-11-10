"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import styles from "../styles/autoSlider.module.css";

interface Item {
  id: number;
  topic: string;
  imgSrc: string;
}

const AutoSlider = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/items");
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  console.log("Auto slider is rendering!");

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.topNote}>
            ESSENTIAL OILS FOR YOUR WELL-BEING
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime
            provident voluptates porro aperiam, veniam odit iure ut sunt
            laudantium odio, nostrum ea incidunt sequi, tempore illo qui ad est?
          </h1>
          <button className={styles.btn}>Learn More</button>
        </div>
        <p className={styles.description}>BESTSELLERS</p>
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={6}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            1540: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            600: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
          }}
        >
          {items.length > 0 ? (
            items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.cardCover}>
                  <div className={styles.card}>
                    <div className={styles.img}>
                      <img src={item.imgSrc} alt={item.topic} />
                    </div>
                    <div className={styles.details}>
                      <div>{item.topic}</div>
                      <div>Shopping</div>
                      <div className={styles.chips}>
                        <div className={styles.chip}>ordinary</div>
                        <div className={styles.chip}>skincare</div>
                        <div className={styles.chip}>skin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No items available</p>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default AutoSlider;
