import React, { useMemo } from "react";

import { useModal } from "@ebay/nice-modal-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { getImage } from "../../../helpers/image";
import setLocale from "../../../helpers/locale";
import { getRouterId } from "../../../helpers/router";
import type {
  ArtistShowArgsType,
  artistShowQuery,
} from "../../../paths/artists/[id]";
import { trpc } from "../../../utils/trpc";
import ResourceIconButton from "../../elements/button/icon/resource";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface ArtistLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.ArtistGetPayload<ArtistShowArgsType>;
  query: ReturnType<typeof artistShowQuery>;
  activeTab: "info" | "settings";
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const router = useRouter(),
    id = getRouterId(router),
    { show } = useModal("auth-modal");
  const name = setLocale(data.name, router);
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const update = trpc.artist.updateOneArtist.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData(
        getQueryKey(trpc.artist.findUniqueArtist, query, "query"),
        data
      );
      enqueueSnackbar("artist.update success");
    },
    onError: () => enqueueSnackbar("artist.update error"),
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
                src={getImage(data.link.streaming, 80) || undefined}
              />
            </Box>
          )}
        </>
      }
      tagMaps={data.tagMaps}
      reportButtonProps={{ unionType: "Artist", id }}
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
                  unionType: "Artist",
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
export default ArtistLayout;
