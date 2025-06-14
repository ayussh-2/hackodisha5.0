import Image from "next/image"

function Gold() {
  return (
    <div className="bg-[#D3AEFF] relative rounded-2xl p-5 md:row-span-2 flex flex-col items-center justify-center overflow-visible">
    
              {/* Tag Image with Text */}
              <div className="absolute -top-34 -left-12 w-55 rotate-[-9deg] z-10">
      <Image
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749798805/Asset_1_1_2_gkhzjv.svg"
        alt="Cash Prize Tag"
        width={112} // You can tweak this as needed (28 * 4 = 112px)
        height={100} // Estimate height; adjust based on SVG shape
        className="w-[300px] scale-[1.45] h-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center left-17 -top-1 justify-center rotate-[-16deg] px-2">
      <span className="text-black font-extrabold text-xl text-center leading-tight">
        CASH PRIZE
      </span>

      <span className="text-yellow-500 font-extrabold text-3xl text-center leading-tight">
        ₹25k
      </span>
    </div>
    
    </div>
    
    
              {/* Card Content */}
              <div className="bg-white w-full h-full rounded-2xl px-4 pt-12 pb-20 flex flex-col items-center justify-between relative overflow-visible">
    
                {/* Capsule with GOLD Text */}
                {/* Capsule Wrapper */}
    <div className="relative mb-10 flex items-center justify-center w-full">
      {/* Yellow Capsule Container */}
      <div className="relative bg-[#FFCC33] rounded-full shadow-md flex items-center justify-center px-10 py-5 min-w-[370px] min-h-[100px] overflow-visible">
        
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
        <span className="relative z-10 text-7xl text-black tracking-wider font-clashDisplay">
          GOLD
        </span>
      </div>
    </div>
    
                {/* Prize Description */}
                <p className="text-center text-purple-800 font-extrabold text-4xl leading-relaxed mb-10">
                  Goodies & T-shirts <br />
                  Vouchers worth
                </p>
    
                {/* Prize Amount */}
                <div className="transform rotate-[-5deg] bg-white px-8 py-2 shadow-md border border-black">
                  <span className="text-yellow-500 font-extrabold text-4xl">$50k</span>
                </div>
              </div>
            </div>
  )
}

export default Gold