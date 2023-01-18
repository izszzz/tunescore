import Error from "@mui/icons-material/Error";
import type { MenuItemProps } from "@mui/material/MenuItem";

import MenuListItem from ".";

const NoneMenuListItem = (props: MenuItemProps) => (
  <MenuListItem {...props} icon={<Error />}>
    No Data
  </MenuListItem>
);
export default NoneMenuListItem;
