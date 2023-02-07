import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";

import OrderForm from "../components/elements/form/order";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { redirectToSignIn } from "../helpers/user";

const Pay: NextPage = () => {
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Pay</Typography>
      <OrderForm />
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};
export default Pay;
