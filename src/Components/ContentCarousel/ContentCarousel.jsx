import React, { Children, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ContentCard from "../ContentCard/ContentCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ContentCarousel = ({ featuredContentList, featuredContentId }) => {
  return (
    <Swiper className="overflow-y-visible hover:z-50" slidesPerView={3}>
      {featuredContentList.map((content) => (
        <SwiperSlide key={content._id} className="hover:z-50 z-40 transition">
          <ContentCard data={content} />
        </SwiperSlide>
      ))}
    </Swiper>

    // <div className=" flex items-center">
    //   <MdChevronLeft
    //     className="bg-black opacity-50 cursor-pointer hover:opacity-100 invisible md:visible text-white z-50"
    //     onClick={() => setContentPosition(contentPosition + SLIDE)}
    //     size={40}
    //   />
    //   <div
    //     id={featuredContentId}
    //     key={featuredContentId}
    //     className="scroll-smooth w-full h-full whitespace-nowrap transition"
    //     style={{ transform: `translateX(${contentPosition}px)` }}
    //   >
    //     {featuredContentList.map((content) => (
    //       <div key={content._id} className={`inline-block p-2 cursor-pointer`}>
    //         <ContentCard data={content} />
    //       </div>
    //     ))}
    //   </div>
    //   <MdChevronRight
    //     className="bg-black opacity-50 cursor-pointer hover:opacity-100 invisible md:visible text-white z-50"
    //     onClick={() => setContentPosition(contentPosition - SLIDE)}
    //     size={40}
    //   />
    // </div>
  );
};

export default ContentCarousel;
