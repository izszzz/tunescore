import AppBar from "@mui/material/AppBar";
import type { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = ({ children, ...props }: Omit<AppBarProps, "color">) => (
  <AppBar {...props} color="default">
    <Toolbar>{children}</Toolbar>
  </AppBar>
);

export default Header;
