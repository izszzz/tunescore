import React, { useEffect, useState } from "react";

import { useModal } from "@ebay/nice-modal-react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { ResourceUnionType } from "@prisma/client";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";

import { searchMutate } from "../../../helpers";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import SearchAutocomplete from "../autocomplete/search";
import ResourceToggleGroupButton from "../button/group/toggle/resource";
import CartIconButton from "../button/icon/cart";
import SettingsIconButton from "../button/icon/settings";
import AvatarMenuManager from "../menu/avatar";
import NotificationsMenuManager from "../menu/notifications";
import PlusMenuManager from "../menu/plus";

import Header from ".";

const DefaultHeader = () => {
  const [type, setType] = useState<ResourceUnionType[]>(["Music"]),
    session = useSession(),
    router = useRouter(),
    { show } = useModal("auth-dialog"),
    { show: showSettings } = useModal("settings-dialog"),
    search = trpc.search.music.useMutation(),
    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter")
        router.replace({
          pathname: "/search",
          query: {
            type: type,
            page: String(1),
            q: String((e.target as HTMLInputElement).value),
          },
        });
    },
    handleChange = (
      _e: React.MouseEvent<HTMLElement, MouseEvent>,
      value: ResourceUnionType[]
    ) => setType(value);
  useEffect(() => {
    if (router.query.type)
      setType(
        Array.isArray(router.query.type)
          ? (router.query.type as ResourceUnionType[])
          : [router.query.type as ResourceUnionType]
      );
  }, [router.query.type]);
  return (
    <>
      <Header>
        <Typography
          variant="h4"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          tunescore
        </Typography>
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid item xs={1} />
          <Grid item xs={5} display="flex" alignItems="center">
            <ResourceToggleGroupButton
              size="small"
              value={type}
              onChange={handleChange}
            />
            <SearchAutocomplete
              size="small"
              options={search.data || []}
              loading={search.isLoading}
              getOptionLabel={({ resource: { name } }) =>
                setLocale(name, router)
              }
              onInputChange={(_e, v) => search.mutate(searchMutate(router, v))}
              textFieldProps={{ onKeyDown: handleKeyDown }}
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
              <PlusMenuManager />
              <SettingsIconButton onClick={() => showSettings()} />
              {match(session)
                .with({ status: "loading" }, () => <CircularProgress />)
                .with({ status: "unauthenticated" }, () => (
                  <Button
                    variant="contained"
                    onClick={() => show()}
                    disableElevation
                  >
                    SignIn
                  </Button>
                ))
                .with({ status: "authenticated" }, () => (
                  <>
                    <CartIconButton onClick={() => router.push("/cart")} />
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
