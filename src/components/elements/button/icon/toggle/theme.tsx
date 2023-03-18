import React from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";

const ThemeToggleButton = () => {
  const theme = useTheme();
  const { toggle } = useDarkMode();
  const handleClick = () => toggle();

  return (
    <IconButton onClick={handleClick} sx={{ ml: 1 }}>
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
