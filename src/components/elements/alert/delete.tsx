import React from "react";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface DeleteAlertProps {
  loadingButtonProps: LoadingButtonProps;
}
const DeleteAlert = ({ loadingButtonProps }: DeleteAlertProps) => (
  <Alert
    variant="outlined"
    severity="error"
    action={
      <LoadingButton
        {...loadingButtonProps}
        type="button"
        variant="contained"
        color="error"
        disableElevation
      >
        Delete
      </LoadingButton>
    }
  >
    This is a warning alert
  </Alert>
);

export default DeleteAlert;
