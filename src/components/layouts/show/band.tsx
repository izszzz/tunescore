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
  BandShowArgsType,
  BandShowQueryType,
} from "../../../paths/bands/[id]";
import { trpc } from "../../../utils/trpc";
import BandIconButton from "../../elements/button/icon/band";
import Image from "../../elements/image";
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
  data: {
    resource: { bookmarks, tagMaps, ...resource },
  },
  query,
  activeTab,
  children,
}) => {
  const router = useRouter<"/bands/[id]">(),
    { show } = useModal("auth-modal"),
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
    name = setLocale(resource.name, router),
    { id } = router.query,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/bands/[id]" },
      { label: "settings", pathname: "/bands/[id]/settings" },
    ];
  return (
    <DefaultShowLayout
      tabs={tabs}
      activeTab={activeTab}
      title={
        <>
          <BandIconButton />
          <Typography variant="h5">{name}</Typography>
          {resource.link?.streaming && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                style={{ borderRadius: 5 }}
                height="80"
                alt={name}
                src={getImage(resource.link.streaming, 80) || undefined}
              />
            </Box>
          )}
        </>
      }
      tagMaps={tagMaps}
      reportButtonProps={{ unionType: "Band", id }}
      bookmarkToggleButtonProps={{
        value: isNonEmpty(bookmarks),
        disabled: update.isLoading,
        onClick: () => {
          if (isAuth(status))
            update.mutate({
              ...query,
              data: {
                resource: {
                  update: { bookmarks: bookmarkMutate({ bookmarks, session }) },
                },
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

export default BandLayout;
