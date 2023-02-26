import React, { useMemo } from "react";

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
import { getRouterId } from "../../../helpers/router";
import type {
  AlbumShowArgsType,
  albumShowQuery,
} from "../../../paths/albums/[id]";
import { trpc } from "../../../utils/trpc";
import ResourceIconButton from "../../elements/button/icon/resource";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface AlbumLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.AlbumGetPayload<AlbumShowArgsType>;
  query: ReturnType<typeof albumShowQuery>;
  activeTab: "info" | "settings";
}
const AlbumLayout: React.FC<AlbumLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const router = useRouter(),
    { show } = useModal("auth-modal"),
    id = getRouterId(router),
    { data: session, status } = useSession(),
    queryClient = useQueryClient(),
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
    });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/albums/[id]",
          query: { id },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/albums/[id]/settings",
          query: { id },
        },
      },
    ],
    [id]
  );
  return (
    <DefaultShowLayout
      activeTab={activeTab}
      tabs={tabs}
      title={
        <>
          <ResourceIconButton
            resource="ALBUM"
            onClick={() => router.push("/albums")}
          />
          <Typography variant="h5">{setLocale(data.title, router)}</Typography>
        </>
      }
      tagMaps={data.tagMaps}
      reportButtonProps={{ unionType: "Album", id }}
      bookmarkToggleButtonProps={{
        value: isNonEmpty(data.bookmarks),
        disabled: update.isLoading,
        onClick: () => {
          if (status === "authenticated")
            update.mutate({
              ...query,
              data: {
                bookmarks: bookmarkMutate({
                  bookmarks: data.bookmarks,
                  unionType: "Album",
                  session,
                }),
              },
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
