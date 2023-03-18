import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Person from "@mui/icons-material/Person";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { isAuth } from "../../../helpers/user";
import type {
  ArtistShowArgsType,
  ArtistShowQueryType,
} from "../../../paths/artists/[id]";
import { trpc } from "../../../utils/trpc";
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
  data: { resource },
  query,
  activeTab,
  children,
}) => {
  const { data: session, status } = useSession(),
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
    { bookmarks } = resource,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/artists/[id]" },
      { label: "settings", pathname: "/artists/[id]/settings" },
    ];
  return (
    <DefaultShowLayout
      activeTab={activeTab}
      bookmarkToggleButtonProps={{
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
      icon={<Person />}
      resource={resource}
      tabs={tabs}
      type="Artist"
    >
      {children}
    </DefaultShowLayout>
  );
};
export default ArtistLayout;
