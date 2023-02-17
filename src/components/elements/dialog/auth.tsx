import React from "react";

import { create, useModal } from "@ebay/nice-modal-react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import ProviderButtons from "../button/providers";

const AuthDialog = create(() => {
  const { visible, hide } = useModal();
  return (
    <Dialog open={visible} onClose={hide}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogActions>
        <ProviderButtons />
      </DialogActions>
    </Dialog>
  );
});

export default AuthDialog;
