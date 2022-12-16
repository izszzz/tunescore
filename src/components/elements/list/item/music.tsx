import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import setLocale from "../../../../utils/setLocale";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import ResourceIcon from "../../icon/resource";
import musicOwner from "../../../../utils/musicOwner";

export interface MusicListItemProps {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      composers: true;
      lyrists: true;
      band: true;
      artists: true;
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
          secondary={<Owner data={data} />}
        />
      </ListItemButton>
    </ListItem>
  );
};

const Owner = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  const { type, owner } = musicOwner(data, router);
  if (type === "none" || owner === null) return <>no info</>;
  return (
    <Box component="span" display="flex" alignItems="center">
      <Typography
        mr={1}
        variant="body2"
        color="text.subprimary"
        component="span"
      >
        {owner.name}
      </Typography>
      <ResourceIcon resource={type} />
    </Box>
  );
};

export default MusicListItem;