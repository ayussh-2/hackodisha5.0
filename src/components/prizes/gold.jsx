import Image from "next/image";

function Gold() {
  return (
    <div className="bg-[#D3AEFF] border-1 border-black relative md:rounded-2xl rounded-[100px]  p-3 sm:p-5 md:row-span-2 flex flex-col items-center justify-center overflow-visible">
      <div className="absolute hidden md:block xl:-top-31 -left-11 -top-31 xl:-left-10 w-55 xl:rotate-[0deg] z-10">
        <Image
          src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749798805/Asset_1_1_2_gkhzjv.svg"
          alt="Cash Prize Tag"
          width={112}
          height={100}
          className="w-[300px] scale-[1.3] xl:scale-[1.45] h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center left-17 -top-1 justify-center rotate-[-16deg] px-2">
          <span className="text-black font-extrabold font-clash-display text-xl text-center leading-tight">
            CASH PRIZE
          </span>

          <span
            // style={{
            //   WebkitTextStroke: "0.8px black",
            //   color: "#FFEA89",
            // }}
            className="text-[#FFEA89] font-extrabold font-clash-display text-3xl text-center  leading-tight"
          >
            ₹25k
          </span>
        </div>
      </div>

      <div className="bg-white w-full h-full rounded-[110px] md:rounded-2xl px-4 pt-3 sm:pt-10 md:pt-12 pb-12 md:pb-20 flex flex-col items-center justify-between relative overflow-visible">
        <div className="relative mb-10 flex items-center justify-center w-full">
          <div className="relative bg-[#FFD32B] rounded-full flex items-center justify-center sm:px-10 md:py-4 xl:py-5 min-w-[150px] sm:min-w-[220px] md:min-w-[300px] xl:min-w-[370px] sm:min-h-[70px] min-h-[50px] border border-black overflow-visible">
            <div
              className="absolute inset-1.5 items-center justify-center pointer-events-none  hidden md:flex"
              style={{ padding: "10px", boxSizing: "border-box" }}
            >
              <Image
                src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749717470/Rectangle_3475310_kabmlc.svg"
                alt="Capsule Outline"
                fill
                className="rounded-full object-contain"
                sizes="(min-width: 768px) 100vw"
              />
            </div>

            <div
              className="absolute inset-1.5 flex items-center justify-center pointer-events-none md:hidden"
              style={{ padding: "6px", boxSizing: "border-box" }}
            >
              <Image
                src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749931291/Rectangle_3475310_1_e676el.svg"
                alt="Mobile Capsule Outline"
                fill
                className="rounded-full object-contain"
                sizes="(max-width: 767px) 100vw"
              />
            </div>

  
            <span className="relative z-10 text-2xl sm:text-3xl md:text-6xl xl:text-7xl text-black tracking-wider font-clash-display font-extrabold">
              GOLD
            </span>
          </div>
        </div>

        <p className="text-center hidden md:block text-purple-800 font-clash-display font-extrabold text-3xl xl:text-4xl leading-relaxed mb-10">
          Goodies & T-shirts <br />
          Vouchers worth
        </p>

        <div className="transform hidden md:block rotate-[-5deg] bg-white px-8 py-2 shadow-md border border-black">
          <span className="text-yellow-500 font-clash-display font-extrabold text-4xl">
            $50k
          </span>
        </div>
        <div className="text-center md:hidden text-purple-800 font-clash-display font-bold text-[20px] sm:text-2xl leading-relaxed">
          Goodies & T-shirts <br />
          <div className="inline-flex items-center justify-center font-clash-display gap-2 mt-2">
            <span>Vouchers worth</span>
            <div className="transform rotate-[5deg] bg-white px-2 py-1 shadow-md border border-black">
              <span className="text-yellow-500 font-extrabold font-clash-display text-xl">
                $50k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gold;
