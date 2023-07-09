import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import type { userArgs } from "../../../../helpers/user";
import PullStatusIcon from "../../icon/pull/status";

import ListItem from ".";
export interface PullListItemProps {
  data: Prisma.PullGetPayload<{
    include: {
      user: typeof userArgs;
    };
  }>;
}
const PullListItem = ({ data }: PullListItemProps) => {
  const {
    query: { id },
  } = useRouter<"/musics/[id]">();
  return (
    <ListItem
      href={{
        pathname: "/musics/[id]/pulls/[pullId]",
        query: { id, pullId: data.id },
      }}
      icon={<PullStatusIcon status={data.status} />}
      listItemTextProps={{
        primary: data.title,
        secondary: (
          <Box alignItems="center" display="flex">
            <Typography color="text.subprimary" mr={1} variant="body2">
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

export default PullListItem;
