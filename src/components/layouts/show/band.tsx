import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/setLocale";
import DefaultShowLayout from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { DefaultShowLayoutProps } from "./default";
import type { Prisma } from "@prisma/client";
import { createPath } from "../../../helpers/createPath";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

export interface BandLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.BandGetPayload<{
    include: {
      bookmarks: true;
    };
  }>;
  activeTab: "info" | "settings";
}

const BandLayout: React.FC<BandLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const path = createPath([
    "band.findUniqueBand",
    {
      where: { id: router.query.id as string },
      include: {
        artists: true,
        musics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
            bookmarks: {
              where: {
                user: { id: session.data?.user?.id },
                resourceType: "Band",
              },
            },
          },
        },
      },
    },
  ]);
  const query = path[1];
  const update = trpc.useMutation(["band.updateOneBand"], {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(path, data);
      enqueueSnackbar("band.update success");
    },
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/bands/[id]",
          query: { id: router.query.id as string },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/bands/[id]/settings",
          query: { id: router.query.id as string },
        },
      },
    ],
    [router.query.id]
  );
  return (
    <DefaultShowLayout
      tabs={tabs}
      activeTab={activeTab}
      title={
        <Typography variant="h5">{setLocale(data.name, router)}</Typography>
      }
      bookmarkToggleButtonProps={{
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: (value) =>
          update.mutate({
            ...query,
            data: {
              bookmarks: {
                [value ? "delete" : "create"]: {
                  resourceType: "Band",
                  user: { connect: session.data?.user?.id },
                },
              },
            },
          }),
      }}
    >
      {children}
    </DefaultShowLayout>
  );
};

export default BandLayout;
