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
  BandShowArgsType,
  bandShowQuery,
} from "../../../paths/bands/[id]";
import { trpc } from "../../../utils/trpc";
import ResourceIconButton from "../../elements/button/icon/resource";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface BandLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.BandGetPayload<BandShowArgsType>;
  query: ReturnType<typeof bandShowQuery>;
  activeTab: "info" | "settings";
}

const BandLayout: React.FC<BandLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const router = useRouter(),
    { show } = useModal("auth-modal");
  const id = getRouterId(router);
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const name = setLocale(data.name, router);
  const update = trpc.band.updateOneBand.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData(
        getQueryKey(trpc.band.findUniqueBand, query, "query"),
        data
      );
      enqueueSnackbar("band.update success");
    },
    onError: () => enqueueSnackbar("band.update error"),
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: { pathname: "/bands/[id]", query: { id } },
      },
      {
        label: "settings",
        href: { pathname: "/bands/[id]/settings", query: { id } },
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
      reportButtonProps={{ unionType: "Band", id }}
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
                  unionType: "Band",
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

export default BandLayout;
