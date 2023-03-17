import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";

import { bookmarkMutate } from "../../../helpers/bookmark";
import setLocale from "../../../helpers/locale";
import { isAuth } from "../../../helpers/user";
import type {
  AlbumShowArgsType,
  AlbumShowQueryType,
} from "../../../paths/albums/[id]";
import { trpc } from "../../../utils/trpc";
import AlbumIconButton from "../../elements/button/icon/album";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface AlbumLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.AlbumGetPayload<AlbumShowArgsType>;
  query: AlbumShowQueryType;
  activeTab: "info" | "settings";
}
const AlbumLayout: React.FC<AlbumLayoutProps> = ({
  data: {
    resource: { bookmarks, tagMaps, ...resource },
  },
  query,
  activeTab,
  children,
}) => {
  const router = useRouter<"/albums/[id]">(),
    queryClient = useQueryClient(),
    { show } = useModal("auth-modal"),
    { data: session, status } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    update = trpc.album.updateOneAlbum.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.album.findUniqueAlbum, query, "query"),
          data
        );
        enqueueSnackbar("album.update success");
      },
      onError: () => enqueueSnackbar("album.update error"),
    }),
    { id } = router.query,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/albums/[id]" },
      { label: "settings", pathname: "/albums/[id]/settings" },
    ];
  return (
    <DefaultShowLayout
      activeTab={activeTab}
      tabs={tabs}
      title={
        <>
          <AlbumIconButton />
          <Typography variant="h5">
            {setLocale(resource.name, router)}
          </Typography>
        </>
      }
      tagMaps={tagMaps}
      reportButtonProps={{ unionType: "Album", id }}
      bookmarkToggleButtonProps={{
        value: isNonEmpty(bookmarks),
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
    >
      {children}
    </DefaultShowLayout>
  );
};
export default AlbumLayout;
