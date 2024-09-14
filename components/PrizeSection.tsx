"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const prizes = [
  {
    title: "First Place",
    icon: Trophy,
    prize: "$5,000",
    color: "bg-yellow-500",
    description:
      "Cash prize, internship opportunity, and cutting-edge tech gadgets",
  },
  {
    title: "Second Place",
    icon: Award,
    prize: "$3,000",
    color: "bg-gray-400",
    description: "Cash prize and exclusive mentorship program",
  },
  {
    title: "Third Place",
    icon: Award,
    prize: "$1,500",
    color: "bg-orange-600",
    description: "Cash prize and online course subscriptions",
  },
];

export default function PrizesSection() {
  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16"
      id="prizes"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-gray-800 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What You Can Win!
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg ${
                index === 0
                  ? "md:col-span-3"
                  : index < 3
                    ? "md:col-span-1"
                    : "md:col-span-1"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`${prize.color} flex h-full flex-col items-center justify-center p-6 text-center text-white`}
              >
                <prize.icon
                  className={`mb-4 h-16 w-16 ${index === 0 ? "animate-bounce" : ""}`}
                />
                <h3 className="mb-2 text-2xl font-bold">{prize.title}</h3>
                <p className="mb-4 text-4xl font-extrabold">{prize.prize}</p>
                <p className="text-sm">{prize.description}</p>
                {index === 0 && (
                  <motion.div
                    className="absolute inset-0 bg-yellow-300 mix-blend-soft-light"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
