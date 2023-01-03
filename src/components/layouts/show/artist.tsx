import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import DefaultShowLayout from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { DefaultShowLayoutProps } from "./default";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import { artistShowPath } from "../../../paths/artists/[id]";
import { getRouterId } from "../../../helpers/router";
import { bookmarkMutate } from "../../../helpers/bookmark";
export interface ArtistLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.ArtistGetPayload<{
    include: {
      bands: {
        include: {
          _count: {
            select: {
              bookmarks: true;
              artists: true;
              musics: true;
              albums: true;
            };
          };
        };
      };
      participations: {
        include: {
          music: {
            include: {
              user: true;
              band: true;
              participations: {
                include: { artist: true; roleMap: { include: { role: true } } };
              };
              bookmarks: true;
              _count: {
                select: {
                  bookmarks: true;
                };
              };
            };
          };
          roleMap: { include: { role: true } };
        };
      };
      bookmarks: true;
      tagMaps: { include: { tag: true } };
    };
  }>;
  path: ReturnType<typeof artistShowPath>;
  activeTab: "info" | "settings";
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({
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
  const update = trpc.useMutation(["artist.updateOneArtist"], {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(path, data);
      enqueueSnackbar("artist.update success");
    },
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/artists/[id]",
          query: { id },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/artists/[id]/settings",
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
        <Typography variant="h5">{setLocale(data.name, router)}</Typography>
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
                type: "Artist",
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
export default ArtistLayout;
