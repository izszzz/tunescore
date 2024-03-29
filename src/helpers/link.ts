import type { Link, LinkType, ResourceUnionType } from "@prisma/client";
import { match, P } from "ts-pattern";

interface SelectLinkMutateArgs {
  id: string;
  images: (string | null)[];
}

export const getYoutubeURL = (type: ResourceUnionType, id: string) =>
    createLink(
      "https://www.youtube.com",
      match(type)
        .with(P.union("Music", "Album"), () => "/watch?v=")
        .with(P.union("Artist", "Band"), () => "/channel/")
        .exhaustive(),
      id
    ),
  getSpotifyURL = (type: ResourceUnionType, id: string) =>
    createLink(
      "https://open.spotify.com",
      match(type)
        .with("Music", () => "/track/")
        .with("Album", () => "/album/")
        .with(P.union("Artist", "Band"), () => "/artist/")
        .exhaustive(),
      id
    ),
  findLinkSpotify = (links: Link[]) => findLink(links, "Spotify"),
  findLinkItunes = (links: Link[]) => findLink(links, "iTunes"),
  findLinkYoutube = (links: Link[]) => findLink(links, "YouTube"),
  selectSpotifyMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ type: "Spotify", ...args }),
  selectYoutubeMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ type: "YouTube", ...args }),
  selectItunesMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ type: "iTunes", ...args }),
  removeSpotifyMutate = (resourceId: string) =>
    removeLinkMutate("Spotify", resourceId),
  removeItunesMutate = (resourceId: string) =>
    removeLinkMutate("iTunes", resourceId),
  removeYoutubeMutate = (resourceId: string) =>
    removeLinkMutate("YouTube", resourceId);
const createLink = (baseURL: string, path: string, id: string) =>
    `${baseURL}${path}${id}`,
  findLink = (links: Link[], linkType: LinkType) =>
    links.find(({ type }) => type === linkType),
  selectLinkMutate = ({
    type,
    id,
    images,
  }: SelectLinkMutateArgs & {
    type: LinkType;
    images: (string | null)[];
  }) => ({
    data: {
      links: {
        create: {
          type,
          linkId: id,
          small: images[0],
          medium: images[1],
          large: images[2],
        },
      },
    },
  }),
  removeLinkMutate = (type: LinkType, resourceId: string) => ({
    data: { links: { delete: { type_resourceId: { type, resourceId } } } },
  });
