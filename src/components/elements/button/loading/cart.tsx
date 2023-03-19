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
    disableElevation
    disabled={disabled}
    startIcon={<ShoppingCartIcon />}
    variant={disabled ? "outlined" : "contained"}
  >
    {disabled ? "カートに入っています" : "カートに入れる"}
  </LoadingButton>
);

export default CartLoadingButton;
