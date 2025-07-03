"use client";
import {
    HERO_ARROW_IMAGE,
    HERO_HAND_IMAGE,
    HERO_SWITCH_IMAGE,
    registerationLink,
    registerBtn,
} from "@/config/hero";
import { DiscordButton } from "../ui/resizable-navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import toast from "react-hot-toast";
const Svg = () => {
    const btnRef = useRef(null);
    const handRef = useRef(null);
    const switchRef = useRef(null);
    const heroArrowImageRef = useRef(null);
    const [isRotated, setIsRotated] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const section = sectionRef.current;
        const arrow = heroArrowImageRef.current;

        if (!section || !arrow) return;

        const followCursor = (e) => {
            if (window.innerWidth >= 1024) {
                const heroSection =
                    section.closest("#home") || section.closest('[id="home"]');
                if (!heroSection) return;

                const heroRect = heroSection.getBoundingClientRect();
                const isWithinHero =
                    e.clientX >= heroRect.left &&
                    e.clientX <= heroRect.right &&
                    e.clientY >= heroRect.top &&
                    e.clientY <= heroRect.bottom;

                if (!isWithinHero) {
                    gsap.to(arrow, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                    return;
                }

                const navbar = document.querySelector("#navbar");
                let isOverNavbar = false;

                if (navbar) {
                    const navRect = navbar.getBoundingClientRect();
                    isOverNavbar =
                        e.clientX >= navRect.left &&
                        e.clientX <= navRect.right &&
                        e.clientY >= navRect.top &&
                        e.clientY <= navRect.bottom;
                }

                if (isOverNavbar) {
                    // Fade out when over navbar
                    gsap.to(arrow, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                    return;
                }

                // Fade in and follow cursor when in hero but not over navbar
                gsap.to(arrow, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });

                const arrowRect = arrow.getBoundingClientRect();

                const x = e.clientX - arrowRect.width * 4;
                const y = e.clientY - arrowRect.height * 8;

                gsap.to(arrow, {
                    left: x + window.scrollX,
                    top: y + window.scrollY,
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
        };

        document.addEventListener("mousemove", followCursor);

        return () => {
            document.removeEventListener("mousemove", followCursor);
        };
    }, []);

    const handleClick = () => {
        const rotationAngle = isRotated ? 4 : 0;
        setIsRotated(!isRotated);

        const isMobile = window.innerWidth < 640;
        const HAND_MOVEMENT_DISTANCE = isMobile ? 10 : 20;

        gsap.to(btnRef.current, {
            rotate: rotationAngle,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(handRef.current, {
            y: HAND_MOVEMENT_DISTANCE,
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.to(switchRef.current, {
            scaleY: isRotated ? 1 : 0.7,
            transformOrigin: "bottom center",
            duration: 0.2,
            ease: "power2.out",
        });

        setTimeout(() => {
            window.open(registerationLink, "_blank");
        }, 200);

        // toast("Starting Soon!", {
        //     duration: 2000,
        //     style: {
        //         background: "#D3AEFF",
        //         color: "#000",
        //         fontSize: "16px",
        //         fontWeight: "bold",
        //         textAlign: "center",
        //         fontFamily: "Archivo, sans-serif",
        //     },
        // });
    };

    return (
        <section ref={sectionRef} className="relative pt-10">
            <div className="flex flex-col justify-center items-center">
                <Image
                    ref={handRef}
                    src={HERO_HAND_IMAGE}
                    width={0}
                    height={0}
                    alt="hand"
                    className="absolute w-[105px] sm:w-[130px] lg:w-[145px] top-0 z-[5]"
                />
                <div className="pointer-events-auto py-2 px-4 absolute top-[445px] sm:top-[550px] lg:top-[610px] border border-black w-[260px] sm:w-[300px] md:w-full md:max-w-sm h-[100px] sm:h-[110px] md:h-[130px] bg-[#FEDE64] rounded-3xl">
                    <Image
                        ref={switchRef}
                        src={HERO_SWITCH_IMAGE}
                        width={0}
                        height={0}
                        alt="ellipse"
                        className="w-12 sm:w-16 md:w-20 absolute left-35 -top-2 sm:left-40 md:left-50"
                    />

                    <div
                        ref={btnRef}
                        onClick={handleClick}
                        className="text-black border border-black text-center text-[17px] sm:text-[1rem] md:text-2xl not-italic leading-none bg-white  py-2  md:py-3 relative top-4 sm:top-6 md:top-8 rotate-4 hover:-rotate-0 transition-all duration-300 rounded-[0.25rem] shadow-[8px_7px_6.6px_0px_#F1C20E] cursor-pointer font-nunito-sans font-semibold"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <Image
                                src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1751529224/Layer_3_wnzgst.svg"
                                width={30}
                                height={30}
                                alt="devfolio"
                            />
                            Apply with Devfolio
                        </span>
                    </div>

                    <Image
                        ref={heroArrowImageRef}
                        src={HERO_ARROW_IMAGE}
                        width={0}
                        height={0}
                        alt="arrow"
                        className="w-28 h-12 lg:w-36 md:h-20 absolute z-[70]"
                        style={{ pointerEvents: "none" }}
                    />
                </div>
                <div className=" absolute top-[540px] sm:top-[685px]  md:top-[695px] lg:hidden">
                    <DiscordButton /> {/* disord button */}
                </div>
                <Image
                    src={
                        "https://res.cloudinary.com/du5qoczcn/image/upload/v1749966150/Layer_1-2_ajybag.svg"
                    }
                    width={0}
                    height={0}
                    alt="image"
                    className=" absolute  hidden lg:inline-block  lg:top-[520px]  lg:w-48  md:left-7/9 "
                />
                <Image
                    src={
                        "https://res.cloudinary.com/du5qoczcn/image/upload/v1750063878/Layer_1-3_ix8phk.svg"
                    }
                    width={0}
                    height={0}
                    alt="image"
                    className=" absolute w-48 lg:hidden top-[660px] sm:top-[772px] "
                />
                <div className="bg-[#A353F9] w-full lg:w-[15%]  lg:rotate-10 h-max rounded-2xl flex justify-center items-center absolute top-[830px] sm:top-[945px] p-1 lg:top-[700px] lg:left-[12%]">
                    <div className="relative w-full">
                        {/* Border Image */}
                        <Image
                            src="https://res.cloudinary.com/du5qoczcn/image/upload/v1750070382/Vector_kw9gui.svg"
                            width={0}
                            height={0}
                            alt="white-border"
                            className="w-full h-auto"
                        />

                        {/* Text inside the border */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src={
                                    "https://res.cloudinary.com/du5qoczcn/image/upload/v1750072183/Vector-2_ttx5sd.svg"
                                }
                                height={0}
                                width={0}
                                alt="text"
                                className="w-[70%] lg:w-[90%] lg:h-[60%] "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Svg;
