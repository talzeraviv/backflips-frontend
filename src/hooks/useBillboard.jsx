import React from "react";
import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/content/random/", fetcher);
  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
