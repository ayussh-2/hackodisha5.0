import Image from "next/image";
import Gold from "./gold";
import Silver from "./silver";
import Bronze from "./bronze";
import SectionTitle from "../shared/section-title";

function Prize() {
  return (
    <div className="min-h-dvh bg-[#BC82FE] flex flex-col items-center justify-center pt-16 pb-40 overflow-x-hidden overflow-y-hidden">
      <div className="relative w-full overflow-visible">
        <SectionTitle title="PRIZES" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-[500px] px-10 sm:px-25 md:px-4 pt-15 md:pt-40 sm:max-w-[900px] xl:max-w-5xl w-full mx-5">
        <Gold />
        <Silver />
        <Bronze />
      </div>
    </div>
  );
}

export default Prize;
