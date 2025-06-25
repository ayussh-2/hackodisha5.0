"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { dollarBag } from "@/config/sponsors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const RotatingDollarBagIcon = () => {
    const dollarBagRef = useRef(null);

    useEffect(() => {
        gsap.to(dollarBagRef.current,{
            rotate: 360,
            scrollTrigger: {
                trigger: dollarBagRef.current,
                start: "top bottom",
                end: "bottom top",
                markers: false,
                scrub: true
            }
           })
    }, []);

    return (
        <div
            
            className="overflow-hidden absolute top-[750px] left-[-20px] w-[100px] h-[100px]lg:absolute lg:top-[950px] lg:left-[-50px] lg:w-[200.7941px] lg:h-[200.7941px]   "
        >
            <Image
                ref={dollarBagRef}
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
