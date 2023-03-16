import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ItunesAlbumSelectForm from "../../../components/elements/form/settings/select/card/album/itunes";
import SpotifyAlbumSelectForm from "../../../components/elements/form/settings/select/card/album/spotify";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/music/youtube";
import SingleForm from "../../../components/elements/form/single";
import AlbumLayout from "../../../components/layouts/show/album";
import type { AlbumLayoutProps } from "../../../components/layouts/show/album";
import { clearBandMutate, selectBandMutate } from "../../../helpers";
import { convertAffiliateLink } from "../../../helpers/itunes";
import {
  removeItunesMutate,
  removeSpotifyMutate,
  removeYoutubeMutate,
  selectItunesMutate,
  selectSpotifyMutate,
  selectYoutubeMutate,
} from "../../../helpers/link";
import setLocale from "../../../helpers/locale";
import { redirectToSignIn } from "../../../helpers/user";
import { albumShowQuery } from "../../../paths/albums/[id]";
import { trpc } from "../../../utils/trpc";

const AlbumSettings: NextPage = () => {
  const queryClient = useQueryClient(),
    router = useRouter<"/albums/[id]">(),
    context = trpc.useContext(),
    query = albumShowQuery({ router, session: useSession().data }),
    { data } = trpc.album.findUniqueAlbum.useQuery(query),
    update = trpc.album.updateOneAlbum.useMutation({
      onSuccess: (data) =>
        queryClient.setQueryData(
          getQueryKey(trpc.album.findUniqueAlbum, query, "query"),
          data
        ),
    });
  if (!data) return <></>;
  const albumData = data as AlbumLayoutProps["data"],
    { resource } = albumData,
    title = setLocale(resource.name, router);
  return (
    <AlbumLayout data={albumData} query={query} activeTab="settings">
      <SingleForm
        data={albumData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ resource: { name } }) =>
            update.mutate({
              ...query,
              data: { resource: { update: { name } } },
            }),
        }}
        textFieldElementProps={{ name: `resource.name.${router.locale}` }}
      />
      <BandUpdateAutocomplete
        value={albumData.band}
        loading={update.isLoading}
        onChange={{
          onClear: () => update.mutate({ ...query, ...clearBandMutate }),
          onSelect: (_e, _v, _r, d) =>
            update.mutate({ ...query, ...selectBandMutate(d?.option.id) }),
        }}
      />

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyAlbumSelectForm
        term={title}
        streamingLink={resource.link?.streaming}
        onSelect={async ({ id, images }) => {
          const spotifyAlbum =
            await context.client.spotify.findUniqueAlbum.query(id);
          spotifyAlbum?.tracks.items.map(async (track) => {
            const music = await context.client.music.findFirstMusic.query({
              where: {
                resource: {
                  link: {
                    is: {
                      streaming: {
                        is: {
                          spotify: { is: { id: { equals: track.id } } },
                        },
                      },
                    },
                  },
                },
              },
            });
            if (music) {
              if (!music.albumIDs.includes(data.id))
                update.mutate({
                  ...query,
                  data: { musics: { connect: { id: music.id } } },
                });
            } else {
              await context.client.music.createOneMusic.mutate({
                data: {
                  type: "COPY" as const,
                  visibillity: "PUBLIC" as const,
                  resource: {
                    create: {
                      name: { ja: track.name, en: track.name },
                      unionType: "Music",
                      link: { streaming: { spotify: { id: track.id } } },
                    },
                  },
                  albums: { connect: { id: data.id } },
                },
              });
            }
          });
          await update.mutate({
            ...query,
            ...selectSpotifyMutate({
              link: resource.link,
              id,
              images: [images[2]?.url, images[1]?.url, images[0]?.url],
            }),
          });
        }}
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(resource.link) })
        }
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <ItunesAlbumSelectForm
        term={title}
        streamingLink={resource.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectItunesMutate({
              link: resource.link,
              id: convertAffiliateLink(value.collectionViewUrl).toString(),
              images: [
                value.artworkUrl30,
                value.artworkUrl60,
                value.artworkUrl100,
              ],
            }),
          })
        }
        onRemove={() =>
          update.mutate({ ...query, ...removeItunesMutate(resource.link) })
        }
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <MusicYoutubeSelectForm
        term={title}
        streamingLink={resource.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectYoutubeMutate({
              link: resource.link,
              id: value.id?.videoId,
              images: [
                value.snippet?.thumbnails?.standard?.url,
                value.snippet?.thumbnails?.medium?.url,
                value.snippet?.thumbnails?.high?.url,
              ],
            }),
          })
        }
        onRemove={() =>
          update.mutate({ ...query, ...removeYoutubeMutate(resource.link) })
        }
      />
    </AlbumLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default AlbumSettings;
