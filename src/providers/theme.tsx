import React, { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";

interface CustomThemeProvider {
  children: React.ReactNode;
}
const CustomThemeProvider = ({ children }: CustomThemeProvider) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { isDarkMode } = useDarkMode();
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  return mounted ? (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ) : (
    <></>
  );
};

export default CustomThemeProvider;
