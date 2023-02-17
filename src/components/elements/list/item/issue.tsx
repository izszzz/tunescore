import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import { getRouterId } from "../../../../helpers/router";
import type { userArgs } from "../../../../helpers/user";
import StatusIcon from "../../icon/status";

import ListItem from ".";

export interface IssueListItemProps {
  data: Prisma.IssueGetPayload<{
    include: {
      user: typeof userArgs;
    };
  }>;
}
const IssueListItem = ({ data }: IssueListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      route={{
        pathname: "/musics/[id]/issues/[issueId]",
        query: { id: getRouterId(router), issueId: data.id },
      }}
      icon={<StatusIcon resource={data.status} />}
      listItemTextProps={{
        primary: data.title,
        secondary: (
          <Box display="flex" alignItems="center">
            <Typography mr={1} variant="body2" color="text.subprimary">
              created by {data.user.name}
            </Typography>
            <Avatar
              src={data.user.image || ""}
              sx={{ width: 24, height: 24 }}
            />
          </Box>
        ),
      }}
    />
  );
};

export default IssueListItem;
