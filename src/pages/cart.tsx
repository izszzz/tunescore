import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import router from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";

import Lists from "../components/elements/list";
import ResourceListItem from "../components/elements/list/item/resource";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { getCurrentUserId } from "../helpers/user";
import { trpc } from "../utils/trpc";

const Cart: NextPage = () => {
  const { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    { t } = useTranslation(),
    queryClient = useQueryClient(),
    { data } = trpc.currentUser.findManyCart.useQuery(),
    destroy = trpc.cart.deleteOneCart.useMutation(),
    currentUserId = getCurrentUserId(session);
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Cart</Typography>
      <Lists
        data={data}
        listItem={(props) => (
          <ResourceListItem
            data={{ ...props.resource, music: props }}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={(e) => {
                  if (currentUserId)
                    destroy.mutate(
                      {
                        where: {
                          userId_musicId: {
                            userId: currentUserId,
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
      {data.reduce((sum, data) => sum + (data.price || 0), 0)}
      <Button
        disableElevation
        disabled={!isNonEmpty(data)}
        fullWidth
        onClick={() => router.push("/pay")}
        variant="contained"
      >
        {t("order")}
      </Button>
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await serverSideTranslations(ctx.locale ?? "", ["common"]),
});

export default Cart;
