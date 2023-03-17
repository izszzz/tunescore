import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Group from "@mui/icons-material/Group";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { isAuth } from "../../../helpers/user";
import type {
  BandShowArgsType,
  BandShowQueryType,
} from "../../../paths/bands/[id]";
import { trpc } from "../../../utils/trpc";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface BandLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.BandGetPayload<BandShowArgsType>;
  query: BandShowQueryType;
  activeTab: "info" | "settings";
}

const BandLayout: React.FC<BandLayoutProps> = ({
  data: { resource },
  query,
  activeTab,
  children,
}) => {
  const { show } = useModal("auth-modal"),
    { data: session, status } = useSession(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    update = trpc.band.updateOneBand.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.band.findUniqueBand, query, "query"),
          data
        );
        enqueueSnackbar("band.update success");
      },
      onError: () => enqueueSnackbar("band.update error"),
    }),
    { bookmarks } = resource,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/bands/[id]" },
      { label: "settings", pathname: "/bands/[id]/settings" },
    ];
  return (
    <DefaultShowLayout
      tabs={tabs}
      resource={resource}
      activeTab={activeTab}
      unionType="Band"
      icon={<Group />}
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
    >
      {children}
    </DefaultShowLayout>
  );
};

export default BandLayout;
