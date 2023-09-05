import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ChevronRight from "../../assets/ChevronRight.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";

import ContentCard from "../ContentCard/ContentCard";

import "swiper/css/navigation";
import "swiper/css";

// Expects to receive an array of content.
const ContentCarousel = ({ data, listTitle }) => {
  const SLIDES_PER_GROUP = 6;
  const SLIDES_PER_VIEW = 6;

  if (!data) {
    return null;
  }

  return (
    <div className="relative text-white px-4 py-4 md:px-12 -top-[30vh] swiper-z-transition">
      {/* The title of the featured content list */}
      <p className="text-base md:text-xl lg:text-2xl font-semibold mb-2">
        {data.length ? listTitle : undefined}
      </p>

      {/* The content carousel */}
      <Swiper
        className="overflow-visible swiper-z-transition"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={800}
        modules={[Navigation]}
        slidesPerGroup={SLIDES_PER_GROUP}
        slidesPerView={SLIDES_PER_VIEW}
        spaceBetween={10}
        loop
      >
        {data.map((content, index) => {
          const relativePosition = index % SLIDES_PER_VIEW;
          const isFirstInGroup = relativePosition === 0;
          const isLastInGroup = relativePosition === SLIDES_PER_GROUP - 1;

          return (
            <SwiperSlide
              key={content._id}
              className="swiper-slide-z-transition"
            >
              <ContentCard
                content={content}
                isFirstInGroup={isFirstInGroup}
                isLastInGroup={isLastInGroup}
              />
            </SwiperSlide>
          );
        })}
        {/* The overrided Left and Right navigation buttons */}
        <img src={ChevronRight} className="swiper-button-next" />
        <img src={ChevronLeft} className="swiper-button-prev" />
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
