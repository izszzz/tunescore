import AppBar from "@mui/material/AppBar";
import type { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export type HeaderProps = Omit<AppBarProps, "color">;
const Header = ({ children, sx, ...props }: HeaderProps) => (
  <AppBar
    {...props}
    color="default"
    sx={{ ...sx, zIndex: (theme) => theme.zIndex.drawer + 1 }}
  >
    <Toolbar>{children}</Toolbar>
  </AppBar>
);

export default Header;
