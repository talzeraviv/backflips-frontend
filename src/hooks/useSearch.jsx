import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useSearch = (query) => {
  const { data, error, isLoading } = useSWR(
    `/content/search?q=${query}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useSearch;
