import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import router from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";

import Lists from "../components/elements/list";
import MusicListItem from "../components/elements/list/item/music";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { redirectToSignIn } from "../helpers/user";
import { trpc } from "../utils/trpc";

const Cart: NextPage = () => {
  const { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    { data } = trpc.currentUser.findManyCart.useQuery(),
    queryClient = useQueryClient(),
    destroy = trpc.cart.deleteOneCart.useMutation();
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Cart</Typography>
      <Lists
        data={data}
        listItem={(props) => (
          <MusicListItem
            data={props}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={(e) => {
                  if (session?.user?.id)
                    destroy.mutate(
                      {
                        where: {
                          userId_musicId: {
                            userId: session.user.id,
                            musicId: props.id,
                          },
                        },
                      },
                      {
                        onSuccess: () => {
                          queryClient.setQueryData<typeof data>(
                            getQueryKey(
                              trpc.currentUser.findManyCart,
                              undefined,
                              "query"
                            ),
                            (prev) => prev?.filter((p) => p.id !== props.id)
                          );
                          enqueueSnackbar("music.update success");
                        },
                      }
                    );
                  e.stopPropagation();
                }}
              >
                <DeleteOutline color="error" />
              </IconButton>
            }
          />
        )}
      />
      合計: {data.reduce((sum, data) => sum + (data.price || 0), 0)}
      <Button
        onClick={() => router.push("/pay")}
        variant="contained"
        disabled={!isNonEmpty(data)}
        disableElevation
        fullWidth
      >
        注文する
      </Button>
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};
export default Cart;
