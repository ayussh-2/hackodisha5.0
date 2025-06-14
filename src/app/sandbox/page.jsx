"use client";
import React, { useState } from "react";

// Custom Plus Icon Component
const PlusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

// Custom X Icon Component
const XIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Simple Accordion implementation
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  if (isOpen) {
    return (
      <div className="mb-2 sm:mb-3 lg:mb-4">
        <div
          className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border-2 border-black"
          style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.8)" }}
        >
          <div className="flex justify-between items-start mb-2 sm:mb-3 lg:mb-4">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-xl pr-2 sm:pr-3 lg:pr-4 leading-tight">
              {question}
            </h3>
            <button onClick={onToggle} className="flex-shrink-0 mt-0.5 sm:mt-1">
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
            </button>
          </div>
          <div className="border-t-2 border-gray-300 pt-2 sm:pt-3 lg:pt-4">
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">{answer}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-2 sm:mb-3 lg:mb-4">
      <button
        className="w-full bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-left flex justify-between items-center hover:shadow-md transition-all duration-200 border-2 border-black"
        onClick={onToggle}
        style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.8)" }}
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg pr-2 sm:pr-3 leading-tight">{question}</span>
        <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600 flex-shrink-0" />
      </button>
    </div>
  );
};

function Page() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // FAQ data for the accordion
  const faqItems = [
    {
      question: "What is Hackodisha 5.0?",
      answer:
        "Hackodisha 5.0 is a hackathon event where participants collaborate to solve challenges and build innovative solutions within a limited timeframe.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone interested in technology, innovation, and problem-solving can participate. Students, professionals, and enthusiasts are all welcome.",
    },
    {
      question: "How do I register?",
      answer:
        "You can register through our official website by filling out the registration form and following the instructions provided.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in Hackodisha 5.0 is completely free of charge.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Prizes include cash rewards, mentorship opportunities, and potential internship offers from our sponsors.",
    },
    {
      question: "Can I participate remotely?",
      answer:
        "Yes, we offer both in-person and remote participation options to accommodate everyone.",
    },
  ];

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <section className="relative w-full py-8 sm:py-12 lg:py-16 bg-purple-400 overflow-hidden min-h-screen">
        {/* Question Mark Symbol */}
        <div className="absolute bottom-1/2 left-4 sm:bottom-1/2 sm:left-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-transparent border-4 border-black rounded-full flex items-center justify-center">
            <span className="text-black text-2xl sm:text-3xl font-bold">?</span>
          </div>
        </div>
        
        {/* Arrow Symbol */}
        <div className="absolute top-16 right-4 sm:top-20 sm:right-8">
          <img 
            src="https://res.cloudinary.com/dhkfjehat/image/upload/v1749919737/Arrow_12_izac2n.svg"
            alt="Arrow pointing to FAQ"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-4xl">
          {/* FAQ Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="bg-white inline-block rounded-lg sm:rounded-xl lg:rounded-2xl px-1 sm:px-1.5 py-1 sm:py-1.5 border-2 border-black">
              <div className="inline-block bg-white rounded-md sm:rounded-lg lg:rounded-xl px-6 sm:px-10 lg:px-16 xl:px-18 py-1.5 sm:py-2 border-2 border-black border-dashed">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black tracking-wide">
                  FAQS
                </h2>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-1 sm:space-y-2 lg:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[index]}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;