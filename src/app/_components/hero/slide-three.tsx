"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import slideOne from "@/assets/slide-one.webp";

const headline = "Crafting Digital Experiences".split(" ");

export function SlideThree({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        initial={false}
        animate={{
          scale: isActive ? 1 : 1.08,
          filter: isActive
            ? "blur(0px) brightness(1) contrast(1)"
            : "blur(8px) brightness(0.7) contrast(0.8)",
          opacity: isActive ? 1 : 0.6,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={slideOne}
          alt="Slide One"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 0.3 : 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />
    </div>
  );
}
