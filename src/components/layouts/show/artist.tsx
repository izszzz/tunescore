import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import { getRouterId } from "../../../helpers/router";
import { bookmarkMutate } from "../../../helpers/bookmark";
import Image from "../../elements/image";
import { getChannelImage } from "../../../helpers/image";
import ResourceIconButton from "../../elements/button/icon/resource";
import DefaultShowLayout from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { DefaultShowLayoutProps } from "./default";
import type { Prisma } from "@prisma/client";
import type { artistShowPath } from "../../../paths/artists/[id]";
import type { BandListQueryType } from "../../../helpers/band";
import type { MusicListQueryType } from "../../../helpers/music";
export interface ArtistLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.ArtistGetPayload<{
    include: {
      bands: BandListQueryType;
      participations: {
        include: {
          music: MusicListQueryType;
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
  const name = setLocale(data.name, router);
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
        <>
          <ResourceIconButton
            resource="ARTIST"
            onClick={() => router.push("/artists")}
          />
          <Typography variant="h5">{name}</Typography>
          {data.link?.streaming && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                style={{ borderRadius: 5 }}
                height="80"
                alt={name}
                src={
                  getChannelImage(data.link.streaming)?.image?.size?.medium ||
                  ""
                }
              />
            </Box>
          )}
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
                type: "Artist",
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
export default ArtistLayout;
