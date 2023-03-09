import { match, P } from "ts-pattern";

export type LinkType = "Music" | "Album" | "Artist" | "Band";

export const createLink = (baseURL: string, path: string, id: string) =>
    `${baseURL}${path}${id}`,
  getYoutubeLink = (type: LinkType, id: string) =>
    createLink(
      "https://www.youtube.com",
      match(type)
        .with(P.union("Music", "Album"), () => "/watch?v=")
        .with(P.union("Artist", "Band"), () => "/channel/")
        .exhaustive(),
      id
    ),
  getSpotifyLink = (type: LinkType, id: string) =>
    createLink(
      "https://open.spotify.com",
      match(type)
        .with("Music", () => "/track/")
        .with("Album", () => "/album/")
        .with(P.union("Artist", "Band"), () => "/artist/")
        .exhaustive(),
      id
    );
