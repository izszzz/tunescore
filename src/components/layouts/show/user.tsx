import React, { useMemo } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { followMutate } from "../../../helpers/follow";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import type { UserShowGetPayload } from "../../../paths/users/[id]";
import { trpc } from "../../../utils/trpc";
import DefaultHeader from "../../elements/header/default";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import type { ShowLayoutProps } from ".";
import ShowLayout from "./index";


export interface UserLayoutProps extends Pick<ShowLayoutProps, "children"> {
  data: UserShowGetPayload;
  activeTab: "info" | "settings" | "bookmarks" | "repositories" | "";
}

const UserLayout: React.FC<UserLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const id = getRouterId(router);
  const userId = getCurrentUserId(session);
  const update = trpc.user.updateOneUser.useMutation();
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
