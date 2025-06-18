import axios from "axios";

const API = axios.create({
  baseURL: "https://stay-finder-frontend.onrender.com/api",
});

export default API;
