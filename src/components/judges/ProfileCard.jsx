import React from "react";
import Image from "next/image";

const ProfileCard = ({ name, title, imageUrl, cn, socialLinks }) => {
    const handleSocialClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            className="bg-[#fbfdfd] w-full h-full max-w-[19rem] mx-auto p-4 sm:p-5 lg:p-6 border-[1.5px] border-[#030303] shadow-[2px_5px_5px_rgba(0,0,0,1)] text-center text-[#0e0e0e] transition-all rounded-3xl duration-300 hover:-translate-y-[5px] hover:shadow-[3px_7px_8px_rgba(0,0,0,1)] flex flex-col group
      lg:max-w-[18rem]
      
      max-[360px]:p-3"
        >
            {/* Image Container */}
            <div
                className="mx-auto mb-4 sm:mb-5 lg:mb-6 w-full aspect-square max-w-[180px] border-2 border-dashed border-[#191a1ac7] rounded-3xl overflow-hidden p-1 flex items-center justify-center
        lg:max-w-[170px]
        md:max-w-[150px]
        sm:max-w-[130px]
        max-sm:max-w-[110px]
        max-[360px]:max-w-[90px]"
            >
                <div className="relative w-full h-full rounded-3xl overflow-hidden  ">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        sizes="(max-width: 360px) 90px, (max-width: 640px) 110px, (max-width: 768px) 130px, (max-width: 1024px) 150px, 170px"
                        className="rounded-3xl object-cover scale-[0.95] group-hover:scale-[1.02] transition-transform duration-300"
                        quality={80}
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col">
                <p className="px-1 mt-2 text-center">
                    <span
                        className="block text-base sm:text-lg lg:text-xl font-bricolage-grotesque font-bold text-black mb-2
            md:text-base
            max-sm:text-xs
            max-[360px]:text-[10px]"
                    >
                        {name}
                    </span>
                    <span
                        className={`${cn} font-archivo text-gray-600 !text-sm font-normal`}
                    >
                        {title}
                    </span>
                </p>

                {/* Social Links */}
                <div className="mt-4 sm:mt-5 lg:mt-6 mb-2 flex justify-center">
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 relative">
                        {socialLinks?.instagram && (
                            <button
                                onClick={() =>
                                    handleSocialClick(socialLinks.instagram)
                                }
                                className="hover:opacity-80 focus:outline-none cursor-pointer transition-all duration-200 scale-110"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/insta_cqxnrd.svg"
                                    alt="Instagram"
                                    width={32}
                                    height={32}
                                    className="rounded-3xl w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all hover:scale-110 bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] hover:bg-[rgba(239,231,247,0.76)]"
                                />
                            </button>
                        )}

                        {socialLinks?.x && (
                            <button
                                onClick={() => handleSocialClick(socialLinks.x)}
                                className="hover:opacity-80 focus:outline-none cursor-pointer transition-all duration-200  scale-110"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/twitter_rdcoxx.svg"
                                    alt="x"
                                    width={32}
                                    height={32}
                                    className="rounded-3xl w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all hover:scale-110 bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] hover:bg-[rgba(239,231,247,0.76)]"
                                />
                            </button>
                        )}

                        {socialLinks?.linkedin && (
                            <button
                                onClick={() =>
                                    handleSocialClick(socialLinks.linkedin)
                                }
                                className="rounded-3xl hover:opacity-80 focus:outline-none cursor-pointer transition-all duration-200 scale-110"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dpidvvdgr/image/upload/v1751539394/linkedin-svgrepo-com_sqpxer.svg"
                                    alt="LinkedIn"
                                    width={32}
                                    height={32}
                                    className="rounded-3xl w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all hover:scale-110 bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] hover:bg-[rgba(239,231,247,0.76)]"
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
