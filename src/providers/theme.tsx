import type { PropsWithChildren } from "react";
import React, { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false),
    { isDarkMode } = useDarkMode(),
    theme = createTheme({
      palette: { mode: isDarkMode ? "dark" : "light" },
    });

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ) : null;
};

export default CustomThemeProvider;
