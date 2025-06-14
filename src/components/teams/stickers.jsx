import { teamMembers } from '../../config/teams/index'; 


export default function Stickers() {
  
  return (
    <div className="relative bg-[#BC82FE] min-h-screen overflow-hidden">
      

      <div className="py-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">

          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto w-full aspect-square max-w-xs overflow-hidden">
                <img
                  src={member.defaultImage}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={member.hoverImage}
                  alt={`${member.name} hover`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                />
              </div>
              <h3 className="text-white font-bold font-clash-display text-lg sm:text-xl md:text-2xl mb-1 drop-shadow">
                {member.name}
              </h3>
              <p className="text-black font-archivo text-sm sm:text-base md:text-lg">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}
