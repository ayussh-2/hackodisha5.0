import Image from "next/image";

const Handsvg = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <Image
          src={
            "https://res.cloudinary.com/du5qoczcn/image/upload/v1749655315/Vector_2765_te5re7.svg"
          }
          width={0}
          height={0}
          alt="hand"
          className="  absolute    w-[105px] sm:w-[130px] lg:w-[145px]  top-0   "
        />
        <div className="  py-2 px-4 absolute top-[445px]  sm:top-[550px] lg:top-[610px] border border-black w-[260px] sm:w-[300px] md:w-full  md:max-w-sm  h-[100px]  sm:h-[110px] md:h-[130px] bg-[#FEDE64]  rounded-3xl ">
          <Image
            src={
              "https://res.cloudinary.com/du5qoczcn/image/upload/v1749863257/Ellipse_5_lhozdf.svg"
            }
            width={0}
            height={0}
            alt="ellipse"
            className=" w-12 sm:w-16 md:w-20  absolute left-35 -top-2   sm:left-40 md:left-50 "
          />
          <div className="text-black border border-black  text-center text-[17px] sm:text-[22px] md:text-3xl not-italic font-semibold leading-none uppercase bg-white px-4 py-4 relative top-4 sm:top-6 md:top-8   rotate-4 rounded-2xl shadow-[8px_7px_6.6px_0px_#F1C20E]">
            APPLY ON DEVFOLIO
          </div>
          <Image
            src={
              "https://res.cloudinary.com/du5qoczcn/image/upload/v1749905296/Frame-3_jpkjas.svg"
            }
            width={0}
            height={0}
            alt="arrow"
            className="w-30 h-12  md:w-36 md:h-20  absolute top-23 sm:top-25 -right-12 md:left-80 lg:left-93 sm:left-60 md:top-28 lg:top-16 "
          />

           
        </div>
       
      </div>
    </div>
  );
};

export default Handsvg;
