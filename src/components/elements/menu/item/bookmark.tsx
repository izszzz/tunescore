import Bookmark from "@mui/icons-material/Bookmark";
import MenuListItem from ".";
import type { MenuItemProps } from "@mui/material/MenuItem";

const BookmarkMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<Bookmark />}>
    {children}
  </MenuListItem>
);
export default BookmarkMenuListItem;
