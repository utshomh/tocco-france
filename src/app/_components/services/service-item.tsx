"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export type ServiceItemProp = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

export function ServiceItem({ title, subtitle, image }: ServiceItemProp) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ scaleX: 0.75 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.35 }}
    >
      <Image src={image} alt={title} />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-center text-sm">{subtitle}</p>
    </motion.div>
  );
}
