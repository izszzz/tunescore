import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";
import type { userListArgs } from "../../../../helpers/user";
import type { Prisma } from "@prisma/client";
import ListItem from ".";

export interface UserListItemProps {
  data: Prisma.UserGetPayload<typeof userListArgs>;
}
const UserListItem = ({ data }: UserListItemProps) => (
  <ListItem
    route={{
      pathname: "/users/[id]",
      query: { id: data.id },
    }}
    icon={<Avatar alt={data.name || ""} src={data.image || ""} />}
    listItemTextProps={{
      primary: (
        <Typography variant="h6" noWrap>
          {data.name}
        </Typography>
      ),
      secondary: (
        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          following : {data._count.following} / followers :{" "}
          {data._count.followers}
        </Typography>
      ),
    }}
  />
);

export default UserListItem;
