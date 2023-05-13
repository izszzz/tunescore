import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { GetServerSideProps, NextPage } from "next";
import router from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";

import ResourceListItem from "../components/elements/list/item/resource";
import ListsLayout from "../components/layouts/lists";
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
    currentUserId = getCurrentUserId(session),
    sum = data?.reduce((sum, data) => sum + (data.price || 0), 0);
  return (
    <DefaultSingleColumnLayout contained>
      <ListsLayout
        data={data}
        lists={{
          listItem: (props) => (
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
          ),
        }}
      />
      <Button
        disableElevation
        disabled={!isNonEmpty(data ?? [])}
        fullWidth
        onClick={() => router.push("/pay")}
        variant="contained"
      >
        {t("order")} : ${sum}
      </Button>
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await serverSideTranslations(ctx.locale ?? "", ["common"]),
});

export default Cart;
