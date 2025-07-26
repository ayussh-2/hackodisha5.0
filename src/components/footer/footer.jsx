"use client";

import Image from 'next/image';
import Link from 'next/link';

import {
  footerAssets,
  footerLinks,
  socialLinks,
  sponsorCTA,
} from '@/config/footer';
import { shared } from '@/config/shared';

export default function Footer() {
    return (
        <footer className="bg-[#BC82FE]">
            <div className="bg-[#D3AEFF] z-5 lg:rounded-t-[300px] md:rounded-t-[180px] rounded-t-[110px] relative transition-all">
                <div className="bg-[#EFE7F7] text-gray-800 pt-9 md:pt-[71.38px] lg:rounded-t-[300px] md:rounded-t-[180px] rounded-t-[110px] transition-all relative overflow-hidden top-4 md:top-[42.43px] z-10">
                    <div className="flex flex-col gap-y-[64px] px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-36 mb-18">
                        <div className="w-full max-w-[1345px] mx-auto flex flex-col md:flex-row items-center md:justify-between justify-center px-14 gap-10">
                            {/* Left Section */}
                            <div className="flex flex-col gap-y-5 md:gap-y-12 w-full max-w-[455px] text-center md:text-left">
                                <Image
                                    src={footerAssets.logo}
                                    alt="logo"
                                    width={500}
                                    height={500}
                                    className="mx-auto md:mx-0 md:w-[180px] md:h-[76px] w-[180px] h-[80px]"
                                />
                                <p className="font-bricolage-grotesque font-[700] text-[16px] md:text-[24px] lg:text-[32px] leading-[1.2]">
                                    {sponsorCTA.heading}
                                </p>{" "}
                                <Link
                                    href={sponsorCTA.buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-[#ffd952] text-black px-2 py-1 md:px-10 md:py-5 mx-auto font-bricolage-grotesque font-[700] md:rounded-lg rounded-2xl shadow-[4px_6px_0px_#444] text-[16px] md:text-[29px] border-3 border-black hover:bg-[#ffe36e] hover:translate-y-[-2px] hover:shadow-[6px_8px_0px_#444] active:translate-y-[2px] active:shadow-[2px_3px_0px_#444] active:scale-[0.98] transition-all duration-150 ease-in-out md:max-w-[364px] md:h-[78px] max-w-[180px] h-[50px] flex flex-row justify-center items-center md:mx-0 transform-gpu hover:cursor-pointer">
                                        {sponsorCTA.buttonText}
                                    </button>
                                </Link>
                            </div>

                            {/* Site Map */}
                            <div className="w-full max-w-[170px] text-center lg:text-left">
                                <h3 className="font-archivo-black text-[18px] md:text-[24px] lg:text-[31px] mb-4 md:mb-[32px]">
                                    Site map
                                </h3>
                                <ul className="space-y-2 md:space-y-5 text-[16px] md:text-[20px] lg:text-[24px] font-archivo font-[600]">
                                    {footerLinks.map(({ label, href }) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                className="hover:text-[#BC82FE] transition-colors duration-300"
                                            >
                                                {label}{" "}
                                                <span className="ml-2 font-bold">
                                                    &#8250;
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="grid grid-cols-4 gap-4 md:gap-[26.57px] mt-4 z-0 relative justify-items-center max-w-fit mx-auto">
                            {socialLinks.map(
                                ({ src, alt, href, className }, idx) => {
                                    if (!src || !alt || !href)
                                        return (
                                            <div
                                                key={`social-icons-div-${idx}`}
                                            ></div>
                                        );
                                    return (
                                        <Link
                                            key={alt}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={src}
                                                alt={alt}
                                                width={48}
                                                height={48}
                                                className={`md:w-[48px] md:h-[48px] w-[24px] h-[24px] transition-all ${className}`}
                                            />
                                        </Link>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    {/* Decorative Images */}
                    <div className="absolute bottom-80 md:bottom-7 left-0 z-0 md:w-[160px] md:h-[175px] w-[108px] h-[88px]">
                        <Link href={shared.NAMESPACE.website} target="_blank">
                            <Image
                                src={footerAssets.presents}
                                alt="The NAMESPACE "
                                width={185}
                                height={175}
                                className="hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="absolute bottom-4.5 md:bottom-12 right-0 z-0 md:w-[191.36px] md:h-[191.36px] size-[100px] ssm:w-[108px] ssm:h-[108px]">
                        <Image
                            src={footerAssets.circle}
                            alt="Webwiz Circle"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="text-center flex flex-col justify-center items-center text-[16px] md:text-[20px] lg:text-[24px] text-[#f6f0de] bg-black py-2 md:py-4 tracking-wide font-oxanium font-[600] w-full z-10 relative inset-y-0 bottom-0">
                <span className="max-w-[1200px] w-full px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-36">
                    Hackodisha <span className="text-[#BC82FE]">5.0</span> 2025{" "}
                    <br />
                    Powered by <span className="text-[#BC82FE]">Webwiz</span>,
                    NIT Rourkela &&nbsp;
                    <Link href={shared.NAMESPACE.website} target="_blank">
                        <span className="text-[#BC82FE]">
                            &nbsp;NAMESPACE&nbsp;
                        </span>
                        .
                    </Link>
                </span>
            </div>
        </footer>
    );
}
