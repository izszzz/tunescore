import { env } from "../../env/server.mjs";
import { google } from "googleapis";

export const youtube = google.youtube({
  auth: env.GOOGLE_API_KEY,
  version: "v3",
});
