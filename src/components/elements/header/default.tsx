import React from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";

import setLocale from "../../../helpers/locale";
import { useModal } from "../../../hooks/useModal";
import { trpc } from "../../../utils/trpc";
import LocaleAutocomplete from "../autocomplete/locale";
import SearchAutocomplete from "../autocomplete/search";
import CartIconButton from "../button/icon/cart";
import ThemeToggleButton from "../button/icon/toggle/theme";
import AvatarMenuManager from "../menu/avatar";
import NotificationsMenuManager from "../menu/notifications";
import PlusMenuManager from "../menu/plus";

import Header from ".";

const DefaultHeader = () => {
  const session = useSession(),
    { handleOpen } = useModal(),
    router = useRouter(),
    search = trpc.search.music.useMutation(),
    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter")
        router.replace({
          pathname: "/search",
          query: {
            type: "music",
            page: String(1),
            q: String((e.target as HTMLInputElement).value),
          },
        });
    };
  return (
    <>
      <Header>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <a>tunescore</a>
          </Link>
        </Typography>
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid item xs={1} />
          <Grid item xs={5} display="flex" alignItems="center">
            <SearchAutocomplete
              size="small"
              options={search.data || []}
              loading={search.isLoading}
              getOptionLabel={(option) => setLocale(option.title, router)}
              onInputChange={(_e, inputValue) =>
                search.mutate({
                  where: {
                    title: {
                      is: {
                        [router.locale as string]: { contains: inputValue },
                      },
                    },
                  },
                  take: 10,
                })
              }
              textFieldProps={{
                onKeyDown: handleKeyDown,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="right"
            >
              <LocaleAutocomplete />
              <ThemeToggleButton />
              {match(session)
                .with({ status: "loading" }, () => <CircularProgress />)
                .with({ status: "unauthenticated" }, () => (
                  <Button
                    variant="contained"
                    onClick={handleOpen}
                    disableElevation
                  >
                    SignIn
                  </Button>
                ))
                .with({ status: "authenticated" }, () => (
                  <>
                    <CartIconButton onClick={() => router.push("/cart")} />
                    <PlusMenuManager />
                    <NotificationsMenuManager />
                    <AvatarMenuManager />
                  </>
                ))
                .exhaustive()}
            </Stack>
          </Grid>
        </Grid>
      </Header>
      <Toolbar />
    </>
  );
};

export default DefaultHeader;
