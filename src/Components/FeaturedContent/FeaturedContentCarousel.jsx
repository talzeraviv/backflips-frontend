import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ChevronRight from "../../assets/ChevronRight.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";

import ContentCard from "../ContentCard/ContentCard";

import "swiper/css/navigation";
import "swiper/css";

const FeaturedContentCarousel = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="text-white px-4 py-4 md:px-12">
      {/* The title of the featured content list */}
      <p className="text-base md:text-xl lg:text-2xl font-semibold">
        {data.name}
      </p>

      {/* The content carousel */}
      <Swiper
        className="overflow-visible swiper-z-transition"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerGroup={4}
        speed={800}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={10}
        loop
      >
        {data.contentList.map((content) => (
          <SwiperSlide key={content._id} className="swiper-slide-z-transition ">
            <ContentCard content={content} />
          </SwiperSlide>
        ))}

        {/* The overrided Left and Right navigation buttons */}
        <img src={ChevronLeft} className="swiper-button-prev" />
        <img src={ChevronRight} className="swiper-button-next" />
      </Swiper>
    </div>
  );
};

export default FeaturedContentCarousel;
