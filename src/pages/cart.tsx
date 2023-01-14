import Typography from "@mui/material/Typography";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import MusicLists from "../components/elements/list/music";
import type { NextPage } from "next";

const Cart: NextPage = () => {
  const { data } = trpc.currentUser.findManyCart.useQuery();
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Cart</Typography>
      <MusicLists data={data} />
    </DefaultSingleColumnLayout>
  );
};

export default Cart;
