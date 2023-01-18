import Bookmark from "@mui/icons-material/Bookmark";
import type { MenuItemProps } from "@mui/material/MenuItem";

import MenuListItem from ".";

const BookmarkMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<Bookmark />}>
    {children}
  </MenuListItem>
);
export default BookmarkMenuListItem;
