import React from "react";
import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useBillboard = (type) => {
  const { data, error, isLoading } = useSWR(`/content/${type}`, fetcher);
  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
