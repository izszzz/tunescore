import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import DeleteAlert from "../../../components/elements/alert/delete";
import ArtistUpdateAutocomplete from "../../../components/elements/autocomplete/update/artist";
import TagUpdateAutocomplete from "../../../components/elements/autocomplete/update/tag";
import ItunesArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/itunes";
import ChannelYoutubeSelectForm from "../../../components/elements/form/settings/select/card/channel/youtube";
import SingleRowForm from "../../../components/elements/form/single_row";
import BandLayout from "../../../components/layouts/show/band";
import type { BandLayoutProps } from "../../../components/layouts/show/band";
import { convertAffiliateLink } from "../../../helpers/itunes";
import setLocale from "../../../helpers/locale";
import { getRouterId } from "../../../helpers/router";
import { redirectToSignIn } from "../../../helpers/user";
import { bandShowQuery } from "../../../paths/bands/[id]";
import { trpc } from "../../../utils/trpc";

const BandSettings: NextPage = () => {
  const router = useRouter(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    id = getRouterId(router),
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
      onError: () => {
        enqueueSnackbar("band.update error");
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
                    unionType: "Music",
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
                    unionId_tagId_unionType: {
                      unionType: "Music",
                      unionId: id,
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default BandSettings;
