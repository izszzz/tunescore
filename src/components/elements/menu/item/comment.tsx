import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import MenuListItem from ".";
import type { MenuItemProps } from "@mui/material/MenuItem";

const CommentMenuListItem = ({ children, ...props }: MenuItemProps) => (
  <MenuListItem {...props} icon={<QuestionAnswer />}>
    {children}
  </MenuListItem>
);
export default CommentMenuListItem;
