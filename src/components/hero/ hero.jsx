 import { Navbar } from "../navbar/navbar";
import Handsvg from "./hand-svg";
import Hackodisha from "./ hackodisha";
const Hero = () => {
  return (
    <div className=" h-screen w-full rounded-b-[300px] bg-[#D3AEFF]">
      <div className=" h-[95vh] w-full rounded-b-[300px] bg-[#EFE7F7] ">
        <Handsvg />
        <Navbar/>
        <Hackodisha />
      </div>
    </div>
  );
};

export default Hero;
