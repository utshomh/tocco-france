"use client";

import { motion } from "framer-motion";

import WelcomeSlider from "../welcome/slider";

export function Welcome() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-12 grid grid-cols-5 gap-12">
      <div className="space-y-4 my-auto col-span-3">
        <motion.h2
          className="font-script text-5xl"
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          Welcome to Tocco France
        </motion.h2>
        <h1 className="text-8xl font-semibold text-primary">
          Redefining Luxury Switches & Sockets
        </h1>
      </div>

      <div className="my-auto col-span-2">
        <WelcomeSlider />
      </div>
    </div>
  );
}
