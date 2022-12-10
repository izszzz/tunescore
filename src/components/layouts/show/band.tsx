import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { trpc } from "../../../utils/trpc";
import DefaultShowLayout, { DefaultShowLayoutProps } from "./default";
import setLocale from "../../../utils/setLocale";
import { DefaultTabsProps } from "../../elements/tabs/default";
import BookmarkToggleButton from "../../elements/button/toggle/bookmark";
import Box from "@mui/material/Box";
import { Prisma } from "@prisma/client";

export interface BandLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.BandGetPayload<null>;
  bookmarked: boolean;
  activeTab: "info" | "settings";
}

const BandLayout: React.FC<BandLayoutProps> = ({
  data,
  bookmarked,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const bookmarkCreate = trpc.useMutation(["band.bookmark.create"]);
  const bookmarkDestroy = trpc.useMutation(["band.bookmark.destroy"]);
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
  const handleUpdate = (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (value)
      bookmarkDestroy.mutate(
        { id: router.query.id as string },
        { onSuccess: () => setValue(false) }
      );
    else
      bookmarkCreate.mutate(
        { id: router.query.id as string },
        { onSuccess: () => setValue(true) }
      );
  };
  return (
    <DefaultShowLayout
      tabs={tabs}
      activeTab={activeTab}
      title={
        <Box display="flex" alignItems="center">
          <Typography variant="h5">{setLocale(data.name, router)}</Typography>
          <BookmarkToggleButton
            defaultValue={bookmarked}
            loading={bookmarkCreate.isLoading || bookmarkDestroy.isLoading}
            onClick={handleUpdate}
          />
        </Box>
      }
    >
      {children}
    </DefaultShowLayout>
  );
};

export default BandLayout;
