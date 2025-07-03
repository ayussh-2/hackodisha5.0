import React from "react";
import Image from "next/image";

const ProfileCard = ({ name, title, imageUrl, cn, socialLinks }) => {
    const handleSocialClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            className="bg-[#fbfdfd] w-full sm:min-h-[2rem]  max-w-[19rem] mx-auto p-4 sm:p-5 lg:p-6 border-[1.5px] border-[#030303] shadow-[2px_5px_5px_rgba(0,0,0,1)] text-center text-[#0e0e0e] transition-all rounded-3xl duration-300 hover:-translate-y-[5px] flex flex-col
      max-lg:max-w-[16rem]
      max-md:max-w-[14rem]
      max-sm:max-w-[12rem]
      max-[360px]:max-w-[10rem]"
        >
            {/* Image Container */}
            <div
                className="mx-auto mb-4 sm:mb-5 lg:mb-6 w-full aspect-square max-w-[180px] border-2 border-dashed border-[#191a1ac7] rounded-3xl overflow-hidden p-1 flex items-center justify-center
        max-lg:max-w-[160px]
        max-md:max-w-[140px]
        max-sm:max-w-[120px]
        max-[360px]:max-w-[100px]"
            >
                <div className="relative w-full h-full rounded-3xl overflow-hidden  ">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                        className="rounded-3xl object-cover scale-[0.95] hover:scale-[1.02] transition-transform duration-300"
                        quality={80}
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col">
                <p className="px-1 mt-2 text-center">
                    <span
                        className="block text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2
            max-md:text-sm
            max-sm:text-xs"
                    >
                        {name}
                    </span>
                    <span
                        className={`${cn} block text-xs sm:text-sm md:text-base
            max-sm:text-[0.7rem]`}
                    >
                        {title}
                    </span>
                </p>

                {/* Social Links */}
                <div className="mt-4 sm:mt-5 lg:mt-6 mb-2 flex justify-center">
                    <div className="flex justify-center gap-3 sm:gap-4   relative  ">
                        {socialLinks?.instagram && (
                            <button
                                onClick={() =>
                                    handleSocialClick(socialLinks.instagram)
                                }
                                className="hover:opacity-80 focus:outline-none cursor-pointer"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/insta_cqxnrd.svg"
                                    alt="Instagram"
                                    width={32}
                                    height={32}
                                    className="rounded-3xl w-6 h-6 sm:w-7 sm:h-7 transition-all hover:scale-110 bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] hover:bg-[rgba(239,231,247,0.76)]"
                                />
                            </button>
                        )}

                        {socialLinks?.x && (
                            <button
                                onClick={() => handleSocialClick(socialLinks.x)}
                                className="hover:opacity-80 focus:outline-none cursor-pointer"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/twitter_rdcoxx.svg"
                                    alt="x"
                                    width={32}
                                    height={32}
                                    className="rounded-3xl w-6 h-6 sm:w-7 sm:h-7 transition-all hover:scale-110 bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] hover:bg-[rgba(239,231,247,0.76)]"
                                />
                            </button>
                        )}

                        {socialLinks?.linkedin && (
                            <button
                                onClick={() =>
                                    handleSocialClick(socialLinks.linkedin)
                                }
                                className=" rounded-3xl  hover:opacity-80 focus:outline-none cursor-pointer"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dpidvvdgr/image/upload/v1751539394/linkedin-svgrepo-com_sqpxer.svg"
                                    alt="LinkedIn"
                                    width={32}
                                    height={32}
                                    className="rounded-3xl w-6 h-6 sm:w-7 sm:h-7 transition-all hover:scale-110 bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] hover:bg-[rgba(239,231,247,0.76)]"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
