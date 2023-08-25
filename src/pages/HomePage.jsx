import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar/navbar";
import Billboard from "../Components/Billboard/Billboard";
import FeaturedContentCarousel from "../Components/FeaturedContent/FeaturedContentCarousel";
import useFeaturedContent from "../hooks/useFeaturedContent";

import { Store } from "../Context/StoreProvider";

const HomePage = () => {
  // My context store is responsible for extracting user information from the Sign In/Sign Up page.
  const { userInfo } = useContext(Store);
  const Navigate = useNavigate();

  // Fetching of data from the useFeaturedContent hook (SWR)
  const { data, error, isLoading } = useFeaturedContent();

  // Redirecting users that haven't signed in yet. (UNMARKED FOR NOW)
  // useEffect(() => {
  //   if (!userInfo) {
  //     Navigate("/signin");
  //   }
  // }, [userInfo]);

  return (
    <>
      <Navbar />
      <Billboard />
      <RenderContent
        className={"absolute"}
        data={data}
        error={error}
        isLoading={isLoading}
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

  return data.map((content) => (
    <FeaturedContentCarousel key={content._id} data={content} />
  ));
};

export default HomePage;
