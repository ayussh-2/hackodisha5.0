'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function Footer() {
  return (
    <footer className="bg-[#BC82FE]">
      {/* Upper purple curve */}
      <div className="bg-[#D3AEFF] z-5 lg:rounded-t-[300px] md:rounded-t-[180px] rounded-t-[110px] relative transition-all">
        {/* Main content container */}
        <div className="bg-[#EFE7F7] text-gray-800 pt-9 md:pt-[71.38px] lg:rounded-t-[300px] md:rounded-t-[180px] rounded-t-[110px] transition-all relative overflow-hidden top-4 md:top-[42.43px] z-10">
          <div className="flex flex-col gap-y-[64px] px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-36 mb-18">
            {/* Sponsor & Sitemap */}
            <div className="w-full max-w-[1345px] mx-auto flex flex-col md:flex-row items-center md:justify-between justify-center px-14 gap-10">
              {/* Left Section */}
              <div className="flex flex-col gap-y-5 md:gap-y-12 w-full max-w-[455px] text-center md:text-left">
                <CldImage
                  src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749839074/Logo_rahw7d.jpg"
                  alt="logo"
                  width={180}
                  height={76}
                  crop={{ type: 'auto', source: true }}
                  className="mx-auto md:mx-0 md:w-[180px] md:h-[76px] w-[90px] h-[38px]"
                />
                <p className="font-bricolage-grotesque font-[700] text-[16px] md:text-[24px] lg:text-[32px] leading-[1.2]">
                  Want to become a sponsor of Hackodisha 5.0?
                </p>
                <button className="bg-[#ffd952] text-black px-2 py-1 md:px-10 md:py-5 mx-auto font-bricolage-grotesque font-[700] md:rounded-lg rounded-2xl shadow-[4px_6px_0px_#444] text-[16px] md:text-[29px] border-3 border-black hover:bg-[#ffe36e] hover:animate-pulse transition-all md:max-w-[364px] md:h-[78px] max-w-[180px] h-[50px] flex flex-row justify-center items-center md:mx-0">
                  Become a sponsor
                </button>
              </div>
              {/* Site map */}
              <div className="w-full max-w-[170px] text-center lg:text-left">
                <h3 className="font-archivo-black text-[18px] md:text-[24px] lg:text-[31px] mb-4 md:mb-[32px]">Site map</h3>
                <ul className="space-y-2 md:space-y-5 text-[16px] md:text-[20px] lg:text-[24px] font-archivo font-[600]">
                  {['About us', 'Prizes', 'Contact us', 'Sponsors', 'FAQs'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:underline hover:text-purple-800 transition-colors">
                        {item}<span className="ml-2 font-bold">&#8250;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 md:gap-[26.57px] mt-4 z-0 relative">
              {[
                ['icon_t4isnb.svg', 'Discord'],
                ['insta_cqxnrd.svg', 'Instagram'],
                ['facebook_sbhm8s.svg', 'Facebook'],
                ['twitter_rdcoxx.svg', 'Twitter'],
              ].map(([src, alt]) => (
                <Link key={alt} href="#" className="hover:scale-110 transition-transform">
                  <CldImage
                    src={`https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/${src}`}
                    alt={alt}
                    width={48}
                    height={48}
                    className='md:w-[48px] md:h-[48px] w-[24px] h-[24px]'
                    crop={{ type: 'auto', source: true }}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Decorative Images */}
          <div className="absolute bottom-80 md:bottom-7 left-0 z-0 md:w-[185px] md:h-[175px] w-[108px] h-[88px] ">
            <CldImage
              src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749847509/presents_jwdg0x.svg"
              alt="Webwiz Presents"
              width={185}
              height={175}
              crop={{ type: 'auto', source: true }}
            />
          </div>
          <div className="absolute bottom-2.5 md:bottom-7 right-0 z-0 md:w-[191.36px] md:h-[191.36px] w-[108px] h-[108px] ">
            <CldImage
              src="https://res.cloudinary.com/dtztahzfk/image/upload/v1749850891/wmain_d21xmo.png"
              alt="Webwiz Circle"
              width={191.36}
              height={191.36}
              crop={{ type: 'auto', source: true }}
            />
          </div>
        </div>

      </div>
      {/* Footer Bottom Text (Black Bar) */}
      <div className="text-center flex justify-center items-center text-[12px] md:text-[20px] lg:text-[24px] text-[#f6f0de] bg-black py-0 md:py-[14px] tracking-wide font-oxanium font-[600] h-10 md:h-[58px] w-full z-10 relative inset-y-0 bottom-0">
        Hackodisha 5.0 2025. Powered by Webwiz, NIT Rourkela.
      </div>
    </footer>
  );
}
