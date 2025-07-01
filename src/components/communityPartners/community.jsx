"use client";

import Image from "next/image";
import SectionTitle from "../shared/section-title";
import { useEffect, useRef, useState } from "react";
import { communityPartners } from "@/config/community";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Community() {
  const scrollRef = useRef(null);
  const [items, setItems] = useState(communityPartners);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 1;

    const scroll = () => {
      scrollPosition += speed;

      if (
        scrollPosition >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems([...items, ...communityPartners]);
    }, 500);
  };

  return (
    <>
      <SectionTitle title={"COMMUNITY PARTNERS"} lineGradient="purple-white" />
      <div className="flex flex-col items-center justify-center w-full overflow-hidden min-h-[640px] px-4 sm:px-8 lg:px-16 xl:px-24 mx-auto bg-[#EFE7F7]">
        <div className="flex flex-col items-start self-stretch py-12 md:py-24">
          <div className="w-full overflow-hidden relative">
            {/* Left fade effect */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#EFE7F7] to-transparent z-10"></div>

            <div
              id="scrollableDiv"
              ref={scrollRef}
              className="flex flex-row overflow-x-auto no-scrollbar relative"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div className="loading"></div>}
                scrollableTarget="scrollableDiv"
                className="flex flex-row flex-nowrap gap-8 md:gap-12 py-8 min-w-max"
                scrollThreshold={0.9}
                horizontal={true}
              >
                {items.map((partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-2 border-purple-300 p-1">
                      <div className="w-full h-full rounded-full border-2 border-dashed border-purple-700 flex items-center justify-center p-5 overflow-hidden bg-white">
                        <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
                          <Image
                            src={partner.image}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>

            {/* Right fade effect */}
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#EFE7F7] to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
