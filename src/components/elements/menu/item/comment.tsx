import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import type { MenuItemProps } from "@mui/material/MenuItem";

import MenuListItem from ".";

const CommentMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<QuestionAnswer />}>
    {children}
  </MenuListItem>
);
export default CommentMenuListItem;
