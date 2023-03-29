import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Person from "@mui/icons-material/Person";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { isAuth } from "../../../helpers/user";
import type {
  ArtistShowArgsType,
  ArtistShowQueryType,
} from "../../../paths/artists/[id]";
import { trpc } from "../../../utils/trpc";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./resource";
import type { ResourceShowLayoutProps } from "./resource";

export interface ArtistLayoutProps
  extends Pick<ResourceShowLayoutProps, "children"> {
  data: Prisma.ResourceGetPayload<ArtistShowArgsType>;
  query: ArtistShowQueryType;
  activeTab: "info" | "settings";
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const { data: session, status } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    queryClient = useQueryClient(),
    { show } = useModal("auth-modal"),
    update = trpc.resource.updateOneResource.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          data
        );
        enqueueSnackbar("artist.update success");
      },
      onError: () => enqueueSnackbar("artist.update error"),
    }),
    { bookmarks } = data,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/artists/[id]" },
      { label: "settings", pathname: "/artists/[id]/settings" },
    ];
  return (
    <DefaultShowLayout
      activeTab={activeTab}
      bookmarkToggleButtonProps={{
        disabled: update.isLoading,
        onClick: () => {
          if (isAuth(status))
            update.mutate({
              ...query,
              ...bookmarkMutate({ bookmarks, session }),
            });
          else show();
        },
      }}
      icon={<Person />}
      resource={data}
      tabs={tabs}
      type="Artist"
    >
      {children}
    </DefaultShowLayout>
  );
};
export default ArtistLayout;
