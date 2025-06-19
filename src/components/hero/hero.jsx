import { Navbar } from "../navbar/Navbar";
import Svg from "./ all-svg";
import Hackodisha from "./hackodisha";
const Hero = () => {
    return (
        <div
            className="bg-[#BC82FE] h-[940px] sm:h-[1100px] lg:h-[850px]"
            id="home"
        >
            <div className="h-[750px] sm:h-[860px] lg:h-[800px] w-full  rounded-b-[100px]  sm:rounded-b-[200px]  lg:rounded-b-[300px] bg-[#D3AEFF]">
                <div className="h-[710px] sm:h-[820px] lg:h-[770px] w-full  rounded-b-[100px]  sm:rounded-b-[200px]   lg:rounded-b-[300px] bg-[#EFE7F7] ">
                    <Svg />
                    <Navbar />
                    <Hackodisha />
                </div>
            </div>
        </div>
    );
};

export default Hero;
