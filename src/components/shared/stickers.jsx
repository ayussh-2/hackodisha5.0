
export default function Stickers() {
  const teamMembers = [
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    },
    {
      name: "Jane Cooper",
      role: "Design Head",
      image: "https://res.cloudinary.com/djqgs2pet/image/upload/v1749742278/sticker1_x8ooes.png"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#BC82FE' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-32 h-40 bg-white rounded-2xl border-2 border-dashed border-gray-300 shadow-lg overflow-hidden mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold font-clash-display text-shadow text-lg text-white mb-1">{member.name}</h3>
                <p className="text-black font-archivo  text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
