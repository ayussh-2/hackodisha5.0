import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Discord = () => {
  return (
    <Link href={"/discord"} className="relative z-20  px-2 ">
        
      <div className="flex py-2 px-4 rounded-[7px] border border-black bg-[#D3AEFF] shadow-[-2px_2px_0_rgba(0,0,0,0.85)] items-center gap-[10px]">
        <Image
        src={"https://res.cloudinary.com/du5qoczcn/image/upload/v1749667520/5883eb5eae1f47fad1608d0488577c57036af72d_kwi4yd.png"}
        height={10}
        width={20}
        alt="discord"
        />
        
        <h1 className="text-[#000] text-base not-italic font-semibold leading-normal">
          Join discord
        </h1>
      </div>
    </Link>
  )
}

export default Discord