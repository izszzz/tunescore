import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ArtistUpdateAutocomplete from "../../../components/elements/autocomplete/update/artist";
import TagUpdateAutocomplete from "../../../components/elements/autocomplete/update/tag";
import ItunesArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/itunes";
import SpotifyArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/spotify";
import ChannelYoutubeSelectForm from "../../../components/elements/form/settings/select/card/channel/youtube";
import SingleForm from "../../../components/elements/form/single";
import BandLayout from "../../../components/layouts/show/band";
import type { BandLayoutProps } from "../../../components/layouts/show/band";
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
import { bandShowQuery } from "../../../paths/bands/[id]";
import {
  removeArtists,
  removeTags,
  selectArtists,
  selectTags,
} from "../../../paths/bands/[id]/settings";
import { trpc } from "../../../utils/trpc";

const BandSettings: NextPage = () => {
  const router = useRouter<"/bands/[id]">(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    query = bandShowQuery({ router, session: useSession().data }),
    { data } = trpc.band.findUniqueBand.useQuery(query),
    update = trpc.band.updateOneBand.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.band.findUniqueBand, query, "query"),
          data
        );
        enqueueSnackbar("band.update success");
      },
      onError: () => enqueueSnackbar("band.update error"),
    });
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"],
    {
      resource: { tagMaps, ...resource },
    } = bandData;
  return (
    <BandLayout data={bandData} query={query} activeTab="settings">
      <SingleForm
        data={bandData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ resource: { name } }) =>
            update.mutate({
              ...query,
              data: { resource: { update: { name } } },
            }),
        }}
        textFieldElementProps={{ name: `name.${router.locale}` }}
      />
      <ArtistUpdateAutocomplete
        value={bandData.artists}
        loading={update.isLoading}
        label="artists"
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...selectArtists(details?.option.id) }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...removeArtists(details?.option.id) }),
        }}
      />
      <TagUpdateAutocomplete
        value={tagMaps.map((tagMap) => tagMap.tag)}
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...selectTags(details?.option.id) }),
          onRemove: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              ...removeTags(details.option.id, resource.id),
            }),
        }}
      />

      <Typography variant="h4">Spotify</Typography>
      <Divider />

      <SpotifyArtistSelectForm
        term={setLocale(resource.name, router)}
        streamingLink={resource.link?.streaming}
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
        onRemove={() =>
          update.mutate({ ...query, ...removeSpotifyMutate(resource.link) })
        }
      />
      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <ItunesArtistSelectForm
        term={setLocale(resource.name, router)}
        streamingLink={resource.link?.streaming}
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
        onRemove={() =>
          update.mutate({ ...query, ...removeItunesMutate(resource.link) })
        }
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <ChannelYoutubeSelectForm
        term={setLocale(resource.name, router)}
        streamingLink={resource.link?.streaming}
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
        onRemove={() =>
          update.mutate({ ...query, ...removeYoutubeMutate(resource.link) })
        }
      />
    </BandLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default BandSettings;
