import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import MusicListItem from "../../../../components/elements/list/item/music";
import DashboardLayout from "../../../../components/layouts/dashboard";
import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";

const Transaction: NextPage = () => {
  const router = useRouter<"/dashboard/transactions/[id]">(),
    { data } = trpc.currentUser.findUniqueTransaction.useQuery(router.query.id),
    { data: stripeData } = trpc.stripe.paymentIntent.useQuery(
      data?.stripePaymentIntentId
    );
  if (!data) return <></>;
  return (
    <DashboardLayout active="transactions">
      <Typography variant="h3">{data.type}</Typography>

      <Typography variant="h5">Data</Typography>
      <Typography>{format(data.createdAt, "yyyy-MM-dd HH:mm:ss")}</Typography>
      <Typography>
        {data.music ? setLocale(data.music.title, router) : ""}
      </Typography>
      {data.music && <MusicListItem data={data.music} />}
      <Typography>amount : {data.amount}</Typography>

      <Typography variant="h5">Stripe</Typography>
      <Typography>{stripeData?.amount}</Typography>
    </DashboardLayout>
  );
};

export default Transaction;
