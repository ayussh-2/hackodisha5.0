import { Boom, Pencil, Question } from "@/config/whatisho";
import React from "react";
import Image from "next/image";

function WhatIsHackOdisha() {
    return (
        <div
            className="bg-[#BC82FE] min-h-full flex items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-18"
            id="about"
        >
            <div className="bg-[#FAF5FF] w-full border-2 max-w-7xl border-black rounded-[3rem] md:rounded-[6rem] px-4 sm:px-8 lg:px-16 xl:px-24 py-6 sm:py-8 lg:py-12 relative">
                <Image
                    src={Boom}
                    alt="Decorative bang icon"
                    width={0}
                    height={0}
                    className="absolute top-[43%] sm:top-[40%] lg:top-[29%] left-[5%] w-[9%] sm:left-[2%] sm:w-[12%] h-[15%]"
                />

                <Image
                    src={Question}
                    width={0}
                    height={0}
                    alt="Signature curl"
                    className="absolute top-[45%] sm:top-[40%] left-[12%] lg:top-[28%] sm:left-[11%] w-[3%] sm:w-[5%] h-[4%] sm:h-[6%]"
                />

                <div className="flex flex-col items-center justify-center gap-8 md:gap-16 max-w-7xl px-8">
                    <ul className="flex p-4 gap-3 max-md:gap-2 max-sm:gap-1">
                        {Array.from({ length: 17 }).map((_, index) => (
                            <li
                                key={index}
                                className="bg-[#BC82FE] w-[clamp(.75rem,3vw,2.5rem)] h-[clamp(.75rem,3vw,2.5rem)] rounded-3xl shadow-[5px_6px_4px_0px_#00000040_inset]"
                            ></li>
                        ))}
                    </ul>
                    <div className="max-w-full  rounded-3xl p-2 h-[90px] sm:h-[141px] bg-#FFF w-full ssm:w-[88%] sm:w-[65%] lg:w-[83%] hack-shadow">
                        <div
                            className="rounded-2xl flex flex-col justify-center items-center border-black h-full"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23000000' stroke-width='6' stroke-dasharray='8%2c 18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                            }}
                        >
                            <h1 className="max-w-full text-center text-[1rem] sm:text-[1.37rem] md:text-3xl lg:text-[3rem] tracking-wide font-semibold text-black font-clash-display">
                                What is{" "}
                                <span className="text-[#671FAA]">
                                    HACKODISHA
                                </span>{" "}
                                ?
                            </h1>
                        </div>
                    </div>
                    {/* <ul className="flex flex-col max-w-[1100px] p-4 w-[80vw] z-10 top-[52%] lg:top-[41%] absolute justify-between items-start ">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <li
                                key={index}
                                className="h-[1px] z-10 w-full bg-[#AEAEAE]"
                            ></li>
                        ))}
                    </ul> */}
                    <Image
                        src={Pencil}
                        width={0}
                        height={0}
                        alt="Curled arrow"
                        className="absolute z-30 bottom-[0%] right-[8%] sm:right-[5%] w-[6%] h-[25%] sm:h-[10%] md:h-[17%] "
                    />
                    <div className="leading-[1.2rem] sm:leading-normal">
                        <div className="text-black text-center text-[0.8rem] sm:text-base md:text-xl  xl:text-[1.75rem] pt-2 font-semibold font-archivo leading-relaxed sm:leading-relaxed lg:leading-[55px]">
                            HackOdisha- a thrilling{" "}
                            <span className="text-[#7920D0]">
                                36-hour online hackathon
                            </span>{" "}
                            organized by
                            <span className="text-[#7920D0]">
                                {" "}
                                Webwiz, Nit Rourkela & The NAMESPACE Community
                            </span>
                            — an event dedicated to fostering community
                            collaboration. With an impressive turnout of over
                            5000 participants across India, this hackathon
                            promises to be a platform where innovation knows no
                            bounds
                        </div>
                        <br />
                        <div className="text-black text-center text-[0.8rem] sm:text-base md:text-xl   xl:text-[1.75rem] font-archivo  leading-normal lg:pt-8 font-semibold sm:leading-relaxed lg:leading-[55px]">
                            We celebrate the power of technology and the
                            indomitable spirit of our participants. Together,
                            we're shaping a brighter future through
                            <span className="text-[#7920D0]">
                                {" "}
                                innovation and collaboration.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatIsHackOdisha;
