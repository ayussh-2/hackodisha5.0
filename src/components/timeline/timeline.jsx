'use client';
import { useState } from 'react';
import Image from 'next/image';
import { schedule, dateMap, topArrow, bottomArrow, clockIcon, reloadIcon, timelineDot, dottedLine, webwizLogo } from '@/config/timeline/index';
import SectionTitle from "../shared/section-title";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState('Day 1');

  return (
    <div>
      <div className="absolute w-full overflow-visible mt-[-7rem]">
        <div className="flex items-center justify-center relative">          
          <SectionTitle title="TIME LINE" />
          <div className="lg:absolute lg:h-[150px] lg:top-2 lg:left-0  z-1 absolute top-2 left-0  h-[100px]">
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
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EFE7F7] px-4 py-8 relative">
      
      
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

      
      <div className="rounded-[2rem] mt-24 border-[2px] border-black bg-[#D3AEFF] w-[calc(100vw-4rem)] max-w-[960px] px-[clamp(1rem,4vw,2.44rem)] pt-[clamp(2rem,3.51rem,5vw)] pb-[clamp(2rem,3.51rem,5vw)]">
        <div className="rounded-[1.5rem] border border-black bg-[#FAF5FF] w-full pt-8 px-6 pb-6 relative overflow-hidden">
          
          <div className="absolute top-4 left-8 z-10 hidden min-[437px]:block max-[580px]:left-4 max-[520px]:left-2 max-[500px]:left-1 max-[460px]:left-0">
            <Image
              src={clockIcon}
              alt="Clock Icon"
              width={90}
              height={90}
              className="w-[90px] h-[90px] max-[697px]:w-[55px] max-[697px]:h-[55px] max-[640px]:w-[60px] max-[640px]:h-[60px] max-[520px]:w-[50px] max-[520px]:h-[50px] max-[480px]:w-[45px] max-[480px]:h-[45px] max-[450px]:w-[40px] max-[450px]:h-[40px]"
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

          
          <div className="flex justify-center mb-6 mt-[-15px]">
            <div className="flex bg-[#FFD32B] p-1 rounded-xl border border-black">
              {['Day 1', 'Day 2'].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-8 sm:px-12 py-2 rounded-xl font-archivo font-bold text-lg sm:text-2xl transition-all duration-300 text-black ${
                    activeDay === day
                      ? 'bg-white border border-black shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)]'
                      : 'bg-[#FFD32B] border-none'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-[85%] flex justify-start max-[640px]:justify-center">
              <div className="ml-[32px] max-[640px]:ml-0">
                <p className="text-[clamp(14px,4vw,20px)] text-black font-archivo font-semibold whitespace-nowrap">
                  {dateMap[activeDay]}
                </p>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col items-center relative">
            {schedule[activeDay].map((event, idx) => (
              <div key={idx} className="relative z-10 mb-3 flex w-[85%] items-center min-h-[60px] max-[640px]:w-[90%] max-[520px]:w-[95%] max-[480px]:w-[98%]">
                
                <div className="flex flex-col  items-center justify-center min-w-[24px] h-full max-[520px]:min-w-[20px] max-[480px]:min-w-[18px]">
                  <Image
                    src={timelineDot}
                    alt="Timeline Dot"
                    width={26}
                    height={26}
                    className="max-[520px]:w-[22px] max-[520px]:h-[22px] max-[480px]:w-[20px] max-[480px]:h-[20px]"
                  />
                  {idx !== schedule[activeDay].length - 1 && (
                    <div className="h-[28px] mt-[2px] flex items-center justify-center max-[520px]:h-[24px] max-[480px]:h-[22px]">
                      <Image
                        src={dottedLine}
                        alt="Dotted Line"
                        width={2}
                        height={32}
                        className="max-[520px]:h-[28px] max-[480px]:h-[26px]"
                      />
                    </div>
                  )}
                </div>

                
                <div className="flex items-center px-3 py-2 rounded-full border border-black bg-white w-[calc(100%-2rem)] justify-start space-x-4 ml-2 flex-shrink-0 max-[640px]:px-2 max-[520px]:px-1.5 max-[480px]:px-1 max-[640px]:space-x-2 max-[480px]:space-x-1 max-[520px]:ml-1 max-[480px]:ml-0.5">
                  <div className="bg-[#FFD32B] text-sm sm:text-md font-archivo font-semibold px-6 sm:px-8 py-1 rounded-full border border-black text-black max-[640px]:px-4 max-[520px]:px-3 max-[480px]:px-2 max-[640px]:text-xs max-[480px]:py-0.5">
                    {event.time}
                  </div>
                  <p className="text-sm font-archivo font-semibold text-black whitespace-nowrap truncate max-[640px]:text-xs max-[480px]:text-[11px]">
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
  );
};

export default Timeline;



