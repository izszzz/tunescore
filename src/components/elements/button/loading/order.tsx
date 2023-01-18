import React from "react";

import PaidIcon from "@mui/icons-material/Paid";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import LoadingButton from "@mui/lab/LoadingButton";

const OrderLoadingButton = (props: Omit<LoadingButtonProps, "startIcon">) => {
  return (
    <LoadingButton {...props} startIcon={<PaidIcon />} disableElevation>
      注文する
    </LoadingButton>
  );
};

export default OrderLoadingButton;
