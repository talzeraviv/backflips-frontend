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

export const getFetcher = async (url) => {
  try {
    const headers = createHeaders();
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
};

export const postFetcher = async (url, body) => {
  try {
    const headers = createHeaders();
    const response = await axios.post(url, body, headers);
    return response.data;
  } catch (error) {
    throw new Error("Failed to post data.");
  }
};

export const deleteFetcher = async (url, params, data) => {
  try {
    const headers = createHeaders();
    const response = await axios.delete(`${url}${params}${data}`, headers);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete data." + error);
  }
};

export default getFetcher;
