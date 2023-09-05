import getFetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR("/users/list", getFetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavourites;
