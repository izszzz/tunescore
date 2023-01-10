import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { getProviders } from "next-auth/react";
import { match } from "ts-pattern";
import Stack from "@mui/material/Stack";
import { useModal } from "../../../hooks/useModal";
import GoogleButton from "../button/providers/google";
import SpotifyButton from "../button/providers/spotify";

const AuthDialog = () => {
  const { open, handleClose } = useModal();
  const [providers, setProviders] =
    useState<Awaited<ReturnType<typeof getProviders>>>();
  useEffect(() => {
    (async () => {
      setProviders(await getProviders());
    })();
  }, []);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogActions>
        <Stack spacing={2}>
          {providers &&
            Object.values(providers).map((provider) =>
              match(provider)
                .with({ name: "Google" }, () => (
                  <GoogleButton provider={provider} />
                ))
                .with({ name: "Spotify" }, () => (
                  <SpotifyButton provider={provider} />
                ))
                .otherwise(() => <></>)
            )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
