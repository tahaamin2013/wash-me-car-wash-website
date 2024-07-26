"use client";

import React, { useState, useCallback, useMemo } from "react";
import { faqData } from "@/AllWebsiteData";

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-zinc-800">
      <div
        className="w-full cursor-pointer text-left py-4 px-3 focus:outline-none"
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <span>{question}</span>
          <span className="font-bold text-md">{isOpen ? "↑" : "↓"}</span>
        </div>
      </div>
      {isOpen && <div className="py-3 px-6">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = useCallback((index: any) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  }, []);

  const memoizedFAQItems = useMemo(
    () =>
      faqData.map((faq, index) => (
        <AccordionItem
          key={faq.value}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItem === index}
          onClick={() => toggleItem(index)}
        />
      )),
    [openItem, toggleItem]
  );

  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-2xl text-center mb-4">
        Got Questions? We&apos;ve Got Answers!
      </h1>
      <div className="grid grid-cols-1 text-left gap-x-8 w-full">
        {memoizedFAQItems}
      </div>
    </section>
  );
};

export default React.memo(FAQ);
