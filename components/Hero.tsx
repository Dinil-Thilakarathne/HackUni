"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.h3
          className="mb-8 text-xl text-slate-600 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          By IEEE Student Branch of UCSC
        </motion.h3>
        <motion.h1
          className="mb-4 text-5xl font-extrabold text-slate-900 md:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HackUni Hackathon 2024
        </motion.h1>
        <motion.p
          className="mb-8 text-xl text-slate-600 md:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovate, Code, Compete – Shape the Future
        </motion.p>
        <motion.button
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-500 px-8 py-3 text-lg font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="relative z-10">Register Now</span>
          <ChevronRight className="relative z-10 ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ x: "100%", opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </div>
    </section>
  );
}
