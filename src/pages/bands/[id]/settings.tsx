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
    <BandLayout activeTab="settings" data={bandData} query={query}>
      <SingleForm
        data={bandData}
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
      <ArtistUpdateAutocomplete
        label="artists"
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...selectArtists(details?.option.id) }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({ ...query, ...removeArtists(details?.option.id) }),
        }}
        value={bandData.artists}
      />
      <TagUpdateAutocomplete
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
        value={tagMaps.map((tagMap) => tagMap.tag)}
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
    </BandLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default BandSettings;
