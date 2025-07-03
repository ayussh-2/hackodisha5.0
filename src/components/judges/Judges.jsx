"use client"
import React, { useEffect, useRef, useState } from 'react'
import SectionTitle from "../shared/section-title";
import ProfileCard from './ProfileCard';

const Judges = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const judges = [
    {
      name: "Alejandro Acuna Rodriguez",
      title: 'Brooklyn, United States\nHead of StableCoins at CrossMint',
      imageUrl: "https://res.cloudinary.com/dpidvvdgr/image/upload/v1751531154/j1_qrdwt2.jpg",
      socialLinks: {
        x: "https://twitter.com/Utkarsh_Web3/",
        instagram: "https://www.instagram.com/alejandro_acuna/",
        linkedin: "https://www.linkedin.com/in/alexacu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuyBDWM9pSNW3Vi1nO7IBfQ%3D%3D"
      }
    }, 
    {
      name: "Siddhart Raja",
      title: "San Francisco, United States\n- Senior Software Engineer, Google\nEx- Uber",
      imageUrl: "https://res.cloudinary.com/dpidvvdgr/image/upload/v1751531780/j2_k3pdp2.jpg",
      socialLinks: {
        x: "https://twitter.com/Utkarsh_Web3/",
        instagram: "https://www.instagram.com/siddhart_raja/",
        linkedin: "https://www.linkedin.com/in/sidharthraja?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bs2TkPBbnRI6sHyVliKUXsQ%3D%3D"
      }
    },
    {
      name: "Utkarsh Shrivastava",
      title: "An Entrepreneur, Advisor, Public Speaker & Mentor\nEx-Polygon, currently building Threeway Studio, Web3 Carnival & Degen Summit",
      imageUrl: "https://res.cloudinary.com/dpidvvdgr/image/upload/c_crop,w_255,h_180,g_auto,e_improve/v1751531780/j4_x5baf2.jpg",
      socialLinks: {
        x: "https://twitter.com/Utkarsh_Web3/",
        instagram: "https://www.instagram.com/utkarsh_shrivastava/",
        linkedin: "https://www.linkedin.com/in/utkarsh-shrivastava7"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <SectionTitle
        title={"MENTORS & JUDGES"} 
        lineGradient="purple"
      />

      <div 
        ref={sectionRef}
        className="bg-[#BC82FE] w-full flex justify-center items-center py-8 md:py-12 lg:py-16 overflow-hidden"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10`}>
            {judges.map((judge, index) => (
              <div 
                key={judge.name}
                className={`judge-card ${isVisible ? 'animate-zoomIn' : ''}`} 
                style={{ 
                  animationDelay: `${0.1 + (index * 0.2)}s`, 
                  flex: '1 1 250px', 
                  maxWidth: '280px' 
                }}
              >
                <ProfileCard
                  cn='block text-sm sm:text-base lg:text-lg text-black mt-1 lg:mt-2 font-light max-md:text-xs max-sm:text-[11px] max-[360px]:text-[10px]'
                  name={judge.name}
                  title={judge.title}
                  imageUrl={judge.imageUrl}
                  socialLinks={judge.socialLinks}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-zoomIn {
          animation: zoomIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .judge-card {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.3s ease;
        } 
      `}</style>
    </>
  );
};

export default Judges;