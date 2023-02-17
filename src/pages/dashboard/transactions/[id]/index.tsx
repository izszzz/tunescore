import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import MusicListItem from "../../../../components/elements/list/item/music";
import DashboardLayout from "../../../../components/layouts/dashboard";
import setLocale from "../../../../helpers/locale";
import { getRouterId } from "../../../../helpers/router";
import { trpc } from "../../../../utils/trpc";

const Transaction: NextPage = () => {
  const router = useRouter(),
    { data } = trpc.currentUser.findUniqueTransaction.useQuery(
      getRouterId(router)
    ),
    { data: stripeData } = trpc.stripe.paymentIntent.useQuery(
      data?.stripePaymentIntentId
    );
  console.log(stripeData);
  if (!data) return <> loading</>;
  return (
    <DashboardLayout active="transactions">
      <Typography variant="h3">{data.type}</Typography>

      <Typography variant="h5">Data</Typography>
      <Typography>{format(data.createdAt, "yyyy-MM-dd HH:mm:ss")}</Typography>
      <Typography>{setLocale(data.music.title, router)}</Typography>
      <MusicListItem data={data.music} />
      <Typography>amount : {data.amount}</Typography>

      <Typography variant="h5">Stripe</Typography>
      <Typography>{stripeData?.amount}</Typography>
    </DashboardLayout>
  );
};

export default Transaction;
