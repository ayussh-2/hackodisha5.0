import React from "react";

function WhatIsHackOdisha() {
  return (
    <div className="bg-[#BC82FE] min-h-full flex items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-18">
      <div className="bg-[#FAF5FF] w-full border-2 max-w-7xl border-black rounded-[6rem] px-4 sm:px-8 lg:px-16 xl:px-24 py-6 sm:py-8 lg:py-12 relative">
        <img
          src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1749964469/5_rvagrk.svg"
          alt="Decorative bang icon"
          className="absolute top-[29%] left-[2%] w-[12%] h-[15%]"
        />

        <img
          src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1749964469/Frame_jmpi5v.svg"
          alt="Signature curl"
          className="absolute top-[28%] left-[11%] w-[5%] h-[6%]"
        />

        <div className="flex flex-col items-center justify-center gap-8 md:gap-16 max-w-7xl px-8">
          <ul className="flex p-4 gap-[1.5vw] md:gap-[2vw]">
            {Array.from({ length: 17 }).map((_, index) => (
              <li
                key={index}
                className="bg-[#BC82FE] w-[clamp(.75rem,3vw,2.5rem)] h-[clamp(.75rem,3vw,2.5rem)] rounded-3xl shadow-[5px_6px_4px_0px_#00000040_inset]"
              ></li>
            ))}
          </ul>
          <div className="max-w-full -2 rounded-3xl p-2 h-[141px] bg-#FFF w-[65%] lg:w-[83%] hack-shadow">
            <div className="border-dashed rounded-2xl border-4 flex flex-col justify-center items-center border-black h-full">
              <h1 className="max-w-full text-[1.37rem] md:text-3xl lg:text-[3rem] tracking-wide font-semibold text-black font-clash-display">
                What is <span className="text-[#671FAA]">HACKODISHA</span> ?
              </h1>
            </div>
          </div>
          <ul className="flex flex-col  p-4 w-[80vw] z-10 top-[52%] lg:top-[41%] absolute justify-between items-start h-[278px] md:h-[280px] lg:h-[471px]">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index} className="h-[1px] z-10 w-full bg-[#AEAEAE]"></li>
            ))}
          </ul>
          <img
            src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1749964469/Vector_cchy9p.svg"
            alt="Curled arrow"
            className="absolute z-30 bottom-[12%] lg:bottom-[0%] right-[5%] w-[6%] h-[17%] "
          />
          <div className="h-[210px] md:h-[288px] lg:h-[471px] w-[70vw]">
            <div className="text-black text-center text-[0.6rem] sm:text-base md:text-xl   xl:text-[1.75rem] pt-2 font-semibold font-archivo leading-relaxed sm:leading-relaxed lg:leading-[55px]">
              HackOdisha- a thrilling{" "}
              <span className="text-[#7920D0]">36-hour online hackathon</span>{" "}
              organized by
              <span className="text-[#7920D0]"> Webwiz, Nit Rourkela</span>— an
              event dedicated to fostering community collaboration. With an
              impressive turnout of over 1600 participants across India, this
              hackathon promises to be a platform where innovation knows no
              bounds
            </div>
            <br />
            <div className="text-black text-center text-[0.6rem] sm:text-base md:text-xl   xl:text-[1.75rem] font-archivo  lg:pt-8 font-semibold leading-relaxed sm:leading-relaxed lg:leading-[55px]">
              We celebrate the power of technology and the indomitable spirit of
              our participants. Together, we're shaping a brighter future
              through
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
