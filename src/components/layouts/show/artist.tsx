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
export interface ArtistLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.ArtistGetPayload<{ include: { bookmarks: true } }>;
  activeTab: "info" | "settings";
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const update = trpc.useMutation(["artist.updateOneArtist"]);
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/artists/[id]",
          query: { id: router.query.id as string },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/artists/[id]/settings",
          query: { id: router.query.id as string },
        },
      },
    ],
    [router.query.id]
  );
  return (
    <DefaultShowLayout
      activeTab={activeTab}
      tabs={tabs}
      title={
        <Typography variant="h5">{setLocale(data.name, router)}</Typography>
      }
      bookmarkToggleButtonProps={{
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: (value) =>
          update.mutate({
            where: { id: router.query.id as string },
            data: {
              bookmarks: {
                [value ? "disconnect" : "connect"]: {
                  id: session.data?.user?.id,
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
export default ArtistLayout;
