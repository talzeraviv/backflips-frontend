import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR("/users/list", fetcher, {
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
