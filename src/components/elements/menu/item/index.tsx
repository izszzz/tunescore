import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import type { MenuItemProps } from "@mui/material/MenuItem";

export interface MenuListItemProps extends MenuItemProps {
  icon: React.ReactNode;
}
const MenuListItem = ({ icon, children, ...props }: MenuListItemProps) => (
  <MenuItem {...props}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText>{children}</ListItemText>
  </MenuItem>
);
export default MenuListItem;
