import React from 'react'
import SectionTitle from "../shared/section-title";
import ProfileCard from './ProfileCard';

const Judges = () => {
  return (
    <>
      <SectionTitle
        title={"MENTORS & JUDGES"} 
        lineGradient="purple"
      />

      <div className="bg-[#BC82FE] w-full flex justify-center items-center py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
            <ProfileCard
              name="Jane Cooper"
              title="Design Head"
              imageUrl="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/icon_t4isnb.svg"
            />
            <ProfileCard
              name="Jane Cooper"
              title="Design Head"
              imageUrl="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/icon_t4isnb.svg"
            />
            <ProfileCard
              name="Jane Cooper"
              title="Design Head"
              imageUrl="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/icon_t4isnb.svg"
            />
            <ProfileCard
              name="Jane Cooper"
              title="Design Head"
              imageUrl="https://res.cloudinary.com/dtztahzfk/image/upload/v1749849/icon_t4isnb.svg"
            />
            <ProfileCard
              name="Jane Cooper"
              title="Design Head"
              imageUrl="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/icon_t4isnb.svg"
            />
            <ProfileCard
              name="Jane Coope"
              title="Design Head"
              imageUrl="https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/icon_t4isnb.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Judges;