"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "../shared/section-title";
import { arrow, plusIcon, quesMark, faqItems, XIcons } from "@/config/faq";
import { motion, AnimatePresence } from "framer-motion";

const PlusIcon = ({ className }) => (
  <Image
    src={plusIcon}
    alt="Plus Icon"
    width={24}
    height={24}
    className={className}
  />
);

const XIcon = ({ className }) => (
  <Image
    src={XIcons}
    alt="Close Icon"
    width={32}
    height={32}
    className={className}
  />
);

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  const containerRef = useRef(null);

  const handleToggle = (e) => {
    e.preventDefault();

    const currentScrollY = window.scrollY;
    const elementTop =
      containerRef.current?.getBoundingClientRect().top + currentScrollY;

    onToggle();

    requestAnimationFrame(() => {
      const newElementTop =
        containerRef.current?.getBoundingClientRect().top + window.scrollY;
      const scrollDiff = newElementTop - elementTop;

      if (Math.abs(scrollDiff) > 5) {
        window.scrollTo({
          top: currentScrollY + scrollDiff,
          behavior: "instant",
        });
      }
    });
  };

  return (
    <motion.div
      ref={containerRef}
      className="faq-item mb-2 sm:mb-3 lg:mb-4 relative"
      initial={{ y: 40, x: -40 }}
      animate={{ zIndex: isOpen ? 20 : 1 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`
          bg-[#FAF5FF] rounded-lg sm:rounded-xl lg:rounded-3xl border-2 border-black
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "shadow-[3px_3px_0px_rgba(0,0,0,0.9)]"
              : "shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
          }
        `}
      >
        <button
          className={`
            w-full p-3 sm:p-4 lg:p-6 text-left flex justify-between items-center
            transition-all duration-300 ease-in-out
            ${isOpen ? "" : "hover:shadow-md"}
          `}
          onClick={handleToggle}
        >
          <span className="font-semibold font-archivo text-gray-800 text-sm sm:text-xl lg:text-3xl  pr-2 sm:pr-3 leading-tight">
            {question}
          </span>
          <motion.div
            animate={{
              rotate: isOpen ? 90 : 0,
              scale: isOpen ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
            ) : (
              <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
            )}
          </motion.div>
        </button>{" "}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
              style={{ willChange: "height" }}
            >
              <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                <motion.p
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="text-neutral-700 font-archivo leading-[180%] text-xs sm:text-xl font-semibold"
                >
                  {answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function FaqSection() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newState = { ...prev };
      if (newState[index]) {
        delete newState[index];
      } else {
        Object.keys(newState).forEach((key) => delete newState[key]);
        newState[index] = true;
      }
      return newState;
    });
  };

  return (
    <div className="w-full" id="faqs">
      <SectionTitle title="FAQS" lineGradient="purple" />
      <section className="relative w-full py-8 sm:py-10 lg:py-20 bg-[#BC82FE] overflow-hidden">
        <div className="absolute bottom-1/3 left-4 sm:bottom-1/3 sm:left-8">
          <Image
            src={quesMark}
            alt="Question Mark"
            width={94}
            height={183}
            className="w-[45.873px] h-[90.361px] sm:w-[60px] sm:h-[156px] lg:w-[94.073px] lg:h-[183.106px] transition-all duration-300"
          />
        </div>

        <div className="absolute -top-1 right-4 sm:-top-1 sm:right-26">
          <Image
            src={arrow}
            alt="Arrow pointing to FAQ"
            width={80}
            height={80}
            className="w-[60px] h-[48px] xs:w-[72px] xs:h-[54px] sm:w-[64px] sm:h-[48px] md:w-[64px] md:h-[48px] lg:w-[80px] lg:h-[60px] xl:w-[80px] xl:h-[60px] transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-md lg:max-w-6xl mt-5 pb-4 sm:pb-6 lg:pb-8">
          <div className="faq-container ">
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

export default FaqSection;
