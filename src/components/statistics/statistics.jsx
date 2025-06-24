"use client";
import SectionTitle from "@/components/shared/section-title";
import { defaultStatsConfig } from "@/config/statistics";

export default function Statistics() {
  const stats = defaultStatsConfig;
 

  return (
    <>
      <SectionTitle title={"STATISTICS"} lineGradient="purple" />
      <div className="flex items-center justify-center w-full overflow-hidden min-h-[640px] px-4 sm:px-8 lg:px-16 xl:px-24 mx-auto bg-[#BC82FE] ">
        <div className="w-full max-w-7xl">
          <div className="  w-full max-w-7xl mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => {
              return (
                <div
                  key={stat.id || index}
                  className={`w-[128px] h-[128px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] flex-shrink-0 rounded-[24px] border-2 border-black ${stat.bg} ${stat.hoverBg} transition-colors duration-300 ease-in-out relative mb-8 sm:mb-0 group overflow-hidden bg-white flex flex-col`}
                  
                >
                  <div className="flex w-full h-full justify-center items-center">
                    <div className="flex flex-col">
                        <div className="flex w-full justify-center items-center">
                      <div className="w-fit py-3 px-6 justify-center items-center rounded-[48px] border-2 border-black bg-white hover:bg-[#F3F3F3] hover:shadow-md select-none z-10">
                        <p className="text-black font-bricolage-grotesque text-2xl font-normal leading-normal tracking-[-0.48px] select-none">
                          {stat.label}
                        </p>
                      </div>
                        </div>

                      <div className="">
                        <p className="text-black font-bricolage-grotesque text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[120px] font-extrabold leading-none select-none">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
