import Image from "next/image";
import { prizeImages, prizeAmounts } from "@/config/prizes";

function Silver() {
    return (
        <div className="bg-[#D3AEFF] border-1 border-black rounded-2xl  p-3 sm:p-5 flex flex-col items-center relative justify-center overflow-visible">
            <div className="absolute block -right-17 -top-27 sm:-right-14 sm:-top-29 md:-right-12 md:-top-31 xl:-top-32 xl:-right-10 w-55 rotate-[1deg] z-10">
                <Image
                    src={prizeImages.silverTag}
                    alt="Cash Prize Tag"
                    width={112}
                    height={100}
                    className="w-[300px] scale-[0.8] sm:scale-[1] md:scale-[1.3] xl:scale-[1.45] h-auto"
                />
                <div className="absolute inset-0 flex flex-col items-center -left-11 -top-0 sm:-left-14 sm:-top-0 md:-left-20 md:-top-1 justify-center rotate-[16deg] md:rotate-[15deg] px-2">
                    <span className="text-black font-extrabold font-clash-display text-[13px] sm:text-[16px] md:text-xl text-center leading-tight">
                        CASH PRIZE
                    </span>

                    <span className="text-[#FFD32B] font-extrabold font-clash-display text-xl sm:text-2xl md:text-3xl text-center  leading-tight [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
                        ₹ {prizeAmounts.silver.amount}
                    </span>
                </div>
            </div>
            <div className="bg-white w-full h-full rounded-2xl px-4 pt-3 sm:pt-10 pb-12 flex flex-col items-center justify-center relative overflow-visible">
                <div className="relative mb-6 flex items-center justify-center w-full">
                    <div className="relative bg-[#FFD32B] rounded-full border border-black flex items-center justify-center sm:px-8 sm:py-1 xl:py-5 min-w-[140px] sm:min-w-[216px] xl:min-w-[240px] sm:min-h-[70px] min-h-[50px] overflow-visible">
                        <div
                            className="absolute inset-1.5 hidden md:flex items-center justify-center pointer-events-none"
                            style={{ padding: "6px", boxSizing: "border-box" }}
                        >
                            <Image
                                src={prizeImages.capsuleOutlineDesktop}
                                alt="Silver Outline"
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
                                src={prizeImages.capsuleOutlineDesktop}
                                alt="Mobile Silver Outline"
                                fill
                                className="rounded-full object-contain"
                                sizes="100vw"
                            />
                        </div>

                        <span className="relative z-10 font-clash-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black tracking-wider">
                            SILVER
                        </span>
                    </div>
                </div>

                <div className="text-center text-[#8D31EC] font-extrabold font-clash-display text-[20px] sm:text-2xl md:text-4xl leading-relaxed">
                    Goodies & T-shirts <br />
                    <div className="inline-flex items-center justify-center gap-2 ">
                        <span>Vouchers worth</span>
                        <div className="transform rotate-[5deg] bg-white px-3 py-2 shadow-md border border-black flex items-center justify-center ">
                            <span className="text-[#FFD32B] font-extrabold font-clash-display text-xl md:text-2xl lg:text-3xl [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] tracking-wider">
                                ₹{prizeAmounts.silver.goodies}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Silver;
