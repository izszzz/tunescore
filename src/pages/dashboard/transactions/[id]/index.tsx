import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import ResourceListItem from "../../../../components/elements/list/item/resource";
import DashboardLayout from "../../../../components/layouts/dashboard";
import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";

const Transaction: NextPage = () => {
  const router = useRouter<"/dashboard/transactions/[id]">(),
    { data } = trpc.currentUser.findUniqueTransaction.useQuery(router.query.id),
    { data: stripeData } = trpc.stripe.paymentIntent.useQuery(
      data?.stripePaymentIntentId
    );
  if (!data) return null;
  return (
    <DashboardLayout active="transactions">
      <Typography variant="h3">{data.type}</Typography>

      <Typography variant="h5">Data</Typography>
      <Typography>{format(data.createdAt, "yyyy-MM-dd HH:mm:ss")}</Typography>
      <Typography>
        {data.music ? setLocale(data.music.resource.name, router) : ""}
      </Typography>
      {data.music && (
        <ResourceListItem
          data={{ ...data.music.resource, music: data.music }}
        />
      )}
      <Typography>amount : {data.amount}</Typography>

      <Typography variant="h5">Stripe</Typography>
      <Typography>{stripeData?.amount}</Typography>
    </DashboardLayout>
  );
};

export default Transaction;
