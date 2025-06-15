"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { dollarSign } from "@/config/sponsors";
const RotatingDollarIcon = () => {
  const dollarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minScroll = 300;
      const maxScroll = 600;
      if (window.innerWidth < 700) return;
      if (scrollY < minScroll) {
        if (dollarRef.current) {
          dollarRef.current.style.transform = `rotate(0deg)`;
        }
      } else if (scrollY > maxScroll) {
        if (dollarRef.current) {
          dollarRef.current.style.transform = `rotate(360deg)`;
        }
      } else {
        const progress = (scrollY - minScroll) / (maxScroll - minScroll);
        const rotation = progress * 360;
        const move = progress * 100;
        if (dollarRef.current) {
          dollarRef.current.style.transform = `rotate(${rotation}deg) `;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      // ref={dollarRef}
      className=" overflow-hidden absolute top-[360px] right-[-20px] w-[90px] h-[90px] rotate-0     lg:-rotate-0 lg:absolute lg:top-[450px] lg:right-[-40px] lg:h-[212.79412793542804px] lg:w-[212.79412793542804px] lg:z-2 lg:fit "
    >
      <Image
        width={212.79412793542804}
        height={212.79412793542804}
        alt="Dollar Sign"
        src={dollarSign}
        className=" w-auto  h-auto object-cover"
      />
    </div>
  );
};

export default RotatingDollarIcon;
