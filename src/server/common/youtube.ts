import { google } from "googleapis";
import { env } from "../../env/server.mjs";
export const youtube = google.youtube({
  version: "v3",
  auth: env.GOOGLE_API_KEY,
});
