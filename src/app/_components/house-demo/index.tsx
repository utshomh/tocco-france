"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import interior from "./assets/interior.png";

export function HouseDemo() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto flex items-center justify-center gap-12">
      <motion.div
        className="w-1/2"
        initial={{
          scale: 0.5,
          y: 30,
        }}
        whileInView={{
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={interior}
          alt="Interior"
          height={1024}
          width={1024}
          className="w-full"
        />
      </motion.div>

      <div className="space-y-4 w-1/2">
        <motion.h2
          className="font-bold text-6xl"
          initial={{
            scale: 0.85,
            y: 50,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          Elevate <br />{" "}
          <span className="text-7xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            your Home
          </span>
        </motion.h2>

        <motion.p
          className="text-2xl font-semibold text-secondary"
          initial={{
            x: 150,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{ duration: 0.75 }}
        >
          with Premium <span>Switch & Socket</span>
        </motion.p>

        <motion.p
          className="text-xl"
          initial={{
            scale: 0.85,
            y: 50,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          Tocco France&apos;s luxurious switches and sockets, adding
          sophistication to every room.
        </motion.p>

        <motion.button className="py-4 px-12 rounded-full border border-white cursor-pointer hover:bg-secondary hover:text-background-2 hover:scale-90 hover:border-secondary transition-all duration-300 font-semibold text-lg">
          See Products
        </motion.button>
      </div>
    </div>
  );
}
