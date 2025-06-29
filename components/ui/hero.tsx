"use client";

import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center pt-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center font-sans"initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.2 }}> Keep moving Forward
      </motion.h1>

      <motion.p className="pt-5 text-6xl font-medium text-center font-sans p-2"initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
        Fall down seven times<br />Stand up Eighth
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.8 }} className="bg-white mt-5 cursor-pointer hover:bg-accent text-black rounded-full text-sm px-10 py-2"> Do it now
      </motion.button>
    </motion.div>
  );
}