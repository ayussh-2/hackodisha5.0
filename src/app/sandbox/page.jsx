
"use client";
import Image from 'next/image';

import RotatingDollarIcon from '../../components/sponsorship/rotate-dollar-icon';
import RotatingDollarBagIcon from '../../components/sponsorship/rotate-bag-icon';


import SectionTitleSponsor from '@/components/sponsorship/section-title-sponsor';


const Page= () => {
  //to change sponsors update here
  const sponsors = Array(5).fill('https://res.cloudinary.com/ddycqjdeu/image/upload/v1749813307/solana_njcbvj.svg');
 
 


  const SponsorGroup = ({ title, sponsors }) => (
    <div className="overflow-hidden flex flex-col justify-centre p-[10px]  lg:ml-[100px] lg:mr-[100px]">
      <div className=" w-full   flex  justify-center  ">
          <span className="font-archivo font-[600]   text-[17px] px-4 py-2 lg:px-8 lg:py-4 bg-[#FFEA89] rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1.00)]   outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2   lg:font-[700] lg:text-[36px] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)]  ">
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
   <div className='bg-[#EFE7F7] h-full w-full'>
    <SectionTitleSponsor title="SPONSOR" />
     <div className="lg:absolute lg:w-[280.036px] lg:h-[80.2px] lg:top-2 lg:left-0  z-1 absolute top-2 left-0 w-[90px] h-[70px]">
          <Image
            width={280.036}
            height={80.2}
            src="https://res.cloudinary.com/ddycqjdeu/image/upload/v1749813208/Frame_3_qltdh5.svg"
            alt="Dev Mode on"   
            className="w-auto h-auto object-cover"
          />
        </div>
    <div className="bg-[#EFE7F7]  px-8 relative overflow-hidden">
      
     
    
      <RotatingDollarIcon />
      <RotatingDollarBagIcon />
      {/* Sponsor Groups */}
     
      <SponsorGroup title="Platinum" sponsors={sponsors.slice(0, 5)} />
      <SponsorGroup title="Gold" sponsors={sponsors.slice(0, 5)} />
      <SponsorGroup title="Silver" sponsors={sponsors.slice(0, 5)} />
    </div>
  </div>
  );
};

export default Page ;

