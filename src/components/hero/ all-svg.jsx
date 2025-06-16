import {
  HERO_ARROW_IMAGE,
  HERO_HAND_IMAGE,
  HERO_SWITCH_IMAGE,
} from "@/config/hero";
import { DiscordButton } from "../ui/resizable-navbar";
import Image from "next/image";

const Svg = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <Image
          src={HERO_HAND_IMAGE}
          width={0}
          height={0}
          alt="hand"
          className="  absolute    w-[105px] sm:w-[130px] lg:w-[145px]  top-0   "
        />
        <div className="  py-2 px-4 absolute top-[445px]  sm:top-[550px] lg:top-[610px] border border-black w-[260px] sm:w-[300px] md:w-full  md:max-w-sm  h-[100px]  sm:h-[110px] md:h-[130px] bg-[#FEDE64]  rounded-3xl ">
          <Image
            src={HERO_SWITCH_IMAGE}
            width={0}
            height={0}
            alt="ellipse"
            className=" w-12 sm:w-16 md:w-20  absolute left-35 -top-2   sm:left-40 md:left-50 "
          />
          <div className="text-black border border-black  text-center text-[17px] sm:text-[22px] md:text-3xl not-italic font-semibold leading-none uppercase bg-white px-4 py-4 relative top-4 sm:top-6 md:top-8   rotate-4 rounded-2xl shadow-[8px_7px_6.6px_0px_#F1C20E]">
            APPLY ON DEVFOLIO
          </div>
          <Image
            src={HERO_ARROW_IMAGE}
            width={0}
            height={0}
            alt="arrow"
            className="w-28 h-12  lg:w-36 md:h-20  absolute top-23 sm:top-25 -right-11 md:left-80 lg:left-93 sm:left-60 md:top-24 lg:top-16 "
          />
        </div>
        <div className=" absolute top-[580px] sm:top-[685px]  md:top-[695px] lg:hidden">
          <DiscordButton /> {/* disord button */}
        </div>
        <Image
          src={
            "https://res.cloudinary.com/du5qoczcn/image/upload/v1749966150/Layer_1-2_ajybag.svg"
          }
          width={0}
          height={0}
          alt="image"
          className=" absolute  hidden lg:inline-block   lg:top-[520px]  lg:w-48  md:left-7/9 "
        />
        <Image
          src={
            "https://res.cloudinary.com/du5qoczcn/image/upload/v1750063878/Layer_1-3_ix8phk.svg"
          }
          width={0}
          height={0}
          alt="image"
          className=" absolute w-48  lg:hidden top-[660px] sm:top-[772px] "
        />
        <div className="bg-[#A353F9] w-full lg:w-[15%]  lg:rotate-10 h-max rounded-2xl flex justify-center items-center absolute top-[830px] sm:top-[945px] p-1 lg:top-[700px] lg:left-[12%]">
          <div className="relative w-full">
            {/* Border Image */}
            <Image
              src="https://res.cloudinary.com/du5qoczcn/image/upload/v1750070382/Vector_kw9gui.svg"
              width={0}
              height={0}
              alt="white-border"
              className="w-full h-auto"
            />

            {/* Text inside the border */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={
                  "https://res.cloudinary.com/du5qoczcn/image/upload/v1750072183/Vector-2_ttx5sd.svg"
                }
                height={0}
                width={0}
                alt="text"
                className="w-[70%] lg:w-[90%] lg:h-[60%] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Svg;
