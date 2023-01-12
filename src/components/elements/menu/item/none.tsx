import Error from "@mui/icons-material/Error";
import MenuListItem from ".";
import type { MenuItemProps } from "@mui/material/MenuItem";

const NoneMenuListItem = (props: MenuItemProps) => (
  <MenuListItem {...props} icon={<Error />}>
    No Data
  </MenuListItem>
);
export default NoneMenuListItem;
