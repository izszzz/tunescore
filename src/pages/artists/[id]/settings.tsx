import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ItunesArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/itunes";
import SpotifyArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/spotify";
import ChannelYoutubeSelectForm from "../../../components/elements/form/settings/select/card/channel/youtube";
import SettingsShowLayout from "../../../components/layouts/show/settings";
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
import { resourceShowQuery } from "../../../helpers/resource";
import { redirectToSignIn } from "../../../helpers/user";
import {
  removeArtistBand,
  selectArtistBand,
} from "../../../paths/artists/[id]/settings";

const ArtistSettings: NextPage = () => {
  const router = useRouter<"/artists/[id]">(),
    query = resourceShowQuery({ router, session: useSession().data });

  return (
    <SettingsShowLayout>
      {(data, update) => {
        const { artist, links, id, name } = data;
        return (
          <>
            <BandUpdateAutocomplete
              loading={update.isLoading}
              multiple
              onChange={{
                onSelect: (_e, _v, _r, d) =>
                  d &&
                  update.mutate({ ...query, ...selectArtistBand(d.option.id) }),
                onRemove: (_e, _v, _r, d) =>
                  d &&
                  update.mutate({ ...query, ...removeArtistBand(d.option.id) }),
              }}
              value={artist?.bands}
            />

            <Typography variant="h4">Spotify</Typography>
            <Divider />

            <SpotifyArtistSelectForm
              link={findLinkSpotify(links)}
              onRemove={() =>
                update.mutate({ ...query, ...removeSpotifyMutate(id) })
              }
              onSelect={({ id, images }) =>
                update.mutate({
                  ...query,
                  ...selectSpotifyMutate({
                    id,
                    images: [
                      images[2]?.url ?? null,
                      images[1]?.url ?? null,
                      images[0]?.url ?? null,
                    ],
                  }),
                })
              }
              term={setLocale(name, router)}
            />

            <Typography variant="h4">iTunes</Typography>
            <Divider />

            <ItunesArtistSelectForm
              link={findLinkItunes(links)}
              onRemove={() =>
                update.mutate({ ...query, ...removeItunesMutate(id) })
              }
              onSelect={(value) =>
                value &&
                update.mutate({
                  ...query,
                  ...selectItunesMutate({
                    id: convertAffiliateLink(value.artistLinkUrl).toString(),
                    images: [],
                  }),
                })
              }
              term={setLocale(name, router)}
            />

            <Typography variant="h4">Youtube</Typography>
            <Divider />

            <ChannelYoutubeSelectForm
              link={findLinkYoutube(links)}
              onRemove={() =>
                update.mutate({ ...query, ...removeYoutubeMutate(id) })
              }
              onSelect={(value) =>
                value?.id?.channelId &&
                update.mutate({
                  ...query,
                  ...selectYoutubeMutate({
                    id: value.id.channelId,
                    images: [
                      value?.snippet?.thumbnails?.standard?.url ?? null,
                      value?.snippet?.thumbnails?.medium?.url ?? null,
                      value?.snippet?.thumbnails?.high?.url ?? null,
                    ],
                  }),
                })
              }
              term={setLocale(name, router)}
            />
          </>
        );
      }}
    </SettingsShowLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default ArtistSettings;
