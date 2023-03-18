import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";

interface DeleteAlertProps {
  loadingButtonProps: LoadingButtonProps;
}
const DeleteAlert = ({ loadingButtonProps }: DeleteAlertProps) => (
  <Alert
    action={
      <LoadingButton
        {...loadingButtonProps}
        color="error"
        disableElevation
        type="button"
        variant="contained"
      >
        Delete
      </LoadingButton>
    }
    severity="error"
    variant="outlined"
  >
    This is a warning alert
  </Alert>
);

export default DeleteAlert;
