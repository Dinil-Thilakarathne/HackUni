"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";
import AnimatedBox from "./ui/AnimatedBox";

const objectives = [
  {
    icon: Lightbulb,
    title: "Foster Innovation",
    description:
      "Push the boundaries of technology and create groundbreaking solutions.",
  },
  {
    icon: Users,
    title: "Encourage Collaboration",
    description: "Work with diverse teams and learn from industry experts.",
  },
  {
    icon: Trophy,
    title: "Compete for Prizes",
    description:
      "Win exciting rewards and recognition for your innovative ideas.",
  },
  {
    icon: Rocket,
    title: "Launch Your Career",
    description: "Gain valuable experience and networking opportunities.",
  },
];

export default function IntroductionSection() {
  return (
    <section className="flex min-h-[75vh] bg-white py-16" id="introduction">
      <div className="container mx-auto my-auto px-4">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What is IEEE Hackathon 2024?
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IEEE Hackathon 2024 is an exciting opportunity for tech enthusiasts to
          push the boundaries of innovation, collaborate with talented peers,
          and solve real-world challenges in a fast-paced, competitive
          environment. Join us to turn your ideas into reality and make a
          lasting impact in the world of technology.
        </motion.p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedBox className="flex h-full w-full items-center justify-center" borderWidth={6} borderColor="#3b82f6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-blue-500 p-3 text-white">
                    <objective.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              </AnimatedBox>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
