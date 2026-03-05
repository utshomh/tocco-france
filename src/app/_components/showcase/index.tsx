"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import verticalSwitch from "./assets/product-features-01.png";
import glass from "./assets/product-features-03.png";
import drill from "./assets/product-features-02.png";
import child from "./assets/product-features-04.png";
import colors from "./assets/product-features-05.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Showcase() {
  return (
    <section className="bg-black text-white py-24 max-w-5xl w-full px-6 lg:px-0 mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* MAIN CARD */}
        <motion.div
          initial={{
            scale: 0.7,
            y: 30,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="py-24 lg:py-0 row-span-2 col-span-1 lg:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex justify-between items-center gap-6 relative"
        >
          <Image
            src={verticalSwitch}
            alt="Feature"
            className="absolute inset-0 h-full w-full object-cover rounded-2xl"
          />
          <h2 className="text-[#fffa93] text-5xl font-bold leading-tight z-10 ml-auto mr-5">
            A Thinner <br /> Switch <br /> Than You <br /> Think.
          </h2>
        </motion.div>

        {/* GLASS CARD */}
        <motion.div
          initial={{
            scale: 0.7,
            y: 30,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 pb-0 overflow-hidden"
        >
          <h3 className="text-3xl font-bold pb-6 max-w-80">
            Scratch Proof Tempered Glass Panel
          </h3>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src={glass}
              alt="Glass Panel"
              className="w-full max-h-72 object-cover rounded-2xl rounded-b-none"
            />
          </motion.div>
        </motion.div>

        {/* DRILL CARD */}
        <motion.div
          initial={{
            scale: 0.7,
            y: 30,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 pb-0 overflow-hidden"
        >
          <h3 className="text-3xl font-bold mb-6 max-w-80">
            Friction Resistance & Scratch Proof
          </h3>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src={drill}
              alt="Drill Test"
              className="w-full max-h-72 object-cover rounded-2xl rounded-b-none"
            />
          </motion.div>
        </motion.div>

        {/* CHILD SAFETY */}
        <motion.div
          initial={{
            scale: 0.7,
            y: 30,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
        >
          <h3 className="text-3xl font-bold mb-6 max-w-80">
            Child Protection Design
          </h3>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src={child}
              alt="Child Protection"
              className="w-full object-contain rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* COLORS CARD */}
        <motion.div
          initial={{
            scale: 0.7,
            y: 30,
          }}
          whileInView={{
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="p-6 min-h-64 col-span-1 lg:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex relative"
        >
          <Image
            src={colors}
            alt="Feature"
            className="absolute inset-0 bottom-0 h-full w-full object-cover rounded-2xl"
          />
          <h2 className="text-3xl font-bold mb-6 max-w-80 z-10">
            Rich Selection of Colors
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
