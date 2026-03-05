"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import slideOne from "./assets/slide-one.webp";

export function SlideThree({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-[50svh] sm:h-[60svh] md:h-[80svh] lg:h-screen w-full overflow-hidden bg-black">
      <motion.div
        initial={false}
        animate={{
          scale: isActive ? 1 : 1.1,
          filter: isActive ? "blur(0px)" : "blur(20px)",
          opacity: isActive ? 1 : 0.6,
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={slideOne}
          alt="Slide One"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
