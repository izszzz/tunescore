import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import SingleRowForm from "../../../components/elements/form/single_row";
import BandLayout from "../../../components/layouts/show/band";
import { bandShowPath } from "../../../paths/bands/[id]";
import TagUpdateAutocomplete from "../../../components/elements/autocomplete/update/tag";
import ArtistUpdateAutocomplete from "../../../components/elements/autocomplete/update/artist";
import { getRouterId } from "../../../helpers/router";
import type { NextPage } from "next";
import type { BandLayoutProps } from "../../../components/layouts/show/band";
const BandSettings: NextPage = () => {
  const router = useRouter();
  const id = getRouterId(router);
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const path = bandShowPath({ router, session });
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const update = trpc.useMutation(`band.updateOneBand`, {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(path, data);
      enqueueSnackbar("music.update success");
    },
    onError: () => {
      enqueueSnackbar("music.update error");
    },
  });
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"];
  return (
    <BandLayout data={bandData} path={path} activeTab="settings">
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
    </BandLayout>
  );
};
export default BandSettings;
