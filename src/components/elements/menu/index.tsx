import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import type { MenuProps } from "@mui/material/Menu";

interface MenuManagerProps {
  button: (
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void
  ) => React.ReactNode;
  children: (handleClose: () => void) => React.ReactNode;
  menuProps?: Omit<MenuProps, "anchorEl" | "open">;
}
const MenuManager = ({
  menuProps = {},
  button,
  children,
}: MenuManagerProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      {button(handleOpen)}
      <Menu
        {...menuProps}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        {children(handleClose)}
      </Menu>
    </>
  );
};

export default MenuManager;
