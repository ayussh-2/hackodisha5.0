"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../shared/section-title";
import ProfileCard from "./ProfileCard";
import { judges } from "@/config/judges";

const Judges = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <SectionTitle
                title={"MENTORS & JUDGES"}
                lineGradient="white-purple"
            />

            <div
                ref={sectionRef}
                className="bg-[#BC82FE] w-full flex justify-center items-center py-8 md:py-12 lg:py-16 overflow-hidden"
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
                        {judges.map((judge, index) => (
                            <div
                                key={judge.name}
                                className={`w-full max-w-[280px] transform transition-all duration-300 ${
                                    isVisible
                                        ? "opacity-100 scale-100 translate-y-0"
                                        : "opacity-0 scale-95 translate-y-5"
                                }`}
                                style={{
                                    animationDelay: `${0.1 + index * 0.2}s`,
                                    transitionDelay: `${0.1 + index * 0.2}s`,
                                }}
                            >
                                <ProfileCard
                                    cn="block text-sm sm:text-base lg:text-lg text-black mt-1 lg:mt-2 font-light max-md:text-xs max-sm:text-[11px] max-[360px]:text-[10px]"
                                    name={judge.name}
                                    title={judge.title}
                                    imageUrl={judge.imageUrl}
                                    socialLinks={judge.socialLinks}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Judges;
