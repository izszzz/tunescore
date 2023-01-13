import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Image from "../../elements/image";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import { getRouterId } from "../../../helpers/router";
import { bookmarkMutate } from "../../../helpers/bookmark";
import { getChannelImage } from "../../../helpers/image";
import ResourceIconButton from "../../elements/button/icon/resource";
import DefaultShowLayout from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { DefaultShowLayoutProps } from "./default";
import type { Prisma } from "@prisma/client";
import type { bandShowPath } from "../../../paths/bands/[id]";
import type { ArtistListQueryType } from "../../../helpers/artist";
import type { MusicListQueryType } from "../../../helpers/music";

export interface BandLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.BandGetPayload<{
    include: {
      artists: ArtistListQueryType;
      musics: MusicListQueryType;
      bookmarks: true;
      tagMaps: { include: { tag: true } };
    };
  }>;
  query: ReturnType<typeof bandShowPath>;
  activeTab: "info" | "settings";
}

const BandLayout: React.FC<BandLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const id = getRouterId(router);
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const name = setLocale(data.name, router);
  const update = trpc.band.updateOneBand.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData([["band", "findUniqueBand"], query], data);
      enqueueSnackbar("band.update success");
    },
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/bands/[id]",
          query: { id },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/bands/[id]/settings",
          query: { id },
        },
      },
    ],
    [id]
  );
  return (
    <DefaultShowLayout
      tabs={tabs}
      activeTab={activeTab}
      title={
        <>
          <ResourceIconButton
            resource="BAND"
            onClick={() => router.push("/bands")}
          />
          s<Typography variant="h5">{name}</Typography>
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
                type: "Band",
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

export default BandLayout;
