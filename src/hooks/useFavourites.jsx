import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR(`/users/`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavourites;
