import getFetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFeaturedContent = (type) => {
  const { data, error, isLoading } = useSWR(
    `/content/featured/${type}`,
    getFetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useFeaturedContent;
