"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { dollarBag } from "@/config/sponsors";
const RotatingDollarBagIcon = () => {
    const dollarBagRef = useRef(null);

    useEffect(() => {
        const handleScrollBag = () => {
            const scrollY = window.scrollY;

            const minScroll = 400;
            const maxScroll = 1400;
            if (window.innerWidth < 700) return;
            if (scrollY < minScroll) {
                if (dollarBagRef.current) {
                    dollarBagRef.current.style.transform = `rotate(0deg)`;
                }
            } else if (scrollY > maxScroll) {
                if (dollarBagRef.current) {
                    dollarBagRef.current.style.transform = `rotate(360deg)`;
                }
            } else {
                const progress =
                    (scrollY - minScroll) / (maxScroll - minScroll);
                const rotation = progress * 360;
                const move = progress * 100;
                if (dollarBagRef.current) {
                    dollarBagRef.current.style.transform = `rotate(${
                        1 * rotation
                    }deg) `;
                }
            }
        };

        window.addEventListener("scroll", handleScrollBag);
        return () => window.removeEventListener("scroll", handleScrollBag);
    }, []);

    return (
        <div
            ref={dollarBagRef}
            className="overflow-hidden absolute top-[750px] left-[-20px] w-[100px] h-[100px]lg:absolute lg:top-[950px] lg:left-[-50px] lg:w-[200.7941px] lg:h-[200.7941px]   "
        >
            <Image
                width={96}
                height={96}
                src={dollarBag}
                alt="money bag"
                className="w-auto  h-auto object-cover"
            />
        </div>
    );
};

export default RotatingDollarBagIcon;
