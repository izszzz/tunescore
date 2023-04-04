import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import { resourceShowQuery } from "../../../helpers/resource";
import { removeTag, selectTag } from "../../../paths/bands/[id]/settings";
import { trpc } from "../../../utils/trpc";
import TagUpdateAutocomplete from "../../elements/autocomplete/update/tag";
import SingleForm from "../../elements/form/single";

import ResourceShowLayout from "./resource";
import type { ResourceData } from "./resource";

interface SettingsShowLayoutProps {
  children: (
    data: ResourceData,
    update: ReturnType<typeof trpc.resource.updateOneResource.useMutation>
  ) => React.ReactNode;
}
const SettingsShowLayout = ({ children }: SettingsShowLayoutProps) => {
  const router = useRouter<"/musics/[id]">(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    { data: session } = useSession(),
    query = resourceShowQuery({ router, session }),
    update = trpc.resource.updateOneResource.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData<typeof data>(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          data
        );
        enqueueSnackbar("music.update success");
      },
      onError: () => enqueueSnackbar("music.update error"),
    });

  return (
    <ResourceShowLayout activeTab="settings">
      {(data) => {
        const { tags } = data;
        return (
          <>
            <Typography variant="h4">Info</Typography>
            <Divider />
            <SingleForm
              data={data}
              formContainerProps={{
                onSuccess: ({ name }) =>
                  name &&
                  update.mutate({ ...query, data: { name: { update: name } } }),
              }}
              loading={update.isLoading}
              textFieldElementProps={{ name: `name.${router.locale}` }}
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

            {children(data, update)}
          </>
        );
      }}
    </ResourceShowLayout>
  );
};
export default SettingsShowLayout;
