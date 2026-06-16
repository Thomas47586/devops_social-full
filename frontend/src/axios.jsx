import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://api.toandata.com/api/",
  withCredentials: true,
});
