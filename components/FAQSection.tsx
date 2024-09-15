import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { ChevronRight } from "lucide-react";
import { FAQsData } from "@/libs/data";

const FAQSection = () => {
  return (
    <section id="faq" className="min-h-[50vh] w-full flex items-center justify-center">
      <div className=" container mx-auto my-auto ">
        <h1 className=" text-4xl font-bold pb-4 text-center md:text-5xl">FAQ</h1>
        <Accordion
          className="flex w-full flex-col"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: {
              opacity: 1,
              scale: 1,
            },
            collapsed: {
              opacity: 0,
              scale: 0.7,
            },
          }}
        >
          {FAQsData.map((fa, index) => {
            return (
              <AccordionItem value={fa.key} className="py-2" key={index}>
                <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90" />
                    <p className="ml-2 text-zinc-950 text-2xl">{fa.question}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="origin-left">
                  <p className="pl-6 pr-2 text-zinc-500 text-xl">{fa.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
