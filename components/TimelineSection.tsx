"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/utils";
import { useWindowSize } from "@uidotdev/usehooks";

const timelineEvents = [
  {
    title: "Registration Open",
    date: "15 Sep",
    description:
      "Kickstart your journey by registering for the hackathon! This is your opportunity to join hundreds of innovative minds ready to tackle exciting challenges. Early bird registrations receive exclusive benefits such as priority access to resources, workshops, and a chance to interact with mentors before the event begins. Don’t miss the chance to get a head start!",
  },
  {
    title: "Registration Close",
    date: "20 Sep",
    description:
      "The clock is ticking! This is your last opportunity to assemble your team and register for the hackathon before the deadline. Ensure all your details are correct, and be ready to dive into the challenge. After registration closes, no further entries will be accepted, so make sure your team is in!",
  },
  {
    title: "Awareness Sessions",
    date: "24 Sep",
    description:
      "Join our insightful awareness sessions, where you’ll learn everything you need to know about the hackathon. From understanding the event's themes to grasping the competition rules, this is your chance to gain insider knowledge. Experts from various industries will provide valuable tips, helping you refine your approach and maximize your chances of success.",
  },
  {
    title: "Initial Rounds",
    date: "01 Oct",
    description:
      "The competition begins! In the initial rounds, teams will present their concepts and prototypes. This is your moment to showcase creativity and technical skill, as the judges will evaluate each project based on innovation, feasibility, and impact. Early feedback will be provided, helping teams refine their ideas for the final round. Show the judges what you've got!",
  },
  {
    title: "Final Rounds",
    date: "10 Oct",
    description:
      "The top teams advance to the final rounds, where the stakes are higher, and the pressure is on. With refined prototypes and sharpened ideas, participants must deliver their best work. Teams will present their projects in front of a distinguished panel of judges. This is your chance to impress and secure your spot as a potential winner of the hackathon.",
  },
  {
    title: "Award Ceremony",
    date: "12 Oct",
    description:
      "It’s time to celebrate! The award ceremony is the highlight of the event, where the winning teams will be announced, and prizes will be awarded in a grand setting. Join us to honor the achievements of all participants, connect with industry leaders, and enjoy an evening of recognition and celebration. Regardless of the outcome, this is a moment to be proud of your journey.",
  },
];

export default function HorizontalTimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const size = useWindowSize();

  return (
    <section className="bg-gray-50 py-16" id="timeline">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800 md:text-4xl">
          Event Timeline
        </h2>
        <div
          className=" flex flex-col flex-nowrap gap-2 overflow-x-hidden p-4 lg:flex-row overflow-hidden"
          onMouseLeave={() => setExpandedIndex(0)}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={cn("h-fit w-fit flex-shrink-0 lg:h-[50vh] lg:w-80", {
                "flex-1": expandedIndex === index,
              })}
              initial={{ width: "fit-content" }}
              animate={{
                width:
                  (size.width != null ? size.width : 0) > 1024
                    ? expandedIndex === index
                      ? "auto"
                      : "fit-content"
                    : "100%",
              }}
              transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
            >
              <motion.div
                className={`h-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-md ${
                  expandedIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
                onHoverStart={() => setExpandedIndex(index)}
              >
                <div className="p-4">
                  <p className="lg:max-w-[3ch] text-balance pb-4 text-[3.5rem] font-bold leading-none text-gray-600">
                    {event.date}
                  </p>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <div>
                        <div className="mb-4 flex items-center">
                          <h3 className="text-4xl font-semibold">
                            {event.title}
                          </h3>
                        </div>
                        <motion.p
                          className=" lg:w-[35ch] xl:w-[45ch] text-balance lg:text-2xl text-lg text-gray-700"
                          initial={{ clipPath: "inset(0% 0 100% 0)" }}
                          animate={{ clipPath: "inset(0% 0 0% 0)" }}
                          transition={{
                            duration: 0.5,
                            type: "tween",
                            ease: "easeIn",
                          }}
                        >
                          {event.description}
                        </motion.p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
