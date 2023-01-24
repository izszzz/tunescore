import { google } from "googleapis";

import { env } from "../../env/server.mjs";

export const youtube = google.youtube({
  auth: env.GOOGLE_API_KEY,
  version: "v3",
});
