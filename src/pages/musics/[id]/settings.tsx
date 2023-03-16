import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import DangerAlert from "../../../components/elements/alert/delete";
import AlbumUpdateAutocomplete from "../../../components/elements/autocomplete/update/album";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import TagUpdateAutocomplete from "../../../components/elements/autocomplete/update/tag";
import ArtistsUpdateForm from "../../../components/elements/form/settings/artists";
import MusicItunesSelectForm from "../../../components/elements/form/settings/select/card/music/itunes";
import SpotifyMusicSelectForm from "../../../components/elements/form/settings/select/card/music/spotify";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/music/youtube";
import SingleForm from "../../../components/elements/form/single";
import MusicLayout from "../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";
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
import {
  getCurrentUserId,
  isSelf,
  redirectToSignIn,
} from "../../../helpers/user";
import {
  removeRole,
  removeTags,
  selectRole,
  selectTags,
} from "../../../paths/bands/[id]/settings";
import { musicShowQuery } from "../../../paths/musics/[id]";
import {
  createParticipations,
  destroyParticipations,
  removeAlbums,
  selectAlbums,
} from "../../../paths/musics/[id]/settings";
import { trpc } from "../../../utils/trpc";

const SettingsMusic: NextPage = () => {
  const queryClient = useQueryClient(),
    router = useRouter<"/musics/[id]">(),
    { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    context = trpc.useContext(),
    { id } = router.query,
    currentUserId = getCurrentUserId(session),
    query = musicShowQuery({ router, session }),
    { data } = trpc.music.findUniqueMusic.useQuery(query),
    { data: userData } = trpc.user.findUniqueUser.useQuery({
      where: { id: currentUserId },
      include: { accounts: true },
    }),
    destroy = trpc.music.deleteOneMusic.useMutation({
      onSuccess: () => enqueueSnackbar("music.destroy success"),
      onError: () => enqueueSnackbar("music.destroy error"),
    }),
    update = trpc.music.updateOneMusic.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData<typeof data>(
          getQueryKey(trpc.music.findUniqueMusic, query, "query"),
          data
        );
        enqueueSnackbar("music.update success");
      },
      onError: () => enqueueSnackbar("music.update error"),
    });

  if (!data || !userData) return <></>;
  const musicData = data as MusicLayoutProps["data"],
    { resource } = musicData;
  return (
    <MusicLayout data={musicData} query={query} activeTab="settings">
      <Typography variant="h4">Info</Typography>
      <Divider />
      <SingleForm
        data={musicData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ resource: { name } }) =>
            update.mutate({
              ...query,
              data: { resource: { update: { name } } },
            }),
        }}
        textFieldElementProps={{ name: `title.${router.locale}` }}
      />
      <BandUpdateAutocomplete
        value={musicData.band}
        loading={update.isLoading}
        onChange={{
          onClear: () => update.mutate({ ...query, ...clearBandMutate }),
          onSelect: (_e, _v, _r, d) =>
            update.mutate({ ...query, ...selectBandMutate(d?.option.id) }),
        }}
      />
      <AlbumUpdateAutocomplete
        value={musicData.albums}
        loading={update.isLoading}
        onChange={{
          onRemove: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...removeAlbums(details?.option.id) }),
          onSelect: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...selectAlbums(details?.option.id) }),
        }}
      />
      <TagUpdateAutocomplete
        value={resource.tagMaps.map((tagMap) => tagMap.tag)}
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              data: { resource: { update: selectTags(details?.option.id) } },
            }),
          onRemove: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              data: {
                resource: { update: removeTags(details?.option.id, id) },
              },
            }),
        }}
      />
      <ArtistsUpdateForm
        data={musicData.participations}
        loading={update.isLoading}
        onDestroy={({ id }) =>
          update.mutate({ ...query, ...destroyParticipations(id) })
        }
        loadingButtonProps={{
          onClick: (data) =>
            data && update.mutate({ ...query, ...createParticipations(id) }),
        }}
        roleUpdateAutocompleteProps={{
          onChange: {
            onSelect: (_e, _v, _r, details) =>
              details &&
              update.mutate({
                ...query,
                data: { resource: { update: selectRole(details.option.id) } },
              }),
            onRemove: (_e, _v, _r, details) =>
              details &&
              update.mutate({
                ...query,
                data: {
                  resource: {
                    update: removeRole(details.option.id, resource.id),
                  },
                },
              }),
          },
        }}
      />
      {navigator.language !== "ja" && (
        <>
          <Typography variant="h4">Lyric</Typography>
          <Divider />

          <SingleForm
            data={musicData}
            loading={update.isLoading}
            formContainerProps={{
              onSuccess: ({ lyric }) =>
                update.mutate({ ...query, data: { lyric } }),
            }}
            textFieldElementProps={{ name: "lyric" }}
            direction="column"
          />
        </>
      )}

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyMusicSelectForm
        term={setLocale(resource.name, router)}
        streamingLink={resource.link?.streaming}
        onSelect={async (item) => {
          const album = await context.client.album.findFirstAlbum.query({
            where: {
              resource: {
                link: {
                  is: {
                    streaming: {
                      is: {
                        spotify: { is: { id: { equals: item.album.id } } },
                      },
                    },
                  },
                },
              },
            },
          });
          await update.mutate({
            ...query,
            data: {
              resource: {
                update: selectSpotifyMutate({
                  link: resource.link,
                  id: item.id,
                  images: [],
                }).data.resource.update,
              },
              isrc: item.external_ids.isrc,
              albums: { connect: { id: album?.id } },
            },
          });
        }}
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(resource.link) })
        }
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <MusicItunesSelectForm
        term={setLocale(resource.name, router)}
        streamingLink={resource.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectItunesMutate({
              link: resource.link,
              id: convertAffiliateLink(value.trackViewUrl).toString(),
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
        term={setLocale(resource.name, router)}
        streamingLink={resource.link?.streaming}
        onSelect={(value) =>
          value?.id &&
          resource.link &&
          update.mutate({
            ...query,
            data: {
              resource: {
                update: selectYoutubeMutate({
                  link: resource.link,
                  id: value.id?.videoId,
                  images: [
                    value.snippet?.thumbnails?.standard?.url,
                    value.snippet?.thumbnails?.medium?.url,
                    value.snippet?.thumbnails?.high?.url,
                  ],
                }),
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            ...query,
            data: { resource: { update: removeYoutubeMutate(resource.link) } },
          })
        }
      />
      <Typography variant="h4">Danger Zone</Typography>
      <Divider />

      {data.type === "ORIGINAL" && isSelf(session, musicData) && (
        <DangerAlert
          loadingButtonProps={{
            loading: destroy.isLoading,
            onClick: () => destroy.mutate({ ...query }),
          }}
        />
      )}
    </MusicLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default SettingsMusic;
