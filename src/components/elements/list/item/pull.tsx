import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import PullStatusIcon from "../../icon/pull/status";
import { getRouterId } from "../../../../helpers/router";
import type { Prisma } from "@prisma/client";
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
      disablePadding
      onClick={() =>
        router.push({
          pathname: "/musics/[id]/pulls/[pullId]",
          query: { id: getRouterId(router), pullId: data.id },
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <PullStatusIcon status={data.status} />
        </ListItemIcon>
        <ListItemText
          primary={<Typography variant="h6">{data.title}</Typography>}
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

export default PullListItem;
