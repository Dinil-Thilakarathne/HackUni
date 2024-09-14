'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Trophy, Rocket } from 'lucide-react'

const objectives = [
  {
    icon: Lightbulb,
    title: 'Foster Innovation',
    description: 'Push the boundaries of technology and create groundbreaking solutions.',
  },
  {
    icon: Users,
    title: 'Encourage Collaboration',
    description: 'Work with diverse teams and learn from industry experts.',
  },
  {
    icon: Trophy,
    title: 'Compete for Prizes',
    description: 'Win exciting rewards and recognition for your innovative ideas.',
  },
  {
    icon: Rocket,
    title: 'Launch Your Career',
    description: 'Gain valuable experience and networking opportunities.',
  },
]

export default function IntroductionSection() {
  return (
    <section className="py-16 bg-white min-h-[75vh] flex" id='introduction'>
      <div className="container mx-auto my-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What is IEEE Hackathon 2024?
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IEEE Hackathon 2024 is an exciting opportunity for tech enthusiasts to push the boundaries of innovation,
          collaborate with talented peers, and solve real-world challenges in a fast-paced, competitive environment.
          Join us to turn your ideas into reality and make a lasting impact in the world of technology.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500 text-white rounded-full p-3 mb-4">
                  <objective.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
