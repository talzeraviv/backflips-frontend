import getFetcher from "../libs/Fetcher";
import useSWR from "swr";

const useBillboard = (type) => {
  const { data, error, isLoading } = useSWR(`/content/${type}`, getFetcher, {
    revalidateOnFocus: false, // Disable revalidation on focus
    revalidateOnReconnect: false, // Disable revalidation on reconnect
    revalidateIfStale: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
