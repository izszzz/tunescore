import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { trpc } from "../../../utils/trpc";
import DefaultShowLayout, { DefaultShowLayoutProps } from "./default";
import setLocale from "../../../utils/setLocale";
import { DefaultTabsProps } from "../../elements/tabs/default";
import { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";

export interface BandLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.BandGetPayload<null>;
  activeTab: "info" | "settings";
}

const BandLayout: React.FC<BandLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const bookmarked = trpc.useQuery([
    "bookmarked.band",
    { id: router.query.id as string },
  ]);
  const bookmarkCreate = trpc.useMutation(["band.updateOneBand"]);
  const bookmarkDestroy = trpc.useMutation(["band.updateOneBand"]);
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
        defaultValue: !!bookmarked.data,
        loading: bookmarkCreate.isLoading || bookmarkDestroy.isLoading,
        onEnabled: (setValue) =>
          bookmarkDestroy.mutate(
            {
              where: { id: router.query.id as string },
              data: {
                bookmarks: {
                  disconnect: { id: session.data?.user?.id },
                },
              },
            },
            { onSuccess: () => setValue(false) }
          ),
        onDisabled: (setValue) =>
          bookmarkCreate.mutate(
            {
              where: { id: router.query.id as string },
              data: {
                bookmarks: {
                  connect: { id: session.data?.user?.id },
                },
              },
            },
            { onSuccess: () => setValue(true) }
          ),
      }}
    >
      {children}
    </DefaultShowLayout>
  );
};

export default BandLayout;
