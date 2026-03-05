"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import OfficeDemoSlider from "./slider";

import officeDesk from "./assets/Office-Desk.jpg";

export function OfficeDemo() {
  return (
    <div className="relative w-full">
      <div className="relative w-full py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src={officeDesk}
            alt="Office Desk"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black -z-10" />

        <div className="relative z-10 flex flex-col justify-center items-center gap-6 text-center">
          <motion.h2
            className="text-5xl font-bold"
            initial={{ y: -10, scale: 0.9 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            Enhance your <br />{" "}
            <span className="uppercase text-6xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Office Space
            </span>
          </motion.h2>

          <div className="w-48 h-2 bg-white" />

          <motion.p
            className="text-xl font-semibold"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75 }}
          >
            Tocco France's premium switches & sockets, <br /> combining style
            and functionality for a marvelous environment.
          </motion.p>

          <OfficeDemoSlider />
        </div>
      </div>
    </div>
  );
}
