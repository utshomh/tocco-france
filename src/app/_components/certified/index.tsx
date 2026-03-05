"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import brazilInmetro from "./assets/Brazil-INMETRO.png";
import cb from "./assets/CB.png";
import cnas from "./assets/CNAS.png";
import iaf from "./assets/IAF.png";
import iecee from "./assets/IECEE.png";
import sni from "./assets/SNI.png";
import certCesmec from "./assets/cert-cesmec.png";
import tisi from "./assets/TISI.png";
import arabStates from "./assets/imgbin_arab-states.png";
import qcc from "./assets/quality-certification-certificate.png";
import saso from "./assets/saso-laboratuvar.png";

const certificates = [
  brazilInmetro,
  cb,
  cnas,
  iaf,
  iecee,
  sni,
  certCesmec,
  tisi,
  arabStates,
  qcc,
  saso,
];

export function Certified() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <motion.h2 className="uppercase text-7xl font-bold bg-linear-to-tr from-primary to-secondary bg-clip-text text-transparent">
        we are certified
      </motion.h2>
      <div className="w-48 h-2 bg-white" />
      <motion.div
        className="w-full max-w-6xl mx-auto"
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
          slidesPerView={6}
          navigation
        >
          {certificates.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={`Certification ${index + 1}`}
                  fill
                  className="w-28 h-8 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
