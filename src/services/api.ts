import axios from "axios";

const api = axios.create({
  baseURL: "https://api.flickr.com/services/rest",
});

export default api;
