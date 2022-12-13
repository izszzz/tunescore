import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Prisma, PullStatus } from "@prisma/client";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LockIcon from "@mui/icons-material/Lock";
import ListItemIcon from "@mui/material/ListItemIcon";
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
          query: { id: router.query.id as string, pullId: data.id },
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
interface PullStatusIconProps {
  status: PullStatus;
}
const PullStatusIcon = ({ status }: PullStatusIconProps) => {
  if (status === "DRAFT") return <LockIcon color="success" />;
  if (status === "OPEN") return <TaskAltIcon color="success" />;
  if (status === "CLOSED") return <HighlightOffIcon color="error" />;
  if (status === "MERGED") return <TaskAltIcon color="disabled" />;
  return <>no status</>;
};

export default PullListItem;
