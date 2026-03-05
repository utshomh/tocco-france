"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import officeSpace01 from "./assets/Office-Space-01.png";
import officeSpace02 from "./assets/Office-Space-02.png";
import officeSpace03 from "./assets/Office-Space-03.png";
import officeSpace04 from "./assets/Office-Space-04.png";
import officeSpace05 from "./assets/Office-Space-05.png";
import officeSpace06 from "./assets/Office-Space-06.png";
import officeSpace07 from "./assets/Office-Space-07.png";

const images = [
  officeSpace01,
  officeSpace02,
  officeSpace03,
  officeSpace04,
  officeSpace05,
  officeSpace06,
  officeSpace07,
];

export default function OfficeDemoSlider() {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto"
      initial={{ scale: 0.9, y: -20 }}
      whileInView={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-62.5 overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={`Office Space ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
