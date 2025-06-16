import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DISCORD_IMAGE, DISCORD_LINK } from "@/config/hero";
const Discord = () => {
    return (
        <Link
            href={DISCORD_LINK}
            target="_blank"
            className="relative z-20  px-2 "
        >
            <div className="flex py-2 px-4 rounded-[7px] border border-black bg-[#D3AEFF] shadow-[-2px_2px_0_rgba(0,0,0,0.85)] items-center gap-[10px] hover:bg-[#E4BBFF] hover:translate-y-[-2px] hover:shadow-[-3px_4px_0_rgba(0,0,0,0.85)] active:translate-y-[1px] active:shadow-[-1px_1px_0_rgba(0,0,0,0.85)] active:scale-[0.98] transition-all duration-150 ease-in-out transform-gpu cursor-pointer">
                <Image
                    src={DISCORD_IMAGE}
                    height={10}
                    width={20}
                    alt="discord"
                />

                <h1 className="text-[#000] text-base not-italic font-semibold leading-normal font-archivo">
                    Join discord
                </h1>
            </div>
        </Link>
    );
};

export default Discord;
