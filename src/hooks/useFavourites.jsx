import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR("/users/list", fetcher, {
    revalidateOnFocus: false, // Disable revalidation on focus
    revalidateOnReconnect: false, // Disable revalidation on reconnect
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
