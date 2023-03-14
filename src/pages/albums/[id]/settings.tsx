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
  const title = setLocale(data.title, router);
  const albumData = data as AlbumLayoutProps["data"];
  return (
    <AlbumLayout data={albumData} query={query} activeTab="settings">
      <SingleForm
        data={albumData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ title }) =>
            update.mutate({ ...query, data: { title } }),
        }}
        textFieldElementProps={{ name: `title.${router.locale}` }}
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
        streamingLink={data.link?.streaming}
        onSelect={async ({ id, images }) => {
          const spotifyAlbum =
            await context.client.spotify.findUniqueAlbum.query(id);
          spotifyAlbum?.tracks.items.map(async (track) => {
            const music = await context.client.music.findFirstMusic.query({
              where: {
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
                  title: { ja: track.name, en: track.name },
                  albums: { connect: { id: data.id } },
                  link: { streaming: { spotify: { id: track.id } } },
                },
              });
            }
          });
          await update.mutate({
            ...query,
            ...selectSpotifyMutate({
              link: data.link,
              id,
              images: [images[2]?.url, images[1]?.url, images[0]?.url],
            }),
          });
        }}
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(data.link) })
        }
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <ItunesAlbumSelectForm
        term={title}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectItunesMutate({
              link: data.link,
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
          update.mutate({ ...query, ...removeItunesMutate(data.link) })
        }
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <MusicYoutubeSelectForm
        term={title}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectYoutubeMutate({
              link: data.link,
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
          update.mutate({ ...query, ...removeYoutubeMutate(data.link) })
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
