import React, { useEffect, useState } from "react";

import { useModal } from "@ebay/nice-modal-react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { ResourceUnionType } from "@prisma/client";
import Link from "next/link";
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

import type { HeaderProps } from ".";
import Header from ".";

const DefaultHeader = (props: HeaderProps) => {
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
            type,
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
      <Header {...props}>
        <Typography
          component={Link}
          href="/"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
          variant="h4"
        >
          tunescoreβ
        </Typography>
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid item xs={1} />
          <Grid alignItems="center" display="flex" item xs={5}>
            <ResourceToggleGroupButton
              onChange={handleChange}
              size="small"
              value={type}
            />
            <SearchAutocomplete
              fullWidth
              getOptionLabel={({ resource: { name } }) =>
                setLocale(name, router)
              }
              loading={search.isLoading}
              onInputChange={(_e, v) => search.mutate(searchMutate(router, v))}
              options={search.data || []}
              size="small"
              textFieldProps={{ onKeyDown: handleKeyDown }}
            />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="right"
              spacing={2}
            >
              <PlusMenuManager />
              <SettingsIconButton onClick={() => showSettings()} />
              {match(session)
                .with({ status: "loading" }, () => (
                  <Skeleton height={40} variant="circular" width={40} />
                ))
                .with({ status: "unauthenticated" }, () => (
                  <Button
                    disableElevation
                    onClick={() => show()}
                    variant="contained"
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
