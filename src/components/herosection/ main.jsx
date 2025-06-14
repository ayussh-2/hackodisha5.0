import { NavbarDemo } from "../navbar/Navbar";
import Handsvg from "./handsvg";
import Hackodisha from "./ hackodisha";
const Herosection = () => {
  return (
    <div className=" h-screen w-full rounded-b-[300px] bg-[#D3AEFF]">
      <div className=" h-[95vh] w-full rounded-b-[300px] bg-[#EFE7F7] ">
        <Handsvg />
        <NavbarDemo />
        <Hackodisha />
      </div>
    </div>
  );
};

export default Herosection;
