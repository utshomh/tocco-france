"use client";

import { motion } from "framer-motion";

export function CareerForm() {
  return (
    <div className="mt-28 md:mt-32 mb-16" style={{ perspective: 1500 }}>
      <motion.div
        initial={{
          rotateY: -90,
          y: 30,
          x: -15,
          scale: 0.8,
        }}
        animate={{
          rotateY: 0,
          y: 0,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="p-6 md:p-12 rounded-md max-w-6xl mx-auto w-full bg-background-3 space-y-8 shadow-2xl"
      >
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold uppercase">
            Get Hired
          </h1>

          <div className="w-48 h-1 md:h-2 bg-white mx-auto" />

          <h2 className="text-lg md:text-xl font-semibold max-w-2xl mx-auto">
            Are you passionate about design and innovation? Do you thrive in a
            fast-paced environment? Join our team!
          </h2>

          <p className="text-sm md:text-base">
            Tocco France is a leading manufacturer & supplier of luxury switches
            & sockets, and we’re always looking for talented individuals to join
            our growing family. We offer a dynamic work environment, competitive
            compensation packages, and the opportunity to be part of a brand
            that is redefining the future of home design.
          </p>
        </div>

        <form className="grid grid-cols1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-1">
            <label className="text-base md:text-lg font-bold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g. John Doe"
              className="bg-white text-background-3 p-1.5 md:p-2 outline-0 rounded-xs w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base md:text-lg font-bold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="E.g. john@doe.com"
              className="bg-white text-background-3 p-1.5 md:p-2 outline-0 rounded-xs w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base md:text-lg font-bold">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g. +880 1701 000 000"
              className="bg-white text-background-3 p-1.5 md:p-2 outline-0 rounded-xs w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base md:text-lg font-bold">Address</label>
            <input
              type="text"
              placeholder="E.g. Dhaka, Bangladesh"
              className="bg-white text-background-3 p-1.5 md:p-2 outline-0 rounded-xs w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base md:text-lg font-bold">
              Job Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g. Marketing"
              className="bg-white text-background-3 p-1.5 md:p-2 outline-0 rounded-xs w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base md:text-lg font-bold">
              Upload your CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              className="bg-white text-background-3 p-1.5 md:p-2 outline-0 rounded-xs w-full"
            />
          </div>
        </form>

        <button className="cursor-pointer uppercase bg-cyan-500 text-white hover:bg-cyan-600 transition-colors px-6 py-3 rounded-xs font-semibold text-sm">
          Submit
        </button>
      </motion.div>
    </div>
  );
}
