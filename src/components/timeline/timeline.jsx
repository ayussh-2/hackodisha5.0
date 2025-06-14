'use client';

import { useState } from 'react';
import Image from 'next/image';

const Timeline = () => {
  const [activeDay, setActiveDay] = useState('Day 1');

  const schedule = {
    'Day 1': [
      { time: '7:30', label: 'Check In Starts' },
      { time: '8:00', label: 'Check In Starts' },
      { time: '9:00', label: 'Check In Starts' },
      { time: '10:00', label: 'Check In Starts' },
      { time: '11:00', label: 'Check In Starts' },
      { time: '1:00', label: 'Check In Starts' },
      { time: '2:00', label: 'Check In Starts' },
      { time: '4:00', label: 'Check In Starts' },
      { time: '6:00', label: 'Check In Starts' },
    ],
    'Day 2': [
      { time: '7:30', label: 'Check In Ends' },
      { time: '8:30', label: 'Check In Ends' },
      { time: '10:00', label: 'Check In Ends' },
      { time: '12:00', label: 'Check In Ends' },
      { time: '1:30', label: 'Check In Ends' },
      { time: '3:00', label: 'Check In Ends' },
      { time: '5:00', label: 'Check In Ends' },
      { time: '6:00', label: 'Check In Ends' },
      { time: '8:00', label: 'Check In Ends' },
    ],
  };

  const dateMap = {
    'Day 1': 'SEPTEMBER 06 , 2025',
    'Day 2': 'SEPTEMBER 07 , 2025',
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EFE7F7] px-4 py-8 relative">
      <div className="absolute top-6 right-4 z-10">
        <Image
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840677/Arrow_01_w0sewq.svg"
          alt="Top Right Arrow"
          width={122}
          height={136}
        />
      </div>
      <div className="absolute bottom-1 -left-4 z-10">
        <Image
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840676/Arrow_02_qya9jb.svg"
          alt="Bottom Left Arrow"
          width={130}
          height={114}
        />
      </div>

      <div className="rounded-[2rem] border-[2px] border-black bg-[#D3AEFF] w-[calc(100vw-4rem)] max-w-[960px] px-[clamp(2rem,2.44rem,5vw)] pt-[clamp(2rem,3.51rem,5vw)] pb-[clamp(2rem,3.51rem,5vw)]">
        <div className="rounded-[1.5rem] border border-black bg-[#FAF5FF] w-full pt-8 px-6 pb-6 relative overflow-hidden">
          <div className="absolute top-4 left-8 z-10 hidden sm:block lg:block">
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840677/clock_amvgts.svg"
              alt="Clock Icon"
              width={90}
              height={90}
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px]"
            />
          </div>

          <div className="absolute top-2 right-12 z-10 block sm:hidden">
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840677/clock_amvgts.svg"
              alt="Clock Icon"
              width={40}
              height={40}
            />
          </div>

          <div className="absolute bottom-6 right-3 z-10">
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840676/rewind_tcfsnc.svg"
              alt="Reload Icon"
              width={36}
              height={36}
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
            <div className="w-[85%] flex justify-start">
              <div className="ml-[32px]">
                <p className="text-lg sm:text-xl text-black font-archivo font-semibold">
                  {dateMap[activeDay]}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center relative">
            {schedule[activeDay].map((event, idx) => (
              <div key={idx} className="relative z-10 mb-3 flex w-[85%] items-center min-h-[60px]">
                <div className="flex flex-col  items-center justify-center min-w-[24px] h-full">
                  <Image
                    src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840677/dot_jr2zjr.svg"
                    alt="Timeline Dot"
                    width={26}
                    height={26}
                  />
                  {idx !== schedule[activeDay].length - 1 && (
                    <div className="h-[28px] mt-[2px] flex items-center justify-center">
                      <Image
                        src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1749840676/Line_48_rbxrhy.svg"
                        alt="Dotted Line"
                        width={2}
                        height={32}
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center px-3 py-2 rounded-full border border-black bg-white w-[calc(100%-2rem)] justify-start space-x-4 ml-2 flex-shrink-0">
                  <div className="bg-[#FFD32B] text-sm sm:text-md font-archivo font-semibold px-6 sm:px-8 py-1 rounded-full border border-black text-black">
                    {event.time}
                  </div>
                  <p className="text-sm font-archivo font-semibold text-black whitespace-nowrap truncate">
                    {event.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
