"use client";

import React, { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/AllWebsiteData";

const FAQ: React.FC = () => {
  const memoizedFAQItems = useMemo(() => 
    faqData.map((faq) => (
      <AccordionItem
        key={faq.value}
        className="border-b-zinc-800"
        value={faq.value}
      >
        <AccordionTrigger className="!text-left">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    )), 
    [/* dependency array */]
  );

  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-2xl text-center mb-4">
        Got Questions? We&apos;ve Got Answers!
      </h1>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 text-left gap-x-8 w-full"
      >
        {memoizedFAQItems}
      </Accordion>
    </section>
  );
};

export default React.memo(FAQ);