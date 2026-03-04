"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SlideOne } from "./slide-one";
import { SlideTwo } from "./slide-two";
import { SlideThree } from "./slide-three";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0.5, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation
        pagination={{ clickable: true }}
        //   loop={true}
      >
        <SwiperSlide>
          <SlideOne isActive={activeIndex === 0} />
        </SwiperSlide>

        <SwiperSlide>
          <SlideTwo isActive={activeIndex === 1} />
        </SwiperSlide>

        <SwiperSlide>
          <SlideThree isActive={activeIndex === 2} />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
