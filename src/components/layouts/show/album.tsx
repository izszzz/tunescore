import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Album from "@mui/icons-material/Album";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { isAuth } from "../../../helpers/user";
import type {
  AlbumShowArgsType,
  AlbumShowQueryType,
} from "../../../paths/albums/[id]";
import { trpc } from "../../../utils/trpc";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./resource";
import type { ResourceShowLayoutProps } from "./resource";

export interface AlbumLayoutProps
  extends Pick<ResourceShowLayoutProps, "children"> {
  data: Prisma.ResourceGetPayload<AlbumShowArgsType>;
  query: AlbumShowQueryType;
  activeTab: "info" | "settings";
}
const AlbumLayout: React.FC<AlbumLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const queryClient = useQueryClient(),
    { show } = useModal("auth-modal"),
    { data: session, status } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    update = trpc.resource.updateOneResource.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          data
        );
        enqueueSnackbar("album.update success");
      },
      onError: () => enqueueSnackbar("album.update error"),
    }),
    { bookmarks } = data,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/albums/[id]" },
      { label: "settings", pathname: "/albums/[id]/settings" },
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
      icon={<Album />}
      resource={data}
      tabs={tabs}
      type="Album"
    >
      {children}
    </DefaultShowLayout>
  );
};
export default AlbumLayout;
