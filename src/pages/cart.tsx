import Typography from "@mui/material/Typography";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import MusicLists from "../components/elements/list/music";
import type { NextPage } from "next";
import LoadingButton from "@mui/lab/LoadingButton";

const Cart: NextPage = () => {
  const { data } = trpc.currentUser.findManyCart.useQuery();
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Cart</Typography>
      <MusicLists data={data} />
      合計: {data.reduce((sum, data) => sum + (data.price || 0), 0)}
      <LoadingButton variant="contained" disableElevation fullWidth>
        {" "}
        注文する
      </LoadingButton>
    </DefaultSingleColumnLayout>
  );
};

export default Cart;
