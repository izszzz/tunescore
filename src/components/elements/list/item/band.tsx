import React from "react";
import { Prisma } from "@prisma/client";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import setLocale from "../../../../helpers/setLocale";
import ResourceIcon from "../../icon/resource";
import { useRouter } from "next/router";
export interface BandListItemProps {
  data: Prisma.BandGetPayload<{
    include: {
      _count: {
        select: {
          artists: true;
          musics: true;
        };
      };
    };
  }>;
}

const BandListItem = ({ data }: BandListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({ pathname: "/bands/[id]", query: { id: data.id } })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="band" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Box component="span" display="flex" alignItems="center">
              <Typography component="span" variant="h6" mr={3}>
                {setLocale(data.name, router)}
              </Typography>
            </Box>
          }
          secondary={
            <Box component="span" display="flex" alignItems="center">
              <Typography
                component="span"
                mr={1}
                variant="body2"
                color="text.subprimary"
              >
                musics count albums count artists count
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};
export default BandListItem;
