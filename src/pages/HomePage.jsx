import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar/navbar";
import Billboard from "../Components/Billboard/Billboard";
import useFeaturedContent from "../hooks/useFeaturedContent";
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent";
import ContentCarousel from "../Components/ContentCarousel/ContentCarousel";
import { Store } from "../Context/StoreProvider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const Navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      Navigate("/signin");
    }
  }, [state]);

  const { data, error, isLoading } = useFeaturedContent();

  return (
    <>
      <Navbar />
      <Billboard />

      <div className="pb-40 text-white">
        {isLoading ? (
          <h1>Loading content...</h1>
        ) : error ? (
          <h1>Error... {error.message}</h1>
        ) : (
          data.map((content) => (
            <FeaturedContent key={content._id} data={content} />
          ))
        )}
      </div>
    </>
  );
};

export default HomePage;
