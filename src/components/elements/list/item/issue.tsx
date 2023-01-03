import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import type { Prisma } from "@prisma/client";
import { getRouterId } from "../../../../helpers/router";
import ListItemIcon from "@mui/material/ListItemIcon";
import StatusIcon from "../../icon/status";

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
      disablePadding
      onClick={() =>
        router.push({
          pathname: "/musics/[id]/issues/[issueId]",
          query: { id: getRouterId(router), issueId: data.id },
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <StatusIcon resource={data.status} />
        </ListItemIcon>
        <ListItemText
          primary={data.title}
          secondary={
            <Box display="flex" alignItems="center">
              <Typography mr={1} variant="body2" color="text.subprimary">
                created by {data.user.name}
              </Typography>
              <Avatar
                src={data.user.image || ""}
                sx={{ width: 24, height: 24 }}
              />
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default IssueListItem;
