import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Billboard from "../Components/Billboard/Billboard";

import useFeaturedContent from "../hooks/useFeaturedContent";

import { Store } from "../Context/StoreProvider";
import ContentCarousel from "../Components/ContentCarousel/ContentCarousel";

const HomePage = () => {
  // My context store is responsible for extracting user information from the Sign In/Sign Up page.
  const { state } = useContext(Store);
  const { userInfo } = state;
  const Navigate = useNavigate();

  // Fetching of data from the hooks (SWR)
  const {
    error: featuredError,
    isLoading: featuredIsLoading,
    data: featuredData,
  } = useFeaturedContent("all");

  // Redirecting users that haven't signed in yet.
  useEffect(() => {
    if (!userInfo) {
      Navigate("/signin");
    }
  }, [state]);

  return (
    <>
      <Billboard type="all" />
      {featuredIsLoading
        ? "Loading..."
        : featuredError
        ? "Error..."
        : featuredData.map((list) =>
            list.contentList.length ? (
              <ContentCarousel
                key={list._id}
                data={list.contentList}
                listTitle={list.name}
              />
            ) : null
          )}
    </>
  );
};

export default HomePage;
