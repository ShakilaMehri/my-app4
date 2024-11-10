"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images, SideImages } from './image';
import styles from "../styles/slider.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Slider: React.FC = () => {
  return (
    <div className={styles.sliderWrpper}>
      {/* Left side slider */}
      <div className={styles.sideSlider}>
        {SideImages.slice(0, 2).map((image, index) => (
          <img key={index} src={image.src} alt={`Side ${index + 1}`} />
        ))}
      </div>
    <div className={styles.sliderContainer}>
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true}}
      autoplay={{delay:3000, disableOnInteraction: false}}
      loop
      className={styles.mySwiper}
      >
        {Images.map((image, index) =>(
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <img src={image.src} alt={`Slide ${index + 1 }`} />
            <div className={styles.textOverlay}>{image.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* Right side slider */}
    <div className={styles.sideSlider}>
      {SideImages.slice(2, 4).map((image, index) => (
        <img key={index} src={image.src} alt={`Slide ${index + 3}`} />
      ))}
    </div>
    </div>
  );
};

export default Slider;
