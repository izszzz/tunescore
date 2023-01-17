import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { trpc } from "../../../utils/trpc";
import { getCurrentUserId } from "../../../helpers/user";
import { getRouterId } from "../../../helpers/router";
import type { ButtonProps } from "@mui/material/Button";

const CartButton = ({ disabled, ...props }: Omit<ButtonProps, "startIcon">) => {
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

export default CartButton;
