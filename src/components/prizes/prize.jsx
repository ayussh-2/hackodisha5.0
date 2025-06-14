import Image from "next/image"
import Gold from "./gold"
import Silver from "./silver"
import Bronze from "./bronze"

function Prize() {
  return (
    <div className="min-h-screen bg-[#BC82FE] flex flex-col items-center justify-center px-4 py-50 overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:max-w-[850px] xl:max-w-5xl w-full mx-5">
        <Gold />
        <Silver />
        <Bronze />
       

      </div>
    </div>
  )
}

export default Prize