import axios from "axios";

const createHeaders = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  if (userInfo && userInfo.token) {
    return { headers: { authorization: userInfo.token } };
  }

  return {};
};

const fetcher = async (url) => {
  try {
    const headers = createHeaders();
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default fetcher;
