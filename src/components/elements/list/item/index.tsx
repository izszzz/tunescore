import MuiListItem from "@mui/material/ListItem";
import type { ListItemProps as MuiListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { ListItemTextProps } from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { Route } from "nextjs-routes";

interface ListItemProps extends MuiListItemProps {
  icon: React.ReactNode;
  listItemTextProps: ListItemTextProps;
  href?: Route;
}

const ListItem = ({
  icon,
  href: to,
  listItemTextProps,
  children,
  ...props
}: ListItemProps) => (
  <MuiListItem {...props} disablePadding divider>
    <ListItemButton {...(to ? ({component: Link, href: to}):({}))} >
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
