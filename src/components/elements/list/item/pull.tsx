import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PullStatusIcon from "../../icon/pull/status";
import { getRouterId } from "../../../../helpers/router";
import type { Prisma } from "@prisma/client";
import ListItem from ".";
export interface PullListItemProps {
  data: Prisma.PullGetPayload<{
    include: {
      user: true;
    };
  }>;
}
const PullListItem = ({ data }: PullListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      route={{
        pathname: "/musics/[id]/pulls/[pullId]",
        query: { id: getRouterId(router), pullId: data.id },
      }}
      icon={<PullStatusIcon status={data.status} />}
      listItemTextProps={{
        primary: (
          <Typography variant="h6" noWrap>
            {data.title}
          </Typography>
        ),
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

export default PullListItem;
