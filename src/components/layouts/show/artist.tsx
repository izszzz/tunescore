import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { trpc } from "../../../utils/trpc";
import { DefaultTabsProps } from "../../elements/tabs/default";
import setLocale from "../../../utils/setLocale";
import DefaultShowLayout, { DefaultShowLayoutProps } from "./default";
import { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";
export interface ArtistLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.ArtistGetPayload<null>;
  activeTab: "info" | "settings";
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const bookmarked = trpc.useQuery([
    "bookmarked.artist",
    { id: router.query.id as string },
  ]);
  const bookmarkCreate = trpc.useMutation(["artist.updateOneArtist"]);
  const bookmarkDestroy = trpc.useMutation(["artist.updateOneArtist"]);
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
export default ArtistLayout;
