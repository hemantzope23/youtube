import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAvzI19wd4OFjFMD4y1E0lm3AGX4PGlMFY",
  },
});

export default request;
