import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { trpc } from "../../../utils/trpc";
import SingleRowForm from "../../../components/elements/form/single_row";
import BandLayout from "../../../components/layouts/show/band";
import { bandShowQuery } from "../../../paths/bands/[id]";
import TagUpdateAutocomplete from "../../../components/elements/autocomplete/update/tag";
import ArtistUpdateAutocomplete from "../../../components/elements/autocomplete/update/artist";
import { getRouterId } from "../../../helpers/router";
import ChannelYoutubeSelectForm from "../../../components/elements/form/settings/select/card/channel/youtube";
import ItunesArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/itunes";
import { convertAffiliateLink } from "../../../helpers/itunes";
import setLocale from "../../../helpers/locale";
import DeleteAlert from "../../../components/elements/alert/delete";
import type { NextPage } from "next";
import type { BandLayoutProps } from "../../../components/layouts/show/band";

const BandSettings: NextPage = () => {
  const router = useRouter(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    id = getRouterId(router),
    query = bandShowQuery({ router, session: useSession().data }),
    { data } = trpc.band.findUniqueBand.useQuery(query),
    update = trpc.band.updateOneBand.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData([["band", "findUniqueBand"], query], data);
        enqueueSnackbar("music.update success");
      },
      onError: () => {
        enqueueSnackbar("music.update error");
      },
    }),
    destroy = trpc.band.deleteOneBand.useMutation({
      onSuccess: () => {
        enqueueSnackbar("band.destroy success");
      },
    });
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"];
  return (
    <BandLayout data={bandData} query={query} activeTab="settings">
      <SingleRowForm
        data={bandData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ name }) => update.mutate({ ...query, data: { name } }),
        }}
        textFieldElementProps={{
          name: "name",
        }}
      />
      <ArtistUpdateAutocomplete
        value={bandData.artists}
        loading={update.isLoading}
        label="artists"
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            update.mutate({
              ...query,
              data: { artists: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              ...query,
              data: { artists: { disconnect: { id: details?.option.id } } },
            }),
        }}
      />
      <TagUpdateAutocomplete
        value={bandData.tagMaps.map((tagMap) => tagMap.tag)}
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              data: {
                tagMaps: {
                  create: {
                    tag: { connect: { id: details.option.id } },
                    resourceType: "Music",
                  },
                },
              },
            }),
          onRemove: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              data: {
                tagMaps: {
                  delete: {
                    resourceId_tagId_resourceType: {
                      resourceType: "Music",
                      resourceId: id,
                      tagId: details.option.id,
                    },
                  },
                },
              },
            }),
        }}
      />
      <ItunesArtistSelectForm
        term={setLocale(data.name, router)}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: {
                  ...data.link?.streaming,
                  itunes: {
                    id: convertAffiliateLink(value.artistLinkUrl).toString(),
                  },
                },
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: { ...data.link?.streaming, itunes: undefined },
              },
            },
          })
        }
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <ChannelYoutubeSelectForm
        term={setLocale(data.name, router)}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          value?.id &&
          data.link &&
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: {
                  ...data.link.streaming,
                  youtube: {
                    id: value.id.channelId,
                    image: {
                      size: {
                        small: value.snippet?.thumbnails?.standard?.url,
                        medium: value.snippet?.thumbnails?.medium?.url,
                        large: value.snippet?.thumbnails?.high?.url,
                      },
                    },
                  },
                },
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: { ...data.link?.streaming, youtube: undefined },
              },
            },
          })
        }
      />

      <DeleteAlert
        loadingButtonProps={{
          onClick: () => destroy.mutate({ ...query }),
          loading: destroy.isLoading,
        }}
      />
    </BandLayout>
  );
};
export default BandSettings;
