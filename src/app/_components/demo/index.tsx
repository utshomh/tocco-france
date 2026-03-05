"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import switches from "./assets/switches.jpeg";
import setup from "./assets/setup.jpg";
import { BsArrowRight } from "react-icons/bs";

export function Demo() {
  return (
    <section className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black">
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-transparent z-10" />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent z-10" />

      <div className="relative md:col-span-2">
        <Image
          src={switches}
          alt="Switch"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative md:col-span-3">
        <Image
          src={setup}
          alt="Interior Setup"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex items-center px-10 md:px-20">
          <div className="max-w-2xl space-y-6">
            <motion.h1
              className="
              text-white 
              text-4xl 
              md:text-6xl 
              font-extrabold 
              leading-tight
              tracking-tight
            "
              initial={{ scaleX: 0.7 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              add stylish
              <br />
              designs & innovation
              <br />
              to your interior
            </motion.h1>

            <motion.button
              className="
              text-secondary
              text-3xl
              font-medium 
              flex items-center gap-2
              transition-all duration-300
              hover:scale-90
              cursor-pointer
            "
              initial={{
                scale: 0.9,
                y: 25,
              }}
              whileInView={{
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.1,
              }}
            >
              Explore more <BsArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
