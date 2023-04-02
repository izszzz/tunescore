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
import { bandShowQuery } from "../../../paths/bands/[id]";
import {
  removeArtists,
  removeTag,
  selectArtists,
  selectTag,
} from "../../../paths/bands/[id]/settings";
import { trpc } from "../../../utils/trpc";

const BandSettings: NextPage = () => {
  const router = useRouter<"/bands/[id]">(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    query = bandShowQuery({ router, session: useSession().data }),
    { data } = trpc.resource.findUniqueResource.useQuery(query),
    update = trpc.resource.updateOneResource.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          data
        );
        enqueueSnackbar("band.update success");
      },
      onError: () => enqueueSnackbar("band.update error"),
    });
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"],
    { tags, band, links, id, name } = bandData;
  return (
    <BandLayout activeTab="settings" data={bandData} query={query}>
      <SingleForm
        data={bandData}
        formContainerProps={{
          onSuccess: ({ name }) =>
            name &&
            update.mutate({ ...query, data: { name: { update: name } } }),
        }}
        loading={update.isLoading}
        textFieldElementProps={{ name: `name.${router.locale}` }}
      />
      <ArtistUpdateAutocomplete
        label="artists"
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, d) =>
            d && update.mutate({ ...query, ...selectArtists(d.option.id) }),
          onRemove: (_e, _v, _r, d) =>
            d && update.mutate({ ...query, ...removeArtists(d.option.id) }),
        }}
        value={band?.artists}
      />
      <TagUpdateAutocomplete
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, d) =>
            d && update.mutate({ ...query, ...selectTag(d.option.id) }),
          onRemove: (_e, _v, _r, d) =>
            d && update.mutate({ ...query, ...removeTag(d.option.id) }),
        }}
        value={tags}
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
    </BandLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default BandSettings;
