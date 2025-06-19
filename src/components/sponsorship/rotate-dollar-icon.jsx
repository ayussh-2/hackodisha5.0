"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { dollarSign } from "@/config/sponsors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const RotatingDollarIcon = () => {
    const dollarRef = useRef(null);

    useEffect(() => {
       gsap.to(dollarRef.current,{
        rotate: 360,
        scrollTrigger: {
            trigger: dollarRef.current,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true
        }
       })

       return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    }, []);

    return (
        <div
            
            className=" overflow-hidden absolute top-[360px] right-[-20px] w-[90px] h-[90px] rotate-0     lg:-rotate-0 lg:absolute lg:top-[450px] lg:right-[-40px] lg:h-[212.79412793542804px] lg:w-[212.79412793542804px] lg:fit "
        >
            <Image
                ref={dollarRef}
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
