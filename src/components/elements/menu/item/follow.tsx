import PersonAdd from "@mui/icons-material/PersonAdd";
import MenuListItem from ".";
import type { MenuItemProps } from "@mui/material/MenuItem";

const FollowMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<PersonAdd />}>
    {children}
  </MenuListItem>
);
export default FollowMenuListItem;
