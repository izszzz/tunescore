import React, { useMemo } from "react";

import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

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
  const router = useRouter();
  const id = getRouterId(router);
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const update = trpc.album.updateOneAlbum.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData([["album", "findUniqueAlbum"], query], data);
      enqueueSnackbar("album.update success");
    },
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
      bookmarkToggleButtonProps={{
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: () =>
          update.mutate({
            ...query,
            data: {
              bookmarks: bookmarkMutate({
                type: "Album",
                data,
                session,
              }),
            },
          }),
      }}
    >
      {children}
    </DefaultShowLayout>
  );
};
export default AlbumLayout;
