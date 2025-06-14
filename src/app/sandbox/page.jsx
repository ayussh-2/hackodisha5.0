
"use client";
import Image from 'next/image';

import RotatingDollarIcon from '../sponsorship/rotate-dollar-icon';
import RotatingDollarBagIcon from '../sponsorship/rotate-bag-icon';

const Page= () => {
  //to change sponsors update here
  const sponsors = Array(5).fill('https://res.cloudinary.com/ddycqjdeu/image/upload/v1749813307/solana_njcbvj.svg');

  const SponsorGroup = ({ title, sponsors }) => (
    <div className="overflow-hidden p-[10px]  lg:ml-[100px] lg:mr-[100px]">
      <div className="fit  pl-[25px] w-[150px] h-[60px] text-centre text-wrap flex flex-col justify-center lg:pl-[300px] lg:w-[500px] lg:h-[100px]">
          <span className="font-archivo font-[600]  text-[17px] px-4 py-2 lg:px-8 lg:py-4 bg-[#FFEA89] rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1.00)]   outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2   lg:font-[700] lg:text-[36px] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)] ">
            {title.toUpperCase()} SPONSORS
          </span>
      </div>
      <div className="px-[20px] mb-[70px] py-[20px] gap-2 lg:gap-4 font-bold  --font-archivo bg-white lg:px-[30px] lg:py-[31px] rounded-[60px] border-[2px] border-gray-400 flex flex-row space justify-between  shadow-md mt-[64px] lg:mb-[120px]">
       
                {sponsors.map((src, idx) => (
                  <div className="w-[70px] h-[70px] fit rounded-[50%]  bg-white border border-black lg:w-[100px] lg:h-[100px] lg:p-1">
                      <Image
                        width={109.94}
                        height={109.94}
                        key={idx}
                        src={src}
                        alt="Sponsor logo"
                        className="  p-0.5 border-[1px]  lg:border-2 border-dashed border-gray-400 rounded-full lg:p-2 hover:scale-105 transition"
                      />
                  </div>
                ))}
         
      </div>
    </div>
  );

  return (
    <div className="bg-[#EFE7F7] h-full w-full p-8 relative overflow-hidden">
      {/* Floating Labels */}
        <div className="lg:absolute lg:w-[280.036px] lg:h-[80.2px] lg:top-2 lg:left-0  z-1 absolute top-1 left-0 w-[100px] h-[49px]">
          <Image
            width={280.036}
            height={80.2}
            src="https://res.cloudinary.com/ddycqjdeu/image/upload/v1749813208/Frame_3_qltdh5.svg"
            alt="Dev Mode on"   
            className="w-auto h-auto object-cover"
          />
        </div>
      <div className="relative w-[70px] h-[60px]  top-[-1px] left-[130px] mb-[60px] lg:left-[400px] flex justify-center  mt-1 lg:mb-[84px] lg:mt-3  lg:w-[493px] lg:h-32">
        <div className="w-20 h-20 px-2 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00),-2px_-2px_0px_0px_rgba(0,0,0,1.00)]     fit lg:w-[493px] lg:h-32 lg:px-3 lg:py-3.5 relative bg-white lg:rounded-3xl lg:shadow-[3px_4px_0px_0px_rgba(0,0,0,1.00),-3px_-4px_0px_0px_rgba(0,0,0,1.00)]  inline-flex flex-col justify-center items-center gap-2.5">
            <h2 className="font-clash-display font-[600] border-dotted text-2xl px-1 py-1 border-2  lg:text-3xl lg:font-bold lg:border-4 border-black lg:border-dotted inline-block lg:px-6 lg:py-2 rounded-xl bg-white">
                SPONSORS
            </h2>
        </div>
       
      </div>
      <RotatingDollarIcon />
      <RotatingDollarBagIcon />
      {/* Sponsor Groups */}
     
      <SponsorGroup title="Platinum" sponsors={sponsors.slice(0, 5)} />
      <SponsorGroup title="Gold" sponsors={sponsors.slice(0, 5)} />
      <SponsorGroup title="Silver" sponsors={sponsors.slice(0, 5)} />
    </div>
  );
};

export default Page ;

