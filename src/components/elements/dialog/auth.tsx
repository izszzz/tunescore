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
import type { ClientSafeProvider } from "next-auth/react";

const AuthDialog = () => {
  const { open, handleClose } = useModal();
  const [providers, setProviders] = useState<ClientSafeProvider[]>([]);
  useEffect(() => {
    (async () => {
      const providers = await getProviders();
      if (providers) setProviders(Object.values(providers));
    })();
  }, []);
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
