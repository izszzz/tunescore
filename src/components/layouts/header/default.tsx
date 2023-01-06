import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import LocaleAutocomplete from "../../elements/autocomplete/locale";
import { useModal } from "../../../hooks/useModal";
import ThemeToggleButton from "../../elements/button/toggle/theme";
import SearchAutocomplete from "../../elements/autocomplete/search";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import Header from ".";

const DefaultHeader = () => {
  const session = useSession();
  const { handleOpen } = useModal();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const search = trpc.useMutation(["search.music"]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSignOut = () => {
    signOut();
    handleClose();
  };
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
          <Grid item xs={1} display="flex" alignItems="center">
            <LocaleAutocomplete />
          </Grid>
          <Grid item xs={1} display="flex" alignItems="center">
            <ThemeToggleButton />
          </Grid>
          <Grid item xs={1} display="flex" alignItems="stretch">
            {session ? (
              <>
                <IconButton onClick={handleClick}>
                  <Avatar
                    alt="Remy Sharp"
                    src={session.data?.user?.image || ""}
                  />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      if (!session.data?.user) return;
                      router.push({
                        pathname: `/users/[id]`,
                        query: { id: session.data?.user?.id },
                      });
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button variant="contained" onClick={handleOpen} disableElevation>
                SignIn
              </Button>
            )}
          </Grid>
        </Grid>
      </Header>
      <Toolbar />
    </>
  );
};

export default DefaultHeader;
