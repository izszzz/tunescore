import React from "react";

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
  const router = useRouter<"/artists/[id]">(),
    { data: session, status } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    queryClient = useQueryClient(),
    { show } = useModal("auth-modal"),
    update = trpc.artist.updateOneArtist.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.artist.findUniqueArtist, query, "query"),
          data
        );
        enqueueSnackbar("artist.update success");
      },
      onError: () => enqueueSnackbar("artist.update error"),
    }),
    name = setLocale(data.name, router),
    { id } = router.query,
    image = getImage(data.link?.streaming, 80, { channel: true }),
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/artists/[id]" },
      { label: "settings", pathname: "/artists/[id]/settings" },
    ];
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
          {image && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                style={{ borderRadius: 5 }}
                height="80"
                alt={name}
                src={image}
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
