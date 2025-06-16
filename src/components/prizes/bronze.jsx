import Image from "next/image";
import prizeImages from "@/config/prizes";
function Bronze() {
  return (
    <div className="bg-[#D3AEFF] border-1 border-black md:rounded-2xl rounded-[100px] p-3 sm:p-5 flex relative flex-col items-center justify-center overflow-visible">
      <div className="absolute xl:top-73 xl:-right-9 top-70 -right-10 w-55 rotate-[1deg] hidden md:block z-10">
        <Image
          src={prizeImages.bronzeTag}
          alt="Cash Prize Tag"
          width={112}
          height={100}
          className="w-[300px] scale-[1.3] xl:scale-[1.45] h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center -left-20 top-1 justify-center rotate-[-15deg] px-2">
          <span className="text-black font-extrabold font-clash-display text-xl text-center leading-tight">
            CASH PRIZE
          </span>

          <span
            //     style={{
            //   WebkitTextStroke: '1px black',
            //   color: '#FFEA89',
            // }}
            className="text-[#FFEA89] font-extrabold font-clash-display text-3xl text-center leading-tight"
          >
            ₹25k
          </span>
        </div>
      </div>
      <div className="bg-white w-full h-full rounded-[110px] md:rounded-2xl px-4 pt-3 sm:pt-10 pb-12 flex flex-col items-center justify-center relative overflow-visible">
        <div className="relative mb-6 flex items-center justify-center w-full">
          <div className="relative bg-[#FFD32B] rounded-full border border-black flex items-center justify-center sm:px-8 sm:py-3 xl:py-5 min-w-[150px] sm:min-w-[220px] xl:min-w-[240px] sm:min-h-[70px] min-h-[50px] overflow-visible">
            <div
              className="absolute inset-1.5 hidden md:flex items-center justify-center pointer-events-none"
              style={{ padding: "6px", boxSizing: "border-box" }}
            >
              <Image
                src={prizeImages.capsuleOutlineDesktop}
                alt="Bronze Outline"
                fill
                className="rounded-full object-contain"
                sizes="100vw"
              />
            </div>

            <div
              className="absolute inset-1.5 md:hidden flex items-center justify-center pointer-events-none"
              style={{ padding: "6px", boxSizing: "border-box" }}
            >
              <Image
                src={prizeImages.capsuleOutlineMobile}
                alt="Mobile Bronze Outline"
                fill
                className="rounded-full object-contain"
                sizes="100vw"
              />
            </div>

            <span className="relative z-10 font-clash-display font-extrabold text-2xl sm:text-3xl text-black tracking-wider">
              BRONZE
            </span>
          </div>
        </div>

        <div className="text-center text-purple-800 font-extrabold font-clash-display text-[20px] sm:text-2xl leading-relaxed">
          Goodies & T-shirts <br />
          <div className="inline-flex items-center justify-center gap-2 mt-2">
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

export default Bronze;
