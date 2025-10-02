import axios from "axios";
import payrocConfig from "./constants";

const Axios = axios.create({
  baseURL: payrocConfig.VITE_BASE_API_URL,
  withCredentials: true,
});

export const getPayrocSessionToken = async (params) => {
  const res = await Axios.request({
    method: "POST",
    url: payrocConfig.VITE_SESSION_TOKEN_PATH,
    data: params,
  });

  return res.data;
};
