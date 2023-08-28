import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFeaturedContent = (type) => {
  const { data, error, isLoading } = useSWR(
    `/content/featured/${type}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useFeaturedContent;
