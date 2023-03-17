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
import { isAuth } from "../../../helpers/user";
import type {
  ArtistShowArgsType,
  ArtistShowQueryType,
} from "../../../paths/artists/[id]";
import { trpc } from "../../../utils/trpc";
import ArtistIconButton from "../../elements/button/icon/artist";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface ArtistLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.ArtistGetPayload<ArtistShowArgsType>;
  query: ArtistShowQueryType;
  activeTab: "info" | "settings";
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({
  data: {
    resource: { bookmarks, tagMaps, ...resource },
  },
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
    name = setLocale(resource.name, router),
    { id } = router.query,
    image = getImage(resource.link?.streaming, 80, { channel: true }),
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
          <ArtistIconButton />
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
      tagMaps={tagMaps}
      reportButtonProps={{ unionType: "Artist", id }}
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
export default ArtistLayout;
