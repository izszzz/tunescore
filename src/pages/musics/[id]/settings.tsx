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
import { isSelf, redirectToSignIn } from "../../../helpers/user";
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
    query = musicShowQuery({ router, session }),
    { data } = trpc.music.findUniqueMusic.useQuery(query),
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

  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"],
    { resource } = musicData;
  return (
    <MusicLayout activeTab="settings" data={musicData} query={query}>
      <Typography variant="h4">Info</Typography>
      <Divider />
      <SingleForm
        data={musicData}
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
        value={musicData.band}
      />
      <AlbumUpdateAutocomplete
        loading={update.isLoading}
        onChange={{
          onRemove: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...removeAlbums(details?.option.id) }),
          onSelect: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...selectAlbums(details?.option.id) }),
        }}
        value={musicData.albums}
      />
      <TagUpdateAutocomplete
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            details &&
            update.mutate({ ...query, ...selectTags(details.option.id) }),
          onRemove: (_e, _v, _r, details) =>
            details &&
            update.mutate({ ...query, ...removeTags(details.option.id, id) }),
        }}
        value={resource.tagMaps.map((tagMap) => tagMap.tag)}
      />
      <ArtistsUpdateForm
        data={musicData.participations}
        loading={update.isLoading}
        loadingButtonProps={{
          onClick: (data) =>
            data && update.mutate({ ...query, ...createParticipations(id) }),
        }}
        onDestroy={({ id }) =>
          update.mutate({ ...query, ...destroyParticipations(id) })
        }
        roleUpdateAutocompleteProps={{
          onChange: {
            onSelect: (_e, _v, _r, details) =>
              details &&
              update.mutate({ ...query, ...selectRole(details.option.id) }),
            onRemove: (_e, _v, _r, details) =>
              details &&
              update.mutate({
                ...query,
                ...removeRole(details.option.id, resource.id),
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
            direction="column"
            formContainerProps={{
              onSuccess: ({ lyric }) =>
                update.mutate({ ...query, data: { lyric } }),
            }}
            loading={update.isLoading}
            textFieldElementProps={{ name: "lyric" }}
          />
        </>
      )}

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyMusicSelectForm
        link={resource.links.find(({ type }) => type === "Spotify")}
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(resource.id) })
        }
        onSelect={async (item) => {
          const album = await context.client.album.findFirstAlbum.query({
            where: {
              resource: {
                links: {
                  every: {
                    type: "Spotify",
                    linkId: item.album.id,
                  },
                },
              },
            },
          });
          await update.mutate({
            ...query,
            data: {
              ...selectSpotifyMutate({ id: item.id, images: [] }).data,
              isrc: item.external_ids.isrc,
              albums: { connect: { id: album?.id } },
            },
          });
        }}
        term={setLocale(resource.name, router)}
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <MusicItunesSelectForm
        link={resource.links.find(({ type }) => type === "iTunes")}
        onRemove={() =>
          update.mutate({ ...query, ...removeItunesMutate(resource.id) })
        }
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectItunesMutate({
              id: convertAffiliateLink(value.trackViewUrl).toString(),
              images: [
                value.artworkUrl30,
                value.artworkUrl60,
                value.artworkUrl100,
              ],
            }),
          })
        }
        term={setLocale(resource.name, router)}
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <MusicYoutubeSelectForm
        link={resource.links.find(({ type }) => type === "YouTube")}
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
        term={setLocale(resource.name, router)}
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
