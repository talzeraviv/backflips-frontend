import React from "react";
import ContentCard from "../ContentCard/ContentCard";

const FeaturedContent = ({ data }) => {
  if (!data.contentList) {
    return null;
  }

  console.log(data);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {data.name}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.contentList.map((content) => (
            <ContentCard
              className="text-white"
              key={content._id}
              data={content}
            ></ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
