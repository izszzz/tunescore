import type { LinkType, ResourceUnionType } from "@prisma/client";
import { match, P } from "ts-pattern";

export interface SelectLinkMutateArgs {
  id: string;
  images: (string | null)[];
}

export const createLink = (baseURL: string, path: string, id: string) =>
    `${baseURL}${path}${id}`,
  getYoutubeLink = (type: ResourceUnionType, id: string) =>
    createLink(
      "https://www.youtube.com",
      match(type)
        .with(P.union("Music", "Album"), () => "/watch?v=")
        .with(P.union("Artist", "Band"), () => "/channel/")
        .exhaustive(),
      id
    ),
  getSpotifyLink = (type: ResourceUnionType, id: string) =>
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
    type,
    id,
    images,
  }: SelectLinkMutateArgs & {
    type: LinkType;
    images: (string | null)[];
  }) => ({
    data: {
      resource: {
        update: {
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
      },
    },
  }),
  selectSpotifyMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ type: "Spotify", ...args }),
  selectYoutubeMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ type: "YouTube", ...args }),
  selectItunesMutate = ({ ...args }: SelectLinkMutateArgs) =>
    selectLinkMutate({ type: "iTunes", ...args }),
  removeLinkMutate = (type: LinkType, resourceId: string) => ({
    data: {
      resource: {
        update: {
          links: {
            delete: { type_resourceId: { type, resourceId } },
          },
        },
      },
    },
  }),
  removeSpotifyMutate = (resourceId: string) =>
    removeLinkMutate("Spotify", resourceId),
  removeItunesMutate = (resourceId: string) =>
    removeLinkMutate("iTunes", resourceId),
  removeYoutubeMutate = (resourceId: string) =>
    removeLinkMutate("YouTube", resourceId);
