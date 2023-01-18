import MuiListItem from "@mui/material/ListItem";
import type { ListItemProps as MuiListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { ListItemTextProps } from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import type { Route } from "nextjs-routes";
import Typography from "@mui/material/Typography";

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
        <ListItemText
          {...listItemTextProps}
          primary={
            <Typography variant="h6" mr={3} noWrap>
              {listItemTextProps.primary}
            </Typography>
          }
        />
        {children}
      </ListItemButton>
    </MuiListItem>
  );
};

export default ListItem;
