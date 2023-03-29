import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
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
  findLinkItunes,
  findLinkSpotify,
  findLinkYoutube,
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
    <AlbumLayout activeTab="settings" data={albumData} query={query}>
      <SingleForm
        data={albumData}
        formContainerProps={{
          onSuccess: ({ resource: { name } }) =>
            name &&
            update.mutate({
              ...query,
              data: { resource: { update: { name: { update: name } } } },
            }),
        }}
        loading={update.isLoading}
        textFieldElementProps={{ name: `resource.name.${router.locale}` }}
      />
      <BandUpdateAutocomplete
        loading={update.isLoading}
        onChange={{
          onClear: () => update.mutate({ ...query, ...clearBandMutate }),
          onSelect: (_e, _v, _r, d) =>
            update.mutate({ ...query, ...selectBandMutate(d?.option.id) }),
        }}
        value={albumData.band}
      />

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyAlbumSelectForm
        link={findLinkSpotify(resource.links)}
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(resource.id) })
        }
        onSelect={async ({ id, images }) => {
          const spotifyAlbum =
            await context.client.spotify.findUniqueAlbum.query(id);
          spotifyAlbum?.tracks.items.map(async (track) => {
            const music = (await context.client.music.findFirstMusic.query({
              where: { resource: { links: { some: { linkId: track.id } } } },
              include: { albums: true },
            })) as Prisma.MusicGetPayload<{ include: { albums: true } }>;
            if (music) {
              if (!music.albums.map(({ id }) => id).includes(data.id))
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
                      name: { create: { ja: track.name, en: track.name } },
                      unionType: "Music",
                      links: { create: { type: "Spotify", linkId: track.id } },
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
              id,
              images: [
                images[2]?.url ?? null,
                images[1]?.url ?? null,
                images[0]?.url ?? null,
              ],
            }),
          });
        }}
        term={title}
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <ItunesAlbumSelectForm
        link={findLinkItunes(resource.links)}
        onRemove={() =>
          update.mutate({ ...query, ...removeItunesMutate(resource.id) })
        }
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectItunesMutate({
              id: convertAffiliateLink(value.collectionViewUrl).toString(),
              images: [
                value.artworkUrl30,
                value.artworkUrl60,
                value.artworkUrl100,
              ],
            }),
          })
        }
        term={title}
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <MusicYoutubeSelectForm
        link={findLinkYoutube(resource.links)}
        onRemove={() =>
          update.mutate({ ...query, ...removeYoutubeMutate(resource.id) })
        }
        onSelect={(value) =>
          value?.id?.videoId &&
          update.mutate({
            ...query,
            ...selectYoutubeMutate({
              id: value.id.videoId,
              images: [
                value.snippet?.thumbnails?.standard?.url ?? null,
                value.snippet?.thumbnails?.medium?.url ?? null,
                value.snippet?.thumbnails?.high?.url ?? null,
              ],
            }),
          })
        }
        term={title}
      />
    </AlbumLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default AlbumSettings;
