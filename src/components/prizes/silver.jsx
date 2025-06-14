import Image from "next/image"

function Silver() {
  return (
    <div className="bg-[#D3AEFF] rounded-2xl p-5 flex flex-col items-center relative justify-center overflow-visible">
    
                <div className="absolute -top-32 -right-10 w-55 rotate-[1deg] z-10">
      <Image
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1749799542/Asset_1_2_1_wnraxb.svg"
        alt="Cash Prize Tag"
        width={112} // You can tweak this as needed (28 * 4 = 112px)
        height={100} // Estimate height; adjust based on SVG shape
        className="w-[300px] scale-[1.45] h-auto"
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
                <div className="text-center text-purple-800 font-bold text-2xl leading-relaxed">
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
  )
}

export default Silver