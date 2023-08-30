import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useSearch = (query, page) => {
  const { data, error, isLoading } = useSWR(
    `/content/search?query=${query}page=${page}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useSearch;
