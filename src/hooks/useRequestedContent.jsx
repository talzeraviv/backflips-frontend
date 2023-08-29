import fetcher from "../libs/Fetcher";
import useSWR from "swr";

const useRequestedContent = (type) => {
  const { data, error, isLoading } = useSWR(
    `/content/watch?id=${type}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useRequestedContent;
