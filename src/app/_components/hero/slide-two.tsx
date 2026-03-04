"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import slideOne from "@/assets/slide-one.webp";

export function SlideTwo({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <motion.div
        initial={false}
        animate={{
          clipPath: isActive
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
        className="absolute inset-0"
      >
        <Image src={slideOne} alt="Slide One" fill className="object-cover" />
      </motion.div>
    </div>
  );
}
