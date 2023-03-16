import type { LinkList } from "@prisma/client";
import { match, P } from "ts-pattern";

export type LinkType = "Music" | "Album" | "Artist" | "Band";

export interface SelectLinkMutateArgs {
  link: LinkList | null;
  id: string | null | undefined;
  images: (string | null | undefined)[];
}

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
    ),
  selectLinkMutate = ({
    link,
    name,
    id,
    images,
  }: SelectLinkMutateArgs & {
    name: string;
    images: (string | null | undefined)[];
  }) => ({
    link: {
      streaming: {
        ...link?.streaming,
        [name]: {
          id,
          image: {
            size: {
              small: images[0],
              medium: images[1],
              large: images[2],
            },
          },
        },
      },
    },
  }),
  selectSpotifyMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ name: "spotify", ...args }),
  selectYoutubeMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ name: "youtube", ...args }),
  selectItunesMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ name: "itunes", ...args }),
  removeLinkMutate = (link: LinkList | null, name: string) => ({
    data: { link: { streaming: { ...link?.streaming, [name]: undefined } } },
  }),
  removeSpotifyMutate = (link: LinkList | null) =>
    removeLinkMutate(link, "spotify"),
  removeItunesMutate = (link: LinkList | null) =>
    removeLinkMutate(link, "itunes"),
  removeYoutubeMutate = (link: LinkList | null) =>
    removeLinkMutate(link, "youtube");
