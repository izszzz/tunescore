import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useModal } from "../../../hooks/useModal";
import ProviderButtons from "../button/providers";

const AuthDialog = (): JSX.Element => {
  const { open, handleClose } = useModal();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogActions>
        <ProviderButtons />
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
