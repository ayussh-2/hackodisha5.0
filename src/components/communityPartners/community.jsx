"use client";

import Image from "next/image";
import SectionTitle from "../shared/section-title";
import { communityPartners } from "@/config/community";
import Marquee from "react-fast-marquee";

export default function Community() {
    return (
        <>
            <SectionTitle
                title={"COMMUNITY PARTNERS"}
                lineGradient="purple-white"
            />
            <div className="flex flex-col items-center justify-center w-full overflow-hidden min-h-[640px] px-4 sm:px-8 lg:px-16 xl:px-24 mx-auto bg-[#EFE7F7]">
                <div className="flex flex-col items-start self-stretch py-12 md:py-24">
                    <div className="w-full overflow-hidden">
                        <Marquee
                            speed={60}
                            gradient={true}
                            gradientColor="#EFE7F7"
                            gradientWidth={100}
                            pauseOnHover={true}
                            className=""
                        >
                            {communityPartners.map((partner, index) => (
                                <div
                                    key={`${partner.id}-${index}`}
                                    className="flex flex-col items-center mx-4 md:mx-6"
                                >
                                    <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-2 border-purple-300 p-1">
                                        <div className="w-full h-full rounded-full border-2 border-dashed border-purple-700 flex items-center justify-center p-5 overflow-hidden bg-white">
                                            <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
                                                <Image
                                                    src={partner.image}
                                                    alt=""
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    );
}
