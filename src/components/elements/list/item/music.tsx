import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import setLocale from "../../../../utils/setLocale";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import ResourceIcon from "../../icon/resource";

export interface MusicListItemProps {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      composers: true;
      lyrists: true;
      band: true;
    };
  }>;
}
const MusicListItem = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="music" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Box component="span" display="flex" alignItems="center">
              <Typography variant="h6" mr={3}>
                {setLocale(data.title, router)}
              </Typography>
              <Chip component="span" label={data.type} size="small" />
            </Box>
          }
          secondary={
            <Box component="span" display="flex" alignItems="center">
              <Typography
                mr={1}
                variant="body2"
                color="text.subprimary"
                component="span"
              >
                {`created by ${data.user?.name}`}
              </Typography>
              <Avatar
                component="span"
                src={data.user?.image || ""}
                sx={{ width: 24, height: 24 }}
              />
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MusicListItem;
