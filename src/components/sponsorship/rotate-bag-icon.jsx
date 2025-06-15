'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
const RotatingDollarBagIcon = () => {
  const dollarBagRef = useRef(null);

  useEffect(() => {
    const handleScrollBag = () => {
      const scrollY = window.scrollY;
        // Define scroll limits
      const minScroll = 400; // Minimum scroll position to start rotation
      const maxScroll = 1400; // Maximum scroll position to end rotation
     if (window.innerWidth < 700) return;
     if (scrollY < minScroll) {
        // Before scroll range — no rotation
        if (dollarBagRef.current) {
          dollarBagRef.current.style.transform = `rotate(0deg)`;
        }
      } else if (scrollY > maxScroll) {
        // After scroll range — full 360°
        if (dollarBagRef.current) {
          dollarBagRef.current.style.transform = `rotate(360deg)`;
        }
      } else {
        // During scroll range — calculate progress and rotate
        const progress = (scrollY - minScroll) / (maxScroll - minScroll);
        const rotation = progress * 360;
        const move= progress *100 ; // Adjust this value to control the horizontal movement
        if (dollarBagRef.current) {
          dollarBagRef.current.style.transform = `rotate(${1*rotation}deg) `; //translateX(${-1*move}
        }
      }
    };

    window.addEventListener('scroll', handleScrollBag);
    return () => window.removeEventListener('scroll', handleScrollBag);
  }, []);

  return (
   <div ref={dollarBagRef} className="overflow-hidden absolute top-[750px] left-[-20px] w-[100px] h-[100px]lg:absolute lg:top-[950px] lg:left-[-50px] lg:w-[200.7941px] lg:h-[200.7941px] z-1   ">
          <Image
            width={96}
            height={96}
            src="https://res.cloudinary.com/ddycqjdeu/image/upload/v1749914548/Frame_10_axyb17.svg"
            alt="money bag"   
            className="w-auto  h-auto object-cover"
            />
    </div>
  );
};

export default RotatingDollarBagIcon;