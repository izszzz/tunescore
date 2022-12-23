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

export interface ArtistListItemProps {
  data: Prisma.ArtistGetPayload<{
    include: { bands: true };
  }>;
}
const ArtistListItem = ({ data }: ArtistListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({
          pathname: "/artists/[id]",
          query: { id: data.id },
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="artist" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" mr={3}>
              {setLocale(data.name, router)}
            </Typography>
          }
          secondary={
            data.bands[0] && (
              <Typography mr={1} variant="body2" color="text.subprimary">
                {`joined by ${setLocale(data.bands[0].name, router)}`}
              </Typography>
            )
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ArtistListItem;
