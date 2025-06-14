import Image from 'next/image';
import { clashDisplay } from "@/fonts/index.js";


export default function Prize() {
  return (
    <div className="min-h-screen bg-[#BC82FE] flex flex-col items-center justify-center px-4 py-50">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">

        {/* GOLD CARD */}
        <div className="bg-[#D3AEFF] relative rounded-2xl p-4 md:row-span-2 flex flex-col items-center justify-center overflow-visible">

          {/* Tag Image with Text */}
          <div className="absolute -top-30 -left-17 w-55 rotate-[-13deg] z-10">
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749798805/Asset_1_1_2_gkhzjv.svg"
    alt="Cash Prize Tag"
    width={112} // You can tweak this as needed (28 * 4 = 112px)
    height={100} // Estimate height; adjust based on SVG shape
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex flex-col items-center left-10 -top-5 justify-center rotate-[-15deg] px-2">
  <span className="text-black font-extrabold text-xs text-center leading-tight">
    CASH PRIZE
  </span>
  <span className="text-yellow-500 font-extrabold text-sm text-center leading-tight">
    ₹25k
  </span>
</div>

</div>


          {/* Card Content */}
          <div className="bg-white w-full h-full rounded-2xl px-4 pt-10 pb-12 flex flex-col items-center justify-between relative overflow-visible">

            {/* Capsule with GOLD Text */}
            {/* Capsule Wrapper */}
<div className="relative mb-10 flex items-center justify-center w-full">
  {/* Yellow Capsule Container */}
  <div className="relative bg-[#FFCC33] rounded-full shadow-md flex items-center justify-center px-10 py-6 min-w-[330px] min-h-[100px] overflow-visible">
    
    {/* Dashed Outline Image with 4px inset and full visibility */}
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ padding: '6px', boxSizing: 'border-box' }}
    >
      <img
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749717470/Rectangle_3475310_kabmlc.svg"
        alt="Capsule Outline"
        className="w-full h-full object-contain rounded-full"
        style={{ boxSizing: 'border-box' }}
      />
    </div>

    {/* GOLD Text */}
    <span className="relative z-10 text-4xl text-black tracking-wider font-[var(--font-clash-display)]">
      GOLD
    </span>
  </div>
</div>





            {/* Prize Description */}
            <p className="text-center text-purple-800 font-extrabold text-xl leading-relaxed mb-10">
              Goodies & T-shirts <br />
              Vouchers worth
            </p>

            {/* Prize Amount */}
            <div className="transform rotate-[-5deg] bg-white px-8 py-2 shadow-md border border-black">
              <span className="text-yellow-500 font-extrabold text-4xl">$50k</span>
            </div>
          </div>
        </div>

        {/* SILVER CARD */}
        <div className="bg-[#D3AEFF] rounded-2xl p-4 flex flex-col items-center relative justify-center overflow-visible">

            <div className="absolute -top-29 -right-14 w-55 rotate-[1deg] z-10">
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749799542/Asset_1_2_1_wnraxb.svg"
    alt="Cash Prize Tag"
    width={112} // You can tweak this as needed (28 * 4 = 112px)
    height={100} // Estimate height; adjust based on SVG shape
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex items-center -left-10 -top-8 justify-center rotate-[15deg] px-2">
    <span className="text-black font-extrabold text-xs text-center leading-tight">
      CASH PRIZE
    </span>
  </div>
</div>
          <div className="bg-white w-full h-full rounded-2xl px-4 pt-10 pb-12 flex flex-col items-center justify-center relative overflow-visible">

            {/* Capsule with SILVER Text */}
            {/* SILVER Capsule */}
<div className="relative mb-6 flex items-center justify-center w-full">
  <div className="relative bg-[#C0C0C0] rounded-full shadow-md flex items-center justify-center px-8 py-5 min-w-[240px] min-h-[70px] overflow-visible">
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ padding: '6px', boxSizing: 'border-box' }}
    >
      <img
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749717470/Rectangle_3475310_kabmlc.svg"
        alt="Silver Outline"
        className="w-full h-full object-contain rounded-full"
        style={{ boxSizing: 'border-box' }}
      />
    </div>
    <span className="relative z-10 font-extrabold text-3xl text-black tracking-wider">
      SILVER
    </span>
  </div>
</div>

            {/* Prize Description */}
            <div className="text-center text-purple-800 font-bold text-lg leading-relaxed">
              Goodies & T-shirts <br />
              <div className="inline-flex items-center justify-center gap-2 mt-2">
                <span>Vouchers worth</span>
                <div className="transform rotate-[5deg] bg-white px-2 py-1 shadow-md border border-black">
                  <span className="text-yellow-500 font-extrabold text-xl">$50k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRONZE CARD */}
        <div className="bg-[#D3AEFF] rounded-2xl p-4 flex flex-col items-center justify-center overflow-visible">
          <div className="bg-white w-full h-full rounded-2xl px-4 pt-10 pb-12 flex flex-col items-center justify-center relative overflow-visible">

            {/* Capsule with BRONZE Text */}
            <div className="relative mb-6 flex items-center justify-center w-full">
  <div className="relative bg-[#CD7F32] rounded-full shadow-md flex items-center justify-center px-8 py-5 min-w-[240px] min-h-[70px] overflow-visible">
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ padding: '6px', boxSizing: 'border-box' }}
    >
      <img
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749717470/Rectangle_3475310_kabmlc.svg"
        alt="Bronze Outline"
        className="w-full h-full object-contain rounded-full"
        style={{ boxSizing: 'border-box' }}
      />
    </div>
    <span className="relative z-10 font-extrabold text-3xl text-black tracking-wider">
      BRONZE
    </span>
  </div>
</div>


            {/* Prize Description */}
            <div className="text-center text-purple-800 font-bold text-lg leading-relaxed">
              Goodies & T-shirts <br />
              <div className="inline-flex items-center justify-center gap-2 mt-2">
                <span>Vouchers worth</span>
                <div className="transform rotate-[5deg] bg-white px-2 py-1 shadow-md border border-black">
                  <span className="text-yellow-500 font-extrabold text-xl">$50k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
