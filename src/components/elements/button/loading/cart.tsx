import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoadingButton from "@mui/lab/LoadingButton";
import type { ButtonProps } from "@mui/material/Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { getRouterId } from "../../../../helpers/router";
import { getCurrentUserId } from "../../../../helpers/user";
import { trpc } from "../../../../utils/trpc";

const CartLoadingButton = ({
  disabled,
  ...props
}: Omit<ButtonProps, "startIcon">) => {
  const { data: session } = useSession();
  const router = useRouter();
  const create = trpc.cart.createOneCart.useMutation();
  return (
    <LoadingButton
      {...props}
      startIcon={<ShoppingCartIcon />}
      disabled={disabled}
      variant={disabled ? "outlined" : "contained"}
      loading={create.isLoading}
      onClick={() =>
        create.mutate({
          data: {
            user: {
              connect: { id: getCurrentUserId(session) },
            },
            music: { connect: { id: getRouterId(router) } },
          },
        })
      }
      disableElevation
    >
      {disabled ? "カートに入っています" : "カートに入れる"}
    </LoadingButton>
  );
};

export default CartLoadingButton;
