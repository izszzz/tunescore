import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/setLocale";
import DefaultShowLayout from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { DefaultShowLayoutProps } from "./default";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import { albumShowPath } from "../../../paths/albums/[id]";
import { getRouterId } from "../../../helpers/router";
import { bookmarkMutate } from "../../../helpers/bookmark";
export interface AlbumLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.AlbumGetPayload<{
    include: {
      band: {
        include: {
          _count: {
            select: {
              bookmarks: true;
              artists: true;
              musics: true;
            };
          };
        };
      };
      musics: {
        include: {
          user: true;
          composers: true;
          lyrists: true;
          band: true;
          artists: true;
          bookmarks: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      artists: {
        include: {
          bands: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      bookmarks: true;
      tagMaps: { include: { tag: true } };
    };
  }>;
  path: ReturnType<typeof albumShowPath>;
  activeTab: "info" | "settings";
}
const AlbumLayout: React.FC<AlbumLayoutProps> = ({
  data,
  path,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const id = getRouterId(router);
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const query = path[1];
  const update = trpc.useMutation(["album.updateOneAlbum"], {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(path, data);
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
        <Typography variant="h5">{setLocale(data.title, router)}</Typography>
      }
      tagMaps={data.tagMaps}
      bookmarkToggleButtonProps={{
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: (bookmarked) =>
          update.mutate({
            ...query,
            data: {
              bookmarks: bookmarkMutate({
                type: "Album",
                bookmarked,
                bookmarks: data.bookmarks,
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