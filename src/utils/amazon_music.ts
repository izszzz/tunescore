import axios from "axios";

export const AmazonMusic = axios.create({
  baseURL: "https://api.music.amazon.dev",
});
