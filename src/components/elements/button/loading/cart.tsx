import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

const CartLoadingButton = ({
  disabled,
  ...props
}: Omit<LoadingButtonProps, "startIcon">) => (
  <LoadingButton
    {...props}
    startIcon={<ShoppingCartIcon />}
    disabled={disabled}
    variant={disabled ? "outlined" : "contained"}
    disableElevation
  >
    {disabled ? "カートに入っています" : "カートに入れる"}
  </LoadingButton>
);

export default CartLoadingButton;
