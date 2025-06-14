
export default function Stickers() {
  const teamMembers = [
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      defaultImage: "https://res.cloudinary.com/dki4cwg9j/image/upload/v1749811879/our_team1_4x_2_uxcjoz.png",
      hoverImage: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png",    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#BC82FE' }}>
      <div className="container mx-auto md:py-16 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 inline-block">
                <div className="overflow-hidden mx-auto md:w-80 md:h-80 w-48 h-48">
                  <img src={member.defaultImage} alt={member.name}
                    className="absolute inset-0 w-full h-full object-center object-cover transition-opacity opacity-100 duration-500 ease-in-out group-hover:opacity-0"
                  />

                  <img src={member.hoverImage} alt={member.name + ' hover'}
                    className="absolute inset-0 w-full h-full object-center object-cover transition-opacity opacity-0 duration-500 ease-in-out group-hover:opacity-100"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold font-clash-display text-shadow text-lg md:text-2xl text-white mb-1">{member.name}</h3>
                <p className="text-black font-archivo text-sm md:text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
