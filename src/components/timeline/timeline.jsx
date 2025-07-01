"use client";
import { useState } from "react";
import Image from "next/image";
import {
    schedule,
    dateMap,
    topArrow,
    bottomArrow,
    clockIcon,
    reloadIcon,
    webwizLogo,
} from "@/config/timeline/index";
import SectionTitle from "../shared/section-title";
const Timeline = () => {
    const [activeDay, setActiveDay] = useState("Day 1");

    return (
        <div id="timeline">
            <div className="absolute w-full -translate-y-[2rem] z-50 overflow-visible">
                <div className="flex items-center justify-center relative">
                    <SectionTitle title="TIMELINE" />
                    <div
                        className="hidden lg:absolute lg:h-[150px] lg:top-2 lg:left-0  z-1 absolute top-2 left-0 h-[100px]"
                        id="timeline"
                    >
                        <Image
                            width={280.036}
                            height={80.2}
                            src={webwizLogo}
                            alt="Dev Mode on"
                            className="w-auto h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-full flex items-center justify-center bg-[#EFE7F7]  py-[120px] relative">
                <div className="absolute top-6 right-4 z-10 max-[414px]:top-10 max-[414px]:right-6">
                    <Image
                        src={topArrow}
                        alt="Top Right Arrow"
                        width={122}
                        height={136}
                        className="max-[414px]:w-[80px] max-[414px]:h-[90px]"
                    />
                </div>
                <div className="absolute bottom-1 -left-4 z-10">
                    <Image
                        src={bottomArrow}
                        alt="Bottom Left Arrow"
                        width={130}
                        height={114}
                    />
                </div>

                <div className="rounded-[6rem] mt-24 border-[2px] border-black bg-[#D3AEFF] w-full ssm:w-[calc(100vw-4rem)]   ssm:max-w-7xl px-[clamp(1rem,4vw,2.44rem)] pt-[clamp(2rem,3.51rem,5vw)] pb-[clamp(2rem,3.51rem,5vw)]">
                    <div className="rounded-[6rem] border border-black bg-[#FAF5FF] w-full pt-8 px-6 pb-6 relative overflow-hidden">
                        <div className="absolute top-4 left-8 z-10 hidden min-[619px]:block max-[580px]:left-4 max-[520px]:left-2 max-[500px]:left-1 max-[460px]:left-0">
                            <Image
                                src={clockIcon}
                                alt="Clock Icon"
                                width={90}
                                height={90}
                                className="w-[120px]"
                            />
                        </div>

                        <div className="absolute bottom-6 right-3 z-10 max-[640px]:right-2 max-[600px]:right-1 max-[560px]:right-1 max-[520px]:right-1 max-[480px]:right-1 max-[440px]:right-1">
                            <Image
                                src={reloadIcon}
                                alt="Reload Icon"
                                width={36}
                                height={36}
                                className="max-[600px]:w-[32px] max-[600px]:h-[32px] max-[520px]:w-[28px] max-[520px]:h-[28px] max-[480px]:w-[24px] max-[480px]:h-[24px] max-[440px]:w-[20px] max-[440px]:h-[20px]"
                            />
                        </div>

                        <div className="flex justify-center mb-5 md:mb-10 lg:mb-20">
                            <div className="flex bg-[#FFD32B] p-2.5 rounded-3xl border border-black">
                                {["Day 1", "Day 2"].map((day) => (
                                    <button
                                        key={day}
                                        onClick={() => setActiveDay(day)}
                                        className={`px-2 md:px-12 py-2 rounded-2xl font-archivo font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-300 text-black ${
                                            activeDay === day
                                                ? "bg-white border border-black shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)]"
                                                : "bg-[#FFD32B] border-none"
                                        }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mb-5 lg:mb-16">
                            <div className="w-[70%] flex justify-start max-[640px]:justify-center">
                                <div className="ml-[32px] max-[640px]:ml-0">
                                    <p className="text-[40px] max-sm:text-[20px] text-black font-archivo font-semibold whitespace-nowrap">
                                        {dateMap[activeDay]}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center relative ">
                            {/* <div className="">
                <Image src={DottedLine} alt="" />
              </div> */}
                            <div className="flex-col relative w-full justify-center items-center flex  h-full">
                                {schedule[activeDay].map((event, idx) => (
                                    <div
                                        key={idx}
                                        className="relative z-10 mb-3 sm:mb-7 flex  items-center w-[100%] lg:w-[80%]"
                                    >
                                        <div className="flex items-center px-3 py-2 rounded-full border border-black bg-white w-full justify-start space-x-4 ml-2 flex-shrink-0 max-[640px]:px-2 max-[520px]:px-1.5 max-[480px]:px-1 max-[640px]:space-x-2 max-[480px]:space-x-1 max-[520px]:ml-1 max-[480px]:ml-0.5 ">
                                            <div className="bg-[#FFD32B] text-[28px] max-sm:text-[14px] sm:text-md font-archivo font-semibold px-6 sm:px-8 py-1 rounded-full border border-black text-black max-[640px]:px-4 max-[520px]:px-3 max-[480px]:px-2 max-[640px]:text-xs max-[480px]:py-0.5">
                                                {event.time}
                                            </div>
                                            <p className="text-[28px] max-sm:text-[14px] font-archivo font-semibold text-black whitespace-nowrap truncate max-[640px]:text-xs max-[480px]:text-[11px]">
                                                {event.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
