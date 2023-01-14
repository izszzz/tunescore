import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { match } from "ts-pattern";
import CircularProgress from "@mui/material/CircularProgress";
import LocaleAutocomplete from "../autocomplete/locale";
import { useModal } from "../../../hooks/useModal";
import ThemeToggleButton from "../button/providers/toggle/theme";
import SearchAutocomplete from "../autocomplete/search";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import AvatarMenuManager from "../menu/avatar";
import NotificationsMenuManager from "../menu/notifications";
import PlusMenuManager from "../menu/plus";
import CartIconButton from "../button/icon/cart";
import Header from ".";

const DefaultHeader = () => {
  const session = useSession();
  const { handleOpen } = useModal();
  const router = useRouter();
  const search = trpc.search.music.useMutation();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
