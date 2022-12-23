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
import Header from ".";

const DefaultHeader = () => {
  const { data: session } = useSession();
  const { handleOpen } = useModal();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSignOut = () => {
    signOut();
    handleClose();
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
          <Grid item xs={10} />
          <Grid item xs={1}>
            <LocaleAutocomplete />
          </Grid>
          <Grid item xs={1} display="flex" alignItems="stretch">
            {session ? (
              <>
                <IconButton onClick={handleClick}>
                  <Avatar alt="Remy Sharp" src={session.user?.image || ""} />
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
                      if (!session?.user) return;
                      router.push({
                        pathname: `/users/[id]`,
                        query: { id: session.user.id },
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
