import React from "react";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";

import type { userArgs } from "../../../../helpers/user";

import ListItem from ".";

export interface UserListItemProps {
  data: Prisma.UserGetPayload<typeof userArgs>;
}
const UserListItem = ({ data }: UserListItemProps) => (
  <ListItem
    icon={<Avatar alt={data.name || ""} src={data.image || ""} />}
    listItemTextProps={{
      primary: data.name,
      secondary: (
        <Typography
          color="text.primary"
          component="span"
          sx={{ display: "inline" }}
          variant="body2"
        >
          following : {data._count.following} / followers :{" "}
          {data._count.followers}
        </Typography>
      ),
    }}
    href={{
      pathname: "/users/[id]",
      query: { id: data.id },
    }}
  />
);

export default UserListItem;
