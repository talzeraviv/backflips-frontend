import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import ContentCarousel from "../ContentCarousel/ContentCarousel";

const FeaturedContent = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <p className="text-white">{data.name}</p>
      <ContentCarousel
        featuredContentList={data.contentList}
        featuredContentId={data._id}
      />
    </div>
  );
};

export default FeaturedContent;
