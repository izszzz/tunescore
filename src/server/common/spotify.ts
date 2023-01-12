import Spotify from "spotify-web-api-node";
import { env } from "../../env/server.mjs";

export const spotify = new Spotify({
  clientId: env.SPOTIFY_CLIENT_ID,
  clientSecret: env.SPOTIFY_CLIENT_SECRET,
});
