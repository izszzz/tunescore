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
import { removeBands, selectBands } from "../../../paths/artists/[id]/settings";
import { trpc } from "../../../utils/trpc";

const ArtistSettings: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter<"/artists/[id]">();
  const { enqueueSnackbar } = useSnackbar();
  const query = artistShowQuery({ router, session: useSession().data });
  const { data } = trpc.artist.findUniqueArtist.useQuery(query);
  const update = trpc.artist.updateOneArtist.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData(
        getQueryKey(trpc.artist.findUniqueArtist, query, "query"),
        data
      );
      enqueueSnackbar("artist.update success");
    },
    onError: () => enqueueSnackbar("artist.update error"),
  });

  if (!data) return <></>;
  const artistData = data as ArtistLayoutProps["data"],
    { resource } = artistData;
  return (
    <ArtistLayout activeTab="settings" data={artistData} query={query}>
      <SingleForm
        data={artistData}
        formContainerProps={{
          onSuccess: ({ resource: { name } }) =>
            update.mutate({
              ...query,
              data: { resource: { update: { name } } },
            }),
        }}
        loading={update.isLoading}
        textFieldElementProps={{ name: `resource.name.${router.locale}` }}
      />
      <BandUpdateAutocomplete
        loading={update.isLoading}
        multiple
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...selectBands(details?.option.id) }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...removeBands(details?.option.id) }),
        }}
        value={artistData.bands}
      />

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyArtistSelectForm
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(resource.link) })
        }
        onSelect={({ id, images }) =>
          update.mutate({
            ...query,
            ...selectSpotifyMutate({
              link: resource.link,
              id,
              images: [images[2]?.url, images[1]?.url, images[0]?.url],
            }),
          })
        }
        streamingLink={resource.link?.streaming}
        term={setLocale(resource.name, router)}
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <ItunesArtistSelectForm
        onRemove={() =>
          update.mutate({ ...query, ...removeItunesMutate(resource.link) })
        }
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            ...selectItunesMutate({
              link: resource.link,
              id: convertAffiliateLink(value.artistLinkUrl).toString(),
              images: [],
            }),
          })
        }
        streamingLink={resource.link?.streaming}
        term={setLocale(resource.name, router)}
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <ChannelYoutubeSelectForm
        onRemove={() =>
          update.mutate({ ...query, ...removeYoutubeMutate(resource.link) })
        }
        onSelect={(value) =>
          update.mutate({
            ...query,
            ...selectYoutubeMutate({
              link: resource.link,
              id: value?.id?.channelId,
              images: [
                value?.snippet?.thumbnails?.standard?.url,
                value?.snippet?.thumbnails?.medium?.url,
                value?.snippet?.thumbnails?.high?.url,
              ],
            }),
          })
        }
        streamingLink={resource.link?.streaming}
        term={setLocale(resource.name, router)}
      />
    </ArtistLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default ArtistSettings;
