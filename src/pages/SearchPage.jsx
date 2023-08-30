import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFeaturedContent from "../hooks/useFeaturedContent";
import ContentCard from "../Components/ContentCard/ContentCard";
import useSearch from "../hooks/useSearch";
import { useLocation } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
const SearchPage = () => {
  const [query, setQuery] = useState("");

  const { search } = useLocation();
  console.log(search);
  const searchParams = new URLSearchParams(search);
  console.log(query);
  const { data, error, isLoading } = useSearch(query);

  useEffect(() => {
    setQuery(searchParams.get("q"));
  }, [search, searchParams]);

  return (
    <div className="flex flex-wrap w-screen h-screen">
      {isLoading ? (
        <FadeLoader
          color="#e50914"
          className="inset-0 absolute my-auto mx-auto text-center"
        />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="w-full h-full mx-16 my-28">
          <p className="text-white text-2xl my-5">
            Showing results for: "{query}"
          </p>
          <div className="grid grid-cols-4 gap-4 mx-auto">
            {data.contents.map((content) => (
              <ContentCard content={content} className="max-w-xs" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
