"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/AllWebsiteData";

const FAQ = () => {
  return (
    <div id="FAQ">
      <div
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
        }}
        className="border mt-4 text-sm text-left sm:text-md shadow-xl rounded-lg mb-4 text-zinc-800-z-50 py-6 mx-[44] md:mx-[140px] lg:mx-[240px] xl:mx-[300px] px-7"
      >
        <div className="bottom-6 text-left left-4 right-4">
          <h1 className="font-bold text-2xl text-center">
            Got Questions? We&apos;ve Got Answers!
          </h1>
          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 text-left gap-x-8 w-full"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                className="border-b-zinc-800"
                value={faq.value}
              >
                <h3>
                  <AccordionTrigger className="!text-left">
                    {faq.question}
                  </AccordionTrigger>
                </h3>
                <h3>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </h3>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
