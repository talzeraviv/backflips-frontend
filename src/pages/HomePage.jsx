import React from "react";
import Navbar from "../Components/Navbar/navbar";
import Billboard from "../Components/Billboard/Billboard";
import useFeaturedContent from "../hooks/useFeaturedContent";
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent";

const HomePage = () => {
  const { data, error, isLoading } = useFeaturedContent();

  // if (!isLoading) {
  //   const { name, contentList } = data;
  // }

  return (
    <>
      <Navbar />
      <Billboard />
      {isLoading ? <h1>Loading...</h1> : <FeaturedContent data={data[0]} />}
    </>
  );
};

export default HomePage;
