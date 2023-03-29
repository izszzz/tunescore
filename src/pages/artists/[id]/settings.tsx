import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ItunesArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/itunes";
import SpotifyArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/spotify";
import ChannelYoutubeSelectForm from "../../../components/elements/form/settings/select/card/channel/youtube";
import SingleForm from "../../../components/elements/form/single";
import ArtistLayout from "../../../components/layouts/show/artist";
import type { ArtistLayoutProps } from "../../../components/layouts/show/artist";
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
import { artistShowQuery } from "../../../paths/artists/[id]";
import {
  removeArtistBand,
  selectArtistBand,
} from "../../../paths/artists/[id]/settings";
import { trpc } from "../../../utils/trpc";

const ArtistSettings: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter<"/artists/[id]">();
  const { enqueueSnackbar } = useSnackbar();
  const query = artistShowQuery({ router, session: useSession().data });
  const { data } = trpc.resource.findUniqueResource.useQuery(query);
  const update = trpc.resource.updateOneResource.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData(
        getQueryKey(trpc.resource.findUniqueResource, query, "query"),
        data
      );
      enqueueSnackbar("artist.update success");
    },
    onError: () => enqueueSnackbar("artist.update error"),
  });

  if (!data) return <></>;
  const artistData = data as ArtistLayoutProps["data"],
    { artist, links, id, name } = artistData;
  return (
    <ArtistLayout activeTab="settings" data={artistData} query={query}>
      <SingleForm
        data={artistData}
        formContainerProps={{
          onSuccess: ({ name }) =>
            name &&
            update.mutate({ ...query, data: { name: { update: name } } }),
        }}
        loading={update.isLoading}
        textFieldElementProps={{ name: `resource.name.${router.locale}` }}
      />
      <BandUpdateAutocomplete
        loading={update.isLoading}
        multiple
        onChange={{
          onSelect: (_e, _v, _r, d) =>
            d && update.mutate({ ...query, ...selectArtistBand(d.option.id) }),
          onRemove: (_e, _v, _r, d) =>
            d && update.mutate({ ...query, ...removeArtistBand(d.option.id) }),
        }}
        value={artist?.bands}
      />

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyArtistSelectForm
        link={findLinkSpotify(links)}
        onRemove={() => update.mutate({ ...query, ...removeSpotifyMutate(id) })}
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
        onRemove={() => update.mutate({ ...query, ...removeItunesMutate(id) })}
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
        onRemove={() => update.mutate({ ...query, ...removeYoutubeMutate(id) })}
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
    </ArtistLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default ArtistSettings;
