import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ContentCarouselTemp from "../ContentCarouselTemp/ContentCarouselTemp";

function FeaturedContentTemp({ key, data }) {
  return (
    <div className="w-full mt-10 ">
      <span className="text-white text-xl font-medium ml-12 ">
        {data.title} tempTitle
      </span>
      <div className="relative">
        <MdChevronLeft className=" w-12 h-full opacity-50 absolute  top-0 bottom-0 left-0 m-auto bg-black cursor-pointer" />
        <div className="ml-12 mt-3 flex w-max ">
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
          <ContentCarouselTemp />
        </div>
        <MdChevronRight className="w-12 h-full opacity-50 absolute top-0 bottom-0 right-0 m-auto bg-black cursor-pointer" />
      </div>
    </div>
  );
}

export default FeaturedContentTemp;
