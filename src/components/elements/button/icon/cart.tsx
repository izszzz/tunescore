import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { IconButtonProps } from "@mui/material/IconButton";

const CartIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <ShoppingCartIcon />
  </IconButton>
);
export default CartIconButton;
