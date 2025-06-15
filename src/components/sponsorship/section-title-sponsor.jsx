import Image from "next/image";
export default function SectionTitleSponsor({ title, stickerImage }) {
    if (!title) {
        console.warn(
            "SectionTitle: Missing required props 'title' or 'stickerImage'"
        );
        return null;
    }
    return (
        <div className="text-center w-full h-full mb-16">
            {stickerImage && (
                <div className="relative w-full h-0 m-0 p-0">
                    <div className="absolute top-0 right-0 z-10 w-20 sm:w-28 md:w-32 lg:w-36 h-auto">
                        <Image
                            src={stickerImage}
                            alt="Sticker"
                            layout="responsive"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                </div>
            )}
            <div className="relative pt-5 flex justify-center items-center">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black -translate-y-1/2 z-0"></div>

                <div className="px-2 py-1.5 bg-white rounded-xl lg:px-4 lg:py-3 border-2 border-black z-10  ">
                    <div className="px-3 py-1.5 bg-white rounded-lg lg:px-8 lg:py-3 border-2 border-dashed border-black">
                        <h1 className="text-xl md:text-5xl font-semibold font-clash-display !text-black tracking-wider">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
