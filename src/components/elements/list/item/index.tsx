import MuiListItem from "@mui/material/ListItem";
import type { ListItemProps as MuiListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { ListItemTextProps } from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import type { Route } from "nextjs-routes";

interface ListItemProps extends MuiListItemProps {
  icon: React.ReactNode;
  listItemTextProps: ListItemTextProps;
  route: Route;
}

const ListItem = ({
  icon,
  route,
  listItemTextProps,
  children,
  ...props
}: ListItemProps) => {
  const router = useRouter();
  return (
    <MuiListItem {...props} disablePadding onClick={() => router.push(route)}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText {...listItemTextProps} />
        {children}
      </ListItemButton>
    </MuiListItem>
  );
};

export default ListItem;
