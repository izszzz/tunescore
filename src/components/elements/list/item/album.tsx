import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import setLocale from "../../../../helpers/setLocale";
import ResourceIcon from "../../icon/resource";
import type { Prisma } from "@prisma/client";

export interface AlbumListItemProps {
  data: Prisma.AlbumGetPayload<{
    include: { band: true };
  }>;
}
const AlbumListItem = ({ data }: AlbumListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({
          pathname: "/albums/[id]",
          query: { id: data.id },
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="album" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" mr={3}>
              {setLocale(data.title, router)}
            </Typography>
          }
          secondary={
            data.band && (
              <Typography mr={1} variant="body2" color="text.subprimary">
                {`joined by ${setLocale(data.band.name, router)}`}
              </Typography>
            )
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AlbumListItem;
