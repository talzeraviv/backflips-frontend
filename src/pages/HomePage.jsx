import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Billboard from "../Components/Billboard/Billboard";
import FeaturedContentCarousel from "../Components/FeaturedContentCarousel/FeaturedContentCarousel";
import ContentCarousel from "../Components/ContentCarousel/ContentCarousel";

import useFeaturedContent from "../hooks/useFeaturedContent";
import useFavourites from "../hooks/useFavourites";

import { Store } from "../Context/StoreProvider";

const HomePage = () => {
  // My context store is responsible for extracting user information from the Sign In/Sign Up page.
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const Navigate = useNavigate();

  // Fetching of data from the hooks (SWR)
  const {
    data: featuredData,
    error: featuredError,
    isLoading: featuredIsLoading,
  } = useFeaturedContent("all");

  const {
    data: favoritesData,
    error: favoritesError,
    isLoading: favoritesIsLoading,
  } = useFavourites();

  // Redirecting users that haven't signed in yet.
  useEffect(() => {
    if (!userInfo) {
      Navigate("/signin");
    }
  }, []);

  return (
    <>
      <Billboard type="all" />
      <RenderContent
        data={favoritesData}
        error={favoritesError}
        isLoading={favoritesIsLoading}
      />
      <RenderContent
        data={featuredData}
        error={featuredError}
        isLoading={featuredIsLoading}
      />
    </>
  );
};

const RenderContent = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <h1>Loading content...</h1>;
  }

  if (error) {
    return <h1>Error... {error.message}</h1>;
  }

  return data.map((list) => (
    <ContentCarousel
      key={list._id}
      data={list.contentList}
      listTitle={list.name}
    />
  ));
};

export default HomePage;
