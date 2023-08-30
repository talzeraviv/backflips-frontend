import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import useFeaturedContent from "../hooks/useFeaturedContent";
import ContentCard from "../Components/ContentCard/ContentCard";

const SearchPage = () => {
  const { data, error, loading } = useFeaturedContent("all");

  return (
    <>
      <Swiper
        className="overflow-visible swiper-z-transition"
        speed={800}
        slidesPerGroup={10}
        slidesPerView={10}
        spaceBetween={10}
      >
        {data?.contentList.map((content, index) => {
          return (
            <SwiperSlide
              key={content._id}
              className="swiper-slide-z-transition"
            >
              <ContentCard content={content} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SearchPage;
