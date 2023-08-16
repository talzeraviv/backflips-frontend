import React from "react";
import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFeaturedContent = () => {
  const { data, error, isLoading } = useSWR("/content/featured", fetcher);
  return {
    data,
    error,
    isLoading,
  };
};

export default useFeaturedContent;
