import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import type { AppBarProps } from "@mui/material/AppBar";

const Header = ({ children, ...props }: AppBarProps) => {
  return (
    <AppBar {...props} color="default">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Header;
