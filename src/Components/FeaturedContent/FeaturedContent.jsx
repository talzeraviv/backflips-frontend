import React from "react";
import ContentCarousel from "../ContentCarousel/ContentCarousel";
import ContentCard from "../ContentCard/ContentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "swiper/css";

const FeaturedContent = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="text-white px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-base md:text-xl lg:text-2xl font-semibold">
          {data.name}
        </p>
        <Swiper
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          modules={[Navigation]}
          className="overflow-visible swiper-z-transition"
          slidesPerView={4}
          spaceBetween={10}
          loop
        >
          <MdChevronLeft className="image-swiper-button-prev" />
          {data.contentList.map((content) => (
            <SwiperSlide
              key={content._id}
              className="swiper-slide-z-transition"
            >
              <ContentCard content={content} />
            </SwiperSlide>
          ))}
          <MdChevronRight className="relative right-0 image-swiper-button-next" />
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedContent;
