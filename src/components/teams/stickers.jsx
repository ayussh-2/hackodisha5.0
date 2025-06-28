"use client";

import { useState } from "react";
import { teamMembers } from "../../config/teams/index";
import Image from "next/image";

export default function Stickers() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const sortedMembers = [...teamMembers].sort((a, b) =>
        a.role.localeCompare(b.role)
    );

    return (
        <div className="relative bg-[#BC82FE] min-h-screen overflow-hidden py-16 px-4 sm:px-6 md:px-8 flex justify-center">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                    {sortedMembers.map((member, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="text-center group cursor-pointer"
                                onClick={() => handleClick(index)}
                            >
                                <div className="relative  w-full aspect-square  overflow-hidden  mb-4 mx-auto max-w-sm">
                                    <Image
                                        src={member.defaultImage}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw,
                           (max-width: 768px) 50vw,
                           (max-width: 1280px) 33vw,
                           25vw"
                                        className={`absolute inset-0 object-cover transition-opacity duration-500 ease-in-out
                      ${
                          isActive ? "opacity-0" : "opacity-100"
                      } group-hover:opacity-0`}
                                        priority={index === 0}
                                    />
                                    <Image
                                        src={member.hoverImage}
                                        alt={`${member.name} hover`}
                                        fill
                                        sizes="(max-width: 640px) 100vw,
                           (max-width: 768px) 50vw,
                           (max-width: 1280px) 33vw,
                           25vw"
                                        className={`absolute inset-0 object-cover transition-opacity duration-500 ease-in-out
                      ${
                          isActive ? "opacity-100" : "opacity-0"
                      } group-hover:opacity-100`}
                                    />
                                </div>
                                <h3 className="text-white font-bold font-clash-display text-xl sm:text-2xl md:text-3xl xl:text-4xl mb-1 drop-shadow hover:scale-110 transition-all duration-300 capitalize">
                                    {member.name}
                                </h3>
                                <p className="capitalize text-black font-archivo text-sm sm:text-base md:text-2xl xl:3xl">
                                    {member.role}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
