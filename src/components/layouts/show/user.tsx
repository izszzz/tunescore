import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";

import { followMutate } from "../../../helpers/follow";
import { isSelf } from "../../../helpers/user";
import type {
  UserShowArgsType,
  UserShowQueryType,
} from "../../../paths/users/[id]";
import { trpc } from "../../../utils/trpc";
import FlagIconButton from "../../elements/button/icon/flag";
import DefaultHeader from "../../elements/header/default";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import type { ShowLayoutProps } from ".";
import ShowLayout from "./index";

export interface UserLayoutProps extends Pick<ShowLayoutProps, "children"> {
  data: Prisma.UserGetPayload<UserShowArgsType>;
  query: UserShowQueryType;
  activeTab: "info" | "settings" | "bookmarks" | "repositories" | "";
}

const UserLayout: React.FC<UserLayoutProps> = ({
  data,
  query,
  activeTab,
  children,
}) => {
  const router = useRouter<"/users/[id]">(),
    queryClient = useQueryClient(),
    { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    { show } = useModal("report-dialog"),
    update = trpc.user.updateOneUser.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.user.findUniqueUser, query, "query"),
          data
        );
        enqueueSnackbar("user.update success");
      },
      onError: () => enqueueSnackbar("user.update error"),
    }),
    { id } = router.query,
    followed = isNonEmpty(data.followers);
  const tabs: DefaultTabsProps["tabs"] = [
    { label: "info", pathname: "/users/[id]" },
    { label: "bookmarks", pathname: "/users/[id]/bookmarks" },
    { label: "repositories", pathname: "/users/[id]/repositories" },
  ];
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
          {!isSelf(session, { user: { id } }) && (
            <>
              <FlagIconButton
                onClick={() => show({ unionType: "User", unionId: id })}
              />
              <LoadingButton
                loading={update.isLoading}
                variant={followed ? "outlined" : "contained"}
                onClick={() =>
                  update.mutate({
                    where: { id },
                    data: { followers: followMutate({ data, session }) },
                  })
                }
              >
                {followed ? "unfollow" : "follow"}
              </LoadingButton>
            </>
          )}
          <Button
            onClick={() =>
              router.push({ pathname: "/users/[id]/following", query: { id } })
            }
          >
            following:{data._count.following}
          </Button>
          <Button
            onClick={() =>
              router.push({ pathname: "/users/[id]/followers", query: { id } })
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
