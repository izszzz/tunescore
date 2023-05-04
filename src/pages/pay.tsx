import Typography from "@mui/material/Typography";
import type { NextPage } from "next";

import OrderForm from "../components/elements/form/order";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";

const Pay: NextPage = () => {
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Pay</Typography>
      <OrderForm />
    </DefaultSingleColumnLayout>
  );
};

export default Pay;
