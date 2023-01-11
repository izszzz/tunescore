import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { trpc } from "../../../utils/trpc";
import DefaultHeader from "../header/default";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import { followMutate } from "../../../helpers/follow";
import ShowLayout from "./index";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { Prisma } from "@prisma/client";
import type { ShowLayoutProps } from ".";

export interface UserLayoutProps extends Pick<ShowLayoutProps, "children"> {
  data: Prisma.UserGetPayload<{
    include: {
      _count: { select: { following: true; followers: true } };
      followers: true;
      accounts: true;
    };
  }>;
  activeTab: "info" | "settings" | "bookmarks" | "repositories" | "";
}

const UserLayout: React.FC<UserLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const id = getRouterId(router);
  const userId = getCurrentUserId(session);
  const update = trpc.useMutation("user.updateOneUser");
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/users/[id]",
          query: { id },
        },
      },
      {
        label: "bookmarks",
        href: {
          pathname: "/users/[id]/bookmarks",
          query: { id },
        },
      },
      {
        label: "repositories",
        href: {
          pathname: "/users/[id]/repositories",
          query: { id },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/users/[id]/settings",
          query: { id },
        },
      },
    ],
    [id]
  );
  return (
    <ShowLayout
      tabs={tabs}
      activeTab={activeTab}
      header={<DefaultHeader />}
      title={
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              sx={{ height: "70px", width: "70px" }}
              src={data.image || ""}
            />
            <Typography variant="h5">{data.name}</Typography>
          </Box>
          {id !== userId && (
            <LoadingButton
              loading={update.isLoading}
              variant={data.followers.length ? "outlined" : "contained"}
              onClick={() =>
                update.mutate({
                  where: { id },
                  data: {
                    followers: followMutate({ data, session }),
                  },
                })
              }
            >
              {data.followers.length ? "unfollow" : "follow"}
            </LoadingButton>
          )}
          <Button
            onClick={() =>
              router.push({
                pathname: "/users/[id]/following",
                query: { id },
              })
            }
          >
            following:{data._count.following}
          </Button>
          <Button
            onClick={() =>
              router.push({
                pathname: "/users/[id]/followers",
                query: { id },
              })
            }
          >
            followers:{data._count.followers}
          </Button>
        </>
      }
    >
      {children}
    </ShowLayout>
  );
};

export default UserLayout;
