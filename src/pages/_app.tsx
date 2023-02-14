// src/pages/_app.tsx
import { useEffect } from "react";

import NiceModal from "@ebay/nice-modal-react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppType } from "next/app";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";
import { useDarkMode } from "usehooks-ts";

import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ModalsProvider from "../providers/modals";
import { trpc } from "../utils/trpc";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const queryClient = new QueryClient();
  const { isDarkMode } = useDarkMode();
  const theme = createTheme({
    palette: { mode: isDarkMode ? "dark" : "light" },
  });
  useEffect(() => {
    isDarkMode
      ? document.documentElement.setAttribute("data-color-mode", "dark")
      : document.documentElement.setAttribute("data-color-mode", "light");
  }, [isDarkMode]);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <SessionProvider session={session}>
            <NiceModal.Provider>
              <QueryClientProvider client={queryClient}>
                <Head>
                  <title>tunescore</title>
                </Head>
                <CssBaseline />
                <ModalsProvider>
                  <Component {...pageProps} />
                </ModalsProvider>
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </NiceModal.Provider>
          </SessionProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
