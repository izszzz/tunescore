import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { getRouterId } from "../../../../helpers/router";
import StatusIcon from "../../icon/status";
import type { Prisma } from "@prisma/client";
import ListItem from ".";

export interface IssueListItemProps {
  data: Prisma.IssueGetPayload<{
    include: {
      user: true;
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
