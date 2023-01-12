import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { match } from "ts-pattern";
import Stack from "@mui/material/Stack";
import { useModal } from "../../../hooks/useModal";
import GoogleButton from "../button/providers/google";
import SpotifyButton from "../button/providers/spotify";
import { useProviders } from "../../../hooks/useProvider";

const AuthDialog = () => {
  const { open, handleClose } = useModal();
  const providers = useProviders();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogActions>
        <Stack spacing={2}>
          {providers.map((provider) =>
            match(provider)
              .with({ id: "google" }, () => (
                <GoogleButton key="google" provider={provider} />
              ))
              .with({ id: "spotify" }, () => (
                <SpotifyButton key="spotify" provider={provider} />
              ))
              .otherwise(() => <></>)
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
