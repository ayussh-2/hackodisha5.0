import { HERO_LAPTOP_IMAGE } from "@/config/hero";
import Image from "next/image";

const Hackodisha = () => {
    return (
        <div>
            <div className=" relative z-[10] mx-auto w-full max-w-10/12 xl:max-w-[1150px]  h-36 sm:h-56 md:h-60  lg:h-68 text-center p-3 sm:p-4  top-28 rounded-3xl border border-black bg-[#D3AEFF] shadow-[8px_8px_0px_0px_#000] text-4xl">
                <div className="rounded-2xl flex flex-col items-center justify-center gap-4 sm:gap-5  h-full outline outline-black outline-dashed ">
                    <h1 className="text-black font-bricolage-grotesque font-extrabold text-4xl sm:text-6xl md:text-[80px] lg:text-[110px] xl:text-[140px] leading-none ">
                        HACK ODISHA
                    </h1>
                    <p className="text-black font-archivo text-center  text-base sm:text-2xl lg:text-3xl  xl:text-[36px] font-medium leading-none tracking-[1.26px]">
                        06-07th ,September 2025
                    </p>
                </div>
                <Image
                    src={HERO_LAPTOP_IMAGE}
                    width={0}
                    height={0}
                    alt="svg"
                    className=" w-28 sm:w-[160px] md:w-[240px]  absolute top-[42%] sm:top-2/4  md:top-32  -left-7 sm:-left-[72px]"
                />
                <div className=" absolute top-28 sm:top-44 md:top-48 lg:top-52 -right-6 rounded-2xl h-max px-2 border-2 border-black bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <h1 className="text-black font-extrabold text-5xl sm:text-6xl md:text-6xl lg:text-[120px] leading-none font-bricolage-grotesque">
                        5.0
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hackodisha;
