// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthDialog from "../components/elements/dialog/auth";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { trpc } from "../utils/trpc";
import type { Session } from "next-auth";
import type { AppType } from "next/app";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const queryClient = new QueryClient();
  const { isDarkMode } = useDarkMode();
  const theme = createTheme({
    palette: { mode: isDarkMode ? "dark" : "light" },
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
              <CssBaseline />
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
              <AuthDialog />
            </QueryClientProvider>
          </SessionProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default trpc.withTRPC(MyApp);
