"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import verticalSwitch from "./assets/vertical-socket.avif";
import glass from "./assets/rich-glass.avif";
import drill from "./assets/thin-glass.avif";
import child from "./assets/rich-colors.avif";

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
    <section className="bg-black text-white py-24 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto grid grid-cols-3 gap-8"
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
          className="row-span-2 col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 pb-0 flex justify-between items-center gap-6 relative"
        >
          <motion.div className="w-2/3 flex justify-center">
            <Image
              src={verticalSwitch}
              alt="Vertical Switch"
              className="h-full w-full object-cover rounded-2xl"
            />
          </motion.div>
          <h2 className="text-yellow-400 text-5xl font-semibold leading-tight w-1/3">
            A Thinner <br /> Switch <br /> Than You Think.
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
          className="col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
        >
          <h3 className="text-3xl font-bold mb-6 max-w-80">
            Rich Selection of Colors
          </h3>

          <div className="flex gap-4">
            {["#f5f5f5", "#c0c0c0", "#c7a14a", "#000000"].map((color, i) => (
              <motion.button
                key={i}
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-48 rounded-xl border border-white/20"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
