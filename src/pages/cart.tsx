import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";
import router from "next/router";

import MusicLists from "../components/elements/list/music";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { redirectToSignIn } from "../helpers/user";
import { trpc } from "../utils/trpc";

const Cart: NextPage = () => {
  const { data } = trpc.currentUser.findManyCart.useQuery();
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Cart</Typography>
      <MusicLists data={data} />
      合計: {data.reduce((sum, data) => sum + (data.price || 0), 0)}
      <Button
        onClick={() => router.push("/pay")}
        variant="contained"
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
