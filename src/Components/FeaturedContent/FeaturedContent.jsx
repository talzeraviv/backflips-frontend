import React from "react";
import ContentCarousel from "../ContentCarousel/ContentCarousel";
import ContentCard from "../ContentCard/ContentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ChevronRight from "../../assets/ChevronRight.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";

import "./FeaturedContent.css";
import "swiper/css/navigation";
import "swiper/css";

const FeaturedContent = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="text-white px-4 md:px-12 mt-4 space-y-8">
      <p className="text-base md:text-xl lg:text-2xl font-semibold">
        {data.name}
      </p>
      <div className="relative swiper-z-transition">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerGroup={4}
          speed={800}
          className="overflow-visible relative"
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={10}
          loop
        >
          {data.contentList.map((content) => (
            <SwiperSlide
              key={content._id}
              className="swiper-slide-z-transition relative"
            >
              <ContentCard content={content} />
            </SwiperSlide>
          ))}

          <img
            src={ChevronLeft}
            className="swiper-button-prev -m-16 h-full w-12 top-0 bottom-0 bg-black my-auto opacity-80 hover:opacity-100 cursor-pointer transition"
          />

          <img
            src={ChevronRight}
            className="swiper-button-next -m-16 h-full w-12 top-0 bottom-0 bg-black my-auto opacity-80 hover:opacity-100 cursor-pointer transition z-[4]"
          />
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedContent;

{
  /* <div className="absolute z-10 left-0 right-0 flex justify-between items-center mx-auto">
  <MdChevronLeft className="image-swiper-button-prev h-10 w-10 bg-black opacity-80 hover:opacity-100 cursor-pointer hover:scale-150 transition" />
  <MdChevronRight className="image-swiper-button-prev h-10 w-10 bg-black opacity-80 hover:opacity-100 cursor-pointer hover:scale-150 transition" />
</div> */
}
