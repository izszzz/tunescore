import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

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
          query: { id: router.query.id as string, issueId: data.id },
        })
      }
    >
      <ListItemButton>
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
