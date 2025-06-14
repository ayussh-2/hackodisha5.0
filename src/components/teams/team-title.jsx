
export default function TeamTitle() {
    return (
    <div className="text-center w-full h-full mb-16" style={{ backgroundColor: '#BC82FE' }}>

        <div className="relative w-full h-4 bg-[#BC82FE]">
        <img
        src="https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/circle-sticker-teams_ccxfdi.png"
        alt="Sticker"
        className="absolute h-auto m-0 p-0 top-0 right-0 z-10 w-20 sm:w-28 md:w-32 lg:w-36"
        />
        </div>

        <div className="relative  flex justify-center items-center">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black -translate-y-1/2 z-0"></div>

          <div className="bg-white rounded-lg px-4 py-3 border-2 border-black z-10">
          <div className="bg-white rounded-lg px-8 py-3 border-2 border-dashed border-black">
            <h1 className="text-xl md:text-5xl font-semibold font-clash-display text-black tracking-wider">
            OUR TEAMS
            </h1>
          </div>
          </div>
        </div>
    </div>
  );
}