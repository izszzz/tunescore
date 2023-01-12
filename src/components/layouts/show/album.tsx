import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import { getRouterId } from "../../../helpers/router";
import { bookmarkMutate } from "../../../helpers/bookmark";
import ResourceIconButton from "../../elements/button/icon/resource";
import DefaultShowLayout from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { DefaultShowLayoutProps } from "./default";
import type { Prisma } from "@prisma/client";
import type { albumShowPath } from "../../../paths/albums/[id]";
import type { BandListQueryType } from "../../../helpers/band";
import type { ArtistListQueryType } from "../../../helpers/artist";
import type { MusicListQueryType } from "../../../helpers/music";
export interface AlbumLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.AlbumGetPayload<{
    include: {
      band: BandListQueryType;
      musics: MusicListQueryType;
      artists: ArtistListQueryType;
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
  const update = trpc.album.updateOneAlbum.useMutation({
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
