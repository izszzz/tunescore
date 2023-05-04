import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import DangerAlert from "../../../components/elements/alert/delete";
import AlbumUpdateAutocomplete from "../../../components/elements/autocomplete/update/album";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ArtistsUpdateForm from "../../../components/elements/form/settings/artists";
import MusicItunesSelectForm from "../../../components/elements/form/settings/select/card/music/itunes";
import SpotifyMusicSelectForm from "../../../components/elements/form/settings/select/card/music/spotify";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/music/youtube";
import SingleForm from "../../../components/elements/form/single";
import SettingsShowLayout from "../../../components/layouts/show/settings";
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
import { resourceMusicShowQuery } from "../../../helpers/resource";
import { isSelf } from "../../../helpers/user";
import { removeRole, selectRole } from "../../../paths/bands/[id]/settings";
import {
  createParticipations,
  destroyParticipations,
  removeAlbums,
  selectAlbums,
} from "../../../paths/musics/[id]/settings";
import { trpc } from "../../../utils/trpc";

const SettingsMusic: NextPage = () => {
  const { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    destroy = trpc.resource.deleteOneResource.useMutation({
      onSuccess: () => enqueueSnackbar("music.destroy success"),
      onError: () => enqueueSnackbar("music.destroy error"),
    });

  return (
    <SettingsShowLayout getQuery={resourceMusicShowQuery}>
      {({ data, update, router, query }) => {
        const { music, links, name, id } = data;
        return (
          <>
            <BandUpdateAutocomplete
              loading={update.isLoading}
              onChange={{
                onClear: () => update.mutate({ ...query, ...clearBandMutate }),
                onSelect: (_e, _v, _r, d) =>
                  d &&
                  update.mutate({ ...query, ...selectBandMutate(d.option.id) }),
              }}
              value={music?.band}
            />
            <AlbumUpdateAutocomplete
              loading={update.isLoading}
              onChange={{
                onRemove: (_e, _v, _r, d) =>
                  d &&
                  update.mutate({ ...query, ...removeAlbums(d.option.id) }),
                onSelect: (_e, _v, _r, d) =>
                  d &&
                  update.mutate({ ...query, ...selectAlbums(d.option.id) }),
              }}
              value={music?.albums}
            />
            <ArtistsUpdateForm
              data={music?.participations ?? []}
              loading={update.isLoading}
              loadingButtonProps={{
                onClick: (data) =>
                  data &&
                  update.mutate({ ...query, ...createParticipations(data.id) }),
              }}
              onDestroy={({ id }) =>
                update.mutate({ ...query, ...destroyParticipations(id) })
              }
              participationUpdateAutocompleteProps={{
                onChange: {
                  onSelect: (_e, _v, _r, d) =>
                    d &&
                    update.mutate({
                      ...query,
                      ...selectRole(d.option.id, d.option.participationId),
                    }),
                  onRemove: (_e, _v, _r, d) =>
                    d &&
                    update.mutate({
                      ...query,
                      ...removeRole(d.option.id, d.option.participationId),
                    }),
                },
              }}
            />
            {navigator.language !== "ja" && (
              <>
                <Typography variant="h4">Lyric</Typography>
                <Divider />

                <SingleForm
                  data={data}
                  direction="column"
                  formContainerProps={{
                    onSuccess: ({ music }) =>
                      update.mutate({
                        ...query,
                        data: { music: { update: { lyric: music?.lyric } } },
                      }),
                  }}
                  loading={update.isLoading}
                  textFieldElementProps={{ name: "lyric" }}
                />
              </>
            )}

            <Typography variant="h4">Spotify</Typography>
            <Divider />

            <SpotifyMusicSelectForm
              link={findLinkSpotify(links)}
              onRemove={() =>
                update.mutate({ ...query, ...removeSpotifyMutate(id) })
              }
              onSelect={(item) =>
                update.mutate({
                  ...query,
                  data: selectSpotifyMutate({ id: item.id, images: [] }).data,
                })
              }
              term={setLocale(name, router)}
            />

            <Typography variant="h4">iTunes</Typography>
            <Divider />

            <MusicItunesSelectForm
              link={findLinkItunes(links)}
              onRemove={() =>
                update.mutate({ ...query, ...removeItunesMutate(id) })
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
              term={setLocale(name, router)}
            />

            <Typography variant="h4">Youtube</Typography>
            <Divider />

            <MusicYoutubeSelectForm
              link={findLinkYoutube(links)}
              onRemove={() =>
                update.mutate({ ...query, ...removeYoutubeMutate(id) })
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
              term={setLocale(name, router)}
            />
            <Typography variant="h4">Danger Zone</Typography>
            <Divider />

            {music?.type === "ORIGINAL" && isSelf(session, music) && (
              <DangerAlert
                loadingButtonProps={{
                  loading: destroy.isLoading,
                  onClick: () => destroy.mutate({ ...query }),
                }}
              />
            )}
          </>
        );
      }}
    </SettingsShowLayout>
  );
};

export default SettingsMusic;
