import Image from "next/image";
import { prizeImages, prizeAmounts } from "@/config/prizes";

function Gold() {
    return (
        <div className="bg-[#D3AEFF] border-1 border-black relative rounded-2xl  p-3 sm:p-5 md:row-span-2 flex flex-col items-center justify-center overflow-visible">
            <div className="absolute block xl:-top-31 md:-left-11 md:-top-31 xl:-left-10 sm:-top-28 sm:-left-15 -top-27 -left-16 w-55 xl:rotate-[0deg] z-10">
                <Image
                    src={prizeImages.goldTag}
                    alt="Cash Prize Tag"
                    width={112}
                    height={100}
                    className="w-[300px] scale-[0.8] sm:scale-[1] md:scale-[1.3] xl:scale-[1.45] h-auto"
                />
                <div className="absolute inset-0 flex flex-col items-center left-12 -top-0 sm:left-15 md:left-17 sm-top-1 justify-center rotate-[-16deg] px-2">
                    <span className="text-black font-extrabold font-clash-display text-[8px] sm:text-[10px] md:text-base text-center leading-tight">
                        TOTAL PRIZE <br /> WORTH
                    </span>

                    <span className="text-[#FFD32B] font-extrabold font-clash-display text-xl sm:text-2xl md:text-3xl text-center  leading-tight [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
                        ₹ {prizeAmounts.gold.amount}
                    </span>
                </div>
            </div>

            <div className="bg-[#FAF5FF] w-full h-full rounded-2xl px-4 pt-3 sm:pt-10 md:pt-12 pb-12 md:pb-20 flex flex-col items-center justify-between relative overflow-visible">
                <div className="relative mb-6 md:mb-10  flex items-center justify-center w-full">
                    <div className="relative bg-[#FFD32B] rounded-full flex items-center justify-center sm:px-10 md:py-4 xl:py-5 min-w-[140px] sm:min-w-[216px] md:min-w-[300px] xl:min-w-[370px] sm:min-h-[70px] min-h-[50px] border border-black overflow-visible">
                        <div
                            className="absolute inset-1.5 items-center justify-center pointer-events-none  hidden md:flex"
                            style={{ padding: "10px", boxSizing: "border-box" }}
                        >
                            <Image
                                src={prizeImages.capsuleOutlineDesktop}
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
                                src={prizeImages.capsuleOutlineDesktop}
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

                <p className="text-center hidden md:block text-[#8D31EC] font-clash-display font-extrabold text-4xl xl:text-5xl leading-[130%] mb-10">
                    Goodies , T-shirts, Cash ,<br />3 PPIs and 5 Domains
                </p>

                <div className="transform hidden md:block rotate-[-5deg] bg-white px-8 py-2 shadow-md border border-black">
                    <span className="text-[#FFD32B] font-clash-display font-extrabold text-4xl lg:text-7xl [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
                        ₹{prizeAmounts.gold.goodies}{" "}
                    </span>
                </div>
                <div className="text-center md:hidden text-[#8D31EC] font-clash-display font-bold text-[20px] sm:text-2xl leading-relaxed">
                    Goodies , T-shirts , 3 PPI Offers, Cash
                    <br />
                    <div className="inline-flex items-center justify-center font-clash-display gap-2 mt-2">
                        <span>& 5 Domains</span>
                        <div className="transform rotate-[5deg] bg-white px-2 py-1 shadow-md border border-black">
                            <span className="text-[#FFD32B] font-extrabold font-clash-display text-xl sm:text-2xl md:text-3xl text-center  leading-tight [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
                                ₹{prizeAmounts.gold.goodies}{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gold;
