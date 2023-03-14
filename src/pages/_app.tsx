// src/pages/_app.tsx
import { useEffect } from "react";

import NiceModal from "@ebay/nice-modal-react";
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps, AppType } from "next/app";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { SnackbarProvider } from "notistack";
import { useDarkMode } from "usehooks-ts";

import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ModalsProvider from "../providers/modals";
import CustomThemeProvider from "../providers/theme";
import { createEmotionCache } from "../utils/emotion";
import { trpc } from "../utils/trpc";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
const MyApp: AppType<MyAppProps & { session: Session | null }> = ({
  Component,
  pageProps: { session, emotionCache = clientSideEmotionCache, ...pageProps },
}) => {
  const queryClient = new QueryClient(),
    { isDarkMode } = useDarkMode();
  useEffect(() => {
    isDarkMode
      ? document.documentElement.setAttribute("data-color-mode", "dark")
      : document.documentElement.setAttribute("data-color-mode", "light");
  }, [isDarkMode]);

  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>tunescore</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <GoogleAnalytics trackPageViews />
          <DefaultSeo
            defaultTitle="tunescore"
            description="Music Score Web Site"
            openGraph={{
              type: "website",
              title: "tunescore",
              description: "Music Score Web Site",
              site_name: "tunescore",
              url: "https://tunescore.dev",
              images: [
                {
                  url: "https://tunescore.dev/images/dark/logo_1000x1000.png",
                  width: 1000,
                  height: 1000,
                  alt: "Og Image Alt",
                  type: "image/png",
                },
              ],
            }}
            twitter={{ site: "@hakei_prod", cardType: "summary" }}
          />
          <CustomThemeProvider>
            <CssBaseline />
            <SnackbarProvider maxSnack={3}>
              <NiceModal.Provider>
                <ModalsProvider>
                  <Component {...pageProps} />
                </ModalsProvider>
              </NiceModal.Provider>
            </SnackbarProvider>
          </CustomThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </CacheProvider>
  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
