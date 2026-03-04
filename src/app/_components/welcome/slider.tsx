"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import switchSocket1 from "./assets/switch-socket-01.jpg";
import switchSocket2 from "./assets/switch-socket-02.jpg";
import switchSocket3 from "./assets/switch-socket-03.jpg";

export default function WelcomeSlider() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -35, x: 35 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={true}
        >
          <SwiperSlide>
            <Image
              src={switchSocket1}
              alt="Switch Socket 01"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={switchSocket2}
              alt="Switch Socket 02"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={switchSocket3}
              alt="Switch Socket 03"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50, x: -50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Indulge in a world of opulence and sophistication at Tocco France, where
        we offer a distinguished collection of luxury switches and sockets. Our
        exquisite range of meticulously crafted products combines cutting-edge
        technology with timeless elegance, elevating your living and office
        spaces to new heights.
      </motion.p>
    </div>
  );
}
