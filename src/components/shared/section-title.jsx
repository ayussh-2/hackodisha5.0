import Image from "next/image";

export default function SectionTitle({
  title,
  stickerImage,
  stickerPosition = "right", // "left" or "right"
  lineGradient = "purple-white", // "purple-white", "white-purple", or "purple"
}) {
  if (!title) {
    console.warn("SectionTitle: Missing required prop 'title'");
    return null;
  }

  const getTopBackgroundClass = () => {
    switch (lineGradient) {
      case "purple-white":
        return "bg-[#bc82fe]";
      case "white-purple":
        return "bg-[#efe7f7]";
      case "purple":
        return "bg-[#bc82fe]";
      case "white":
        return "bg-[#efe7f7]";
      default:
        return "bg-[#bc82fe]";
    }
  };

  const getBottomBackgroundClass = () => {
    switch (lineGradient) {
      case "purple-white":
        return "bg-[#efe7f7]";
      case "white-purple":
        return "bg-[#bc82fe]";
      case "purple":
        return "bg-[#bc82fe]";
      case "white":
        return "bg-[#efe7f7]";
      default:
        return "bg-[#efe7f7]";
    }
  };

  const getStickerPositionClass = () => {
    return stickerPosition === "left"
      ? "absolute top-0 left-0 z-20"
      : "absolute top-0 right-0 z-20";
  };

  return (
    <div className="relative text-center w-full overflow-visible">
      <div className="absolute inset-0 z-0">
        {/* Top half background */}
        <div
          className={`absolute top-0 left-0 right-0 h-1/2 ${getTopBackgroundClass()}`}
        ></div>
        {/* Bottom half background */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1/2 ${getBottomBackgroundClass()}`}
        ></div>
        {/* Black separating line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black -translate-y-1/2"></div>
      </div>

      <div className="relative z-10">
        {stickerImage && (
          <div className="relative w-full h-0 m-0 p-0 hidden ssm:block">
            <div
              className={`${getStickerPositionClass()} w-20 sm:w-28 md:w-32 lg:w-36 h-auto`}
            >
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
          <div className="bg-white rounded-xl px-4 py-3 border-2 border-black">
            <div
              className="bg-white rounded-lg px-8 py-3 border-black"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23000000' stroke-width='4' stroke-dasharray='8%2c 18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
              }}
            >
              <h1 className="text-xl md:text-5xl font-semibold font-clash-display text-black tracking-wider">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
