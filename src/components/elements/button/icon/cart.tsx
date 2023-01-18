import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const CartIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <ShoppingCartIcon />
  </IconButton>
);
export default CartIconButton;
