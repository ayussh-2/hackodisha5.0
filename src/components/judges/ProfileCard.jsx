import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  {
    src: "https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/insta_cqxnrd.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/webwiz.nitr/",
    className: "hover:scale-110",
  },
  {
    src: "https://res.cloudinary.com/dpidvvdgr/image/upload/v1751393821/ficon_lbevyi.svg",
    alt: "Facebook",
    href: "https://discord.com/invite/ewun7cxkJh",
    className: "hover:scale-110",
  },
  {
    src: "https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/twitter_rdcoxx.svg",
    alt: "Twitter",
    href: "https://x.com/hackodisha",
    className: "hover:scale-110",
  },
];

const ProfileCard = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-[#fbfdfd] w-full max-w-[19rem] mx-auto p-3 sm:p-4 lg:p-6 border-[1.5px] border-[#030303] shadow-[2px_5px_5px_rgba(0,0,0,1)] text-center text-[#0e0e0e] transition-all rounded-3xl duration-300 hover:-translate-y-[5px] flex flex-col
      max-lg:max-w-[15rem] max-lg:p-2
      max-md:max-w-[10rem] max-md:p-1.5
      max-sm:max-w-[9rem] max-sm:p-1
      max-[360px]:max-w-[8rem] max-[360px]:p-1">
      <div className="mx-auto mb-4 sm:mb-5 lg:mb-6 w-0 h-20 sm:w-48 sm:h-40 lg:w-32 lg:h-32 xl:w-36 xl:h-36 border-2 border-dashed border-[#191a1ac7] rounded-3xl overflow-hidden p-1 flex items-center justify-center
        max-lg:w-44 max-lg:h-40 max-lg:border-[2.5px]
        max-md:w-28 max-md:h-24 max-md:border-2 max-md:p-0.5
        max-sm:w-24 max-sm:h-20 max-sm:border-2
        max-[360px]:w-20 max-[360px]:h-16 max-[360px]:border-[1.5px]">
        <Image 
          src={imageUrl} 
          alt={name} 
          width={144}
          height={144}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <p className="px-1 mt-5 text-center
        max-md:mt-3 max-md:text-[1.1rem]
        max-sm:mt-2.5 max-sm:text-[1rem]
        max-[360px]:mt-2 max-[360px]:text-[0.9rem]">
        <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-gray-800">{name}</span>
        <span className="block text-sm sm:text-base lg:text-lg text-black mt-1 lg:mt-2 font-light
          max-md:text-xs
          max-sm:text-[11px]
          max-[360px]:text-[10px]">{title}</span>
      </p>
      <div className="mt-5 sm:mt-5 lg:mt-6 mb-2 flex justify-center
        max-md:mt-3
        max-sm:mt-2.5
        max-[360px]:mt-2">
        <div className="flex justify-center gap-3 sm:gap-4">
          {links.map(({ src, alt, href, className }) => (
            <Link key={alt} href={href} target='_blank'>
              <Image
                src={src}
                alt={alt}
                width={32}
                height={32}
                className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-all ${className} bg-[rgba(239,231,247)] shadow-[2px_2px_2px_0px_rgba(255,174,255,0.815)] rounded-[10px] hover:bg-[rgba(239,231,247,0.76)]
                  max-md:mr-2 max-md:rounded-[8px] max-md:w-5 max-md:h-5
                  max-sm:mr-1.5 max-sm:rounded-[6px] max-sm:w-4 max-sm:h-4
                  max-[360px]:mr-1 max-[360px]:rounded-[5px] max-[360px]:w-4 max-[360px]:h-4`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;