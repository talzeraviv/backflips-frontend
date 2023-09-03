import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Billboard from "../Components/Billboard/Billboard";
import RenderContent from "../Components/RenderContent/RenderContent";

import useFeaturedContent from "../hooks/useFeaturedContent";

import { Store } from "../Context/StoreProvider";

const MoviesPage = () => {
  // My context store is responsible for extracting user information from the Sign In/Sign Up page.
  const { state } = useContext(Store);
  const { userInfo } = state;
  const Navigate = useNavigate();

  // Fetching of data from the hooks (SWR)
  const {
    error: moviesError,
    isLoading: moviesIsLoading,
    data: moviesData,
  } = useFeaturedContent("Movie");

  // Redirecting users that haven't signed in yet.
  useEffect(() => {
    if (!userInfo) {
      Navigate("/signin");
    }
  }, []);

  return (
    <>
      <Billboard type="Movie" />
      <RenderContent
        error={moviesError}
        isLoading={moviesIsLoading}
        data={moviesData}
      />
    </>
  );
};

export default MoviesPage;
