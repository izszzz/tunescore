import Error from "@mui/icons-material/Error";
import MenuListItem from ".";
import type { MenuItemProps } from "@mui/material/MenuItem";

const BookmarkMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<Error />}>
    {children}
  </MenuListItem>
);
export default BookmarkMenuListItem;
