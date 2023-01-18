import PersonAdd from "@mui/icons-material/PersonAdd";
import type { MenuItemProps } from "@mui/material/MenuItem";

import MenuListItem from ".";

const FollowMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<PersonAdd />}>
    {children}
  </MenuListItem>
);
export default FollowMenuListItem;
