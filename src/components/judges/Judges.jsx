"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../shared/section-title";
import ProfileCard from "./ProfileCard";

const Judges = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const judges = [
        {
            name: "Alejandro Acuna Rodriguez",
            title: "Brooklyn, United States - Head of StableCoins at CrossMint",
            imageUrl:
                "https://res.cloudinary.com/dpidvvdgr/image/upload/v1751531154/j1_qrdwt2.jpg",
            socialLinks: {
                x: "",
                instagram: "",
                linkedin:
                    "https://www.linkedin.com/in/alexacu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuyBDWM9pSNW3Vi1nO7IBfQ%3D%3D",
            },
        },
        {
            name: "Sidharth Raja",

            title: "San Francisco, United States - Senior Software Engineer (Google)\n -   Software Engineer Ex-Uber",
            imageUrl:
                "https://res.cloudinary.com/dpidvvdgr/image/upload/v1751531780/j2_k3pdp2.jpg",
            socialLinks: {
                x: "",
                instagram: "",
                linkedin:
                    "https://www.linkedin.com/in/sidharthraja?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bs2TkPBbnRI6sHyVliKUXsQ%3D%3D",
            },
        },
        {
            name: "Utkarsh Shrivastava",
            title: "An Entrepreneur, Public Speaker\nEx-Polygon - Threeway Studio - Web3 Carnival & Degen Summit",
            imageUrl:
                "https://res.cloudinary.com/dpidvvdgr/image/upload/c_crop,w_255,h_180,g_auto,e_improve/v1751531780/j4_x5baf2.jpg",
            socialLinks: {
                x: "https://twitter.com/Utkarsh_Web3/",
                instagram: "",
                linkedin: "https://www.linkedin.com/in/utkarsh-shrivastava7",
            },
        },
        {
            name: "Smit Patel",
            title: "India Ecosystem Manager \n Wormhole Foundation",
            imageUrl:
                "https://res.cloudinary.com/dtis6vqc5/image/upload/v1752061214/Screenshot_2025-07-09_170748_a5h1ro.png",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/imsp18/",
                instagram: "",
                x: "",
            },
        },
    ];

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
