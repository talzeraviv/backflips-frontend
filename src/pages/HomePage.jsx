import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Billboard from "../Components/Billboard/Billboard";
import RenderContent from "../Components/RenderContent/RenderContent";

import useFeaturedContent from "../hooks/useFeaturedContent";
import useFavourites from "../hooks/useFavourites";

import { Store } from "../Context/StoreProvider";

const HomePage = () => {
  // My context store is responsible for extracting user information from the Sign In/Sign Up page.
  const { state } = useContext(Store);
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
        error={favoritesError}
        isLoading={favoritesIsLoading}
        data={favoritesData}
      />
      <RenderContent
        error={featuredError}
        isLoading={featuredIsLoading}
        data={featuredData}
      />
    </>
  );
};

export default HomePage;
