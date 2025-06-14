import { teamMembers } from '../../config/teams/index'; 
import Image from 'next/image';


export default function Stickers() {
  
  return (
  <div className="relative bg-[#BC82FE] min-h-screen overflow-hidden">
    <div className="py-10 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-4 mx-auto w-full aspect-square max-w-xs overflow-hidden">
              <Image
                src={member.defaultImage}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1280px) 33vw,
                       25vw"
                className="absolute inset-0 object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                priority={index === 0} 
              />
              <Image
                src={member.hoverImage}
                alt={`${member.name} hover`}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1280px) 33vw,
                       25vw"
                className="absolute inset-0 object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                priority={false}
              />
            </div>
            <h3 className="text-white font-bold font-clash-display text-3xl sm:text-3xl md:text-3xl xl:4xl mb-1 drop-shadow">
              {member.name}
            </h3>
            <p className="text-black font-archivo text-xl sm:text-base md:text-2xl xl:3xl">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
