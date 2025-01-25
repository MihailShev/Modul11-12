import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getingPosts = async () => {
  const { data } = await axios.get("posts");
  return data;
};

export const gettingPostDetails = async (id) => {
  const { data } = await axios.get(`posts/${id}`);
  return data;
};
export const getingPhotos = async () => {
  const { data } = await axios.get("photos");
  return data;
};
export const getOnePhoto = async (id) => {
  const { data } = await axios.get(`photos/${id}`);
  return data;
};
