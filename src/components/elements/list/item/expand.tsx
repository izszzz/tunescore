import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import type { ListItemTextProps } from "@mui/material/ListItemText";
import ListItemText from "@mui/material/ListItemText";
import { useToggle } from "usehooks-ts";

interface ExpandListItemProps extends ListItemTextProps {
  open?: boolean;
}
const ExpandListItem = ({
  open = false,
  children,
  ...props
}: ExpandListItemProps) => {
  const [toggle, handleToggle] = useToggle(open);
  return (
    <>
      <ListItemButton onClick={handleToggle}>
        <ListItemText {...props} />
        {toggle ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={toggle} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export default ExpandListItem;
