import MuiListItem from "@mui/material/ListItem";
import type { ListItemProps as MuiListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { ListItemTextProps } from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import type { Route } from "nextjs-routes";

import { NextLinkComposed } from "../../link";

interface ListItemProps extends MuiListItemProps {
  icon: React.ReactNode;
  listItemTextProps: ListItemTextProps;
  to?: Route;
}

const ListItem = ({
  icon,
  to,
  listItemTextProps,
  children,
  ...props
}: ListItemProps) => (
  <MuiListItem {...props} disablePadding divider>
    <ListItemButton {...(to ? { to, component: NextLinkComposed } : {})}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        {...listItemTextProps}
        primary={
          <Typography mr={3} noWrap variant="h6">
            {listItemTextProps.primary}
          </Typography>
        }
      />
      {children}
    </ListItemButton>
  </MuiListItem>
);

export default ListItem;
