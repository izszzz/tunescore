import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import type { Prisma } from "@prisma/client";

export interface UserListItemProps {
  data: Prisma.UserGetPayload<{
    include: {
      _count: { select: { followers: true; following: true } };
    };
  }>;
}
const UserListItem = ({ data }: UserListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({ pathname: "/users/[id]", query: { id: data.id } })
      }
    >
      <ListItemAvatar>
        <Avatar alt={data.name || ""} src={data.image || ""} />
      </ListItemAvatar>
      <ListItemButton>
        <ListItemText
          primary={
            <Typography variant="h6" noWrap>
              {data.name}
            </Typography>
          }
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              following : {data._count.following} / followers :{" "}
              {data._count.followers}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default UserListItem;
